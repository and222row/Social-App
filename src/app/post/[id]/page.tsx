 // New client component
import { getSpecificPost } from "@/lib/Redux/PostsSlice";
import { reduxStore } from "@/lib/Redux/ReduxStore";
import ClientPostPage from "./ClientPostPage";

export async function generateStaticParams() {
  const posts = [{ id: '1' }, { id: '2' }, { id: '3' }]; // Replace with your fetch logic
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }: { params: any }) {
  // Fetch the specific post directly if needed
  const specificPost = await reduxStore.dispatch(getSpecificPost(params.id));
  return <ClientPostPage specificPost={specificPost} />;
}
