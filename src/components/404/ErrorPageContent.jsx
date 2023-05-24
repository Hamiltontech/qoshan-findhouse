import Link from "next/link";
import Form from "./Form";

const ErrorPageContent = () => {
  return (
    <div className="error_page footer_apps_widget">
      <img
        className="img-fluid img-thumb"
        src="/assets/images/resource/error.png"
        alt="error.png"
      />
      <div className="erro_code">
        <h1>لم يتم العثور علي المحتوى المطلوب</h1>
      </div>
      <p>تواصل معنا للمساعدة</p>

      {/* End form */}

      <Link href="/">
        <a className="btn btn_error btn-thm">العودة</a>
      </Link>
    </div>
  );
};

export default ErrorPageContent;
