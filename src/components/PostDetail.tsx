import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">
          post 내용 블로그 내용용post 내용 블로그 내용용post 내용 블로그
          내용용post 내용 블로그 내용용post 내용 블로그 내용용
        </div>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <div className="post__author-name">{"지원"}</div>
          <div className="post__date">{"2025-02-15"}</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">{"삭제"}</div>
          <div className="post__edit">
            {/* 임시 */}
            <Link to={"/posts/edit/1"}>{"수정"}</Link>
          </div>
        </div>
        <div className="post__text">
          {"안녕하세요 블로그 등업 신청합니다!!"}
        </div>
      </div>
    </div>
  );
}
