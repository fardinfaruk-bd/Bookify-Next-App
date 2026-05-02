export async function getCategories() {
  const res = await fetch("https://bookify-next-server.onrender.com/categories");
  const data = await res.json();
  return data;
}
export async function getBooks() {
  const res = await fetch("https://bookify-next-server.onrender.com/books");
  const data = await res.json();
  return data;
}
export async function getBookById({id}) {
  const res = await fetch(`https://bookify-next-server.onrender.com/books/${id}`);
  const data = await res.json();
  return data;
}
