import { redirect } from 'next/navigation';

// Root locale page redirects to /blog
export default function LocaleRoot({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/blog`);
}
