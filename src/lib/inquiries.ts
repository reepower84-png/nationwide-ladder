import { supabase, InquiryDB } from './supabase';

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  message: string;
  status: '대기중' | '연락완료' | '상담완료';
  createdAt: string;
}

function mapDBToInquiry(dbInquiry: InquiryDB): Inquiry {
  return {
    id: dbInquiry.id,
    name: dbInquiry.name,
    phone: dbInquiry.phone,
    message: dbInquiry.message,
    status: dbInquiry.status as Inquiry['status'],
    createdAt: dbInquiry.created_at,
  };
}

export async function getInquiries(): Promise<Inquiry[]> {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching inquiries:', error);
    throw error;
  }

  return (data || []).map(mapDBToInquiry);
}

export async function addInquiry(inquiry: Omit<Inquiry, 'id' | 'status' | 'createdAt'>): Promise<Inquiry> {
  const { data, error } = await supabase
    .from('inquiries')
    .insert({
      name: inquiry.name,
      phone: inquiry.phone,
      message: inquiry.message,
      status: '대기중',
    })
    .select()
    .single();

  if (error) {
    console.error('Error adding inquiry:', error);
    throw error;
  }

  return mapDBToInquiry(data);
}

export async function updateInquiryStatus(id: string, status: Inquiry['status']): Promise<Inquiry | null> {
  const { data, error } = await supabase
    .from('inquiries')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating inquiry:', error);
    return null;
  }

  return data ? mapDBToInquiry(data) : null;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('inquiries')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting inquiry:', error);
    return false;
  }

  return true;
}
