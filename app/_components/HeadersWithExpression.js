import ShowParagraph from "@/app/_components/ShowParagraph";

function HeadersWithExpression() {
  return (
    <div className=" flex flex-col border-b-2 border-primary-200 divide-y divide-primary-300">
      <ShowParagraph headingText="99% On Time Delivery">
        With advanced logistics planning and real-time tracking, We ensure your shipments reach their destination on schedule-every time.
      </ShowParagraph>

      <ShowParagraph headingText="Al-Powered Tracking">
        With advanced logistics planning and real-time tracking, We ensure your shipments reach their destination on schedule-every time.
      </ShowParagraph>

      <ShowParagraph headingText="Cost -Effective Solutions">
        We deliver smart, efficient logistics solutions that optimize your supply chain without compromising quality. we reduce unnecessary costs
        while ensuring your shipments arrive safely and on time.
      </ShowParagraph>

      <ShowParagraph headingText="24/7 Customer Support ">
        Our dedicated team is available around the clock to assist with every shipment. From real-time tracking updates to resolving issues quickly,
        we ensure smooth, worry-free logistics and uninterrupted support whenever you need it.
      </ShowParagraph>
    </div>
  );
}

export default HeadersWithExpression;
