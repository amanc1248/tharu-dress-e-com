import "./DetailsPage.css";
function DetailsPage({ title, detailName }) {
  return (
    <div className="footer__faqs">
      <div
        className="theBackgroundImage"
        style={{
          backgroundImage: `url("images/croped.jpg")`,
        }}
      >
        <div className="faq__title">{title}</div>
      </div>
      <div>
        <span className="detail__name"> {detailName} detail </span>
      </div>
    </div>
  );
}
export default DetailsPage;
