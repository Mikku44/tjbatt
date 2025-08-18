interface IProps {
  params:Promise<{
    categoryName: string;
    blogTitle: string;
  }>;
}

export default async function page({ params }: IProps) {
  const { categoryName, blogTitle } = await params;

  return (
    <main className="min-h-screen max-w-7xl m-auto mt-20 px-4">
      <h1>หน้าบล็อกโพสต์</h1>
      <p>หมวดหมู่: {categoryName}</p>
      <p>ชื่อเรื่องบล็อก: {blogTitle}</p>
    </main>
  );
}