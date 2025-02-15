import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="post__navigation">
        <div className="post__navigation-active">전체</div>
        <div>나의 글</div>
      </div>
      <PostList />

      <Footer />
    </div>
  );
}
