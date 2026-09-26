import { SmartLink } from "@/components/ui/SmartLink";

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="wrap">
          <div className="kicker">404</div>
          <h2>这个页面不存在</h2>
          <p className="lead">可能链接已更新，回到首页继续查看。</p>
          <SmartLink className="btn-primary" href="/">
            返回首页
          </SmartLink>
        </div>
      </section>
    </main>
  );
}
