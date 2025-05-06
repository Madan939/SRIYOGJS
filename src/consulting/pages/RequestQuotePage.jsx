import React from "react";

const RequestQuotePage = () => {
  return (
    <>
      <section className="pt-[90px] lgMax:w-full lgMax:pt-[60px] mdMax:pt-[52px]">
        <div className="bg-[#fefefe]">
          <div className="max-w-[1140px] mx-auto my-0 lgMax:max-w-[920px] mdMax:max-w-[720px] py-9 lgMax:px-12">
            <div className="flex flex-col">
              <h1 className="text-[28px] text-black mb-2 font-normal leading-9 mdMax:leading-[2rem]">
                Request a Quotation
              </h1>
            </div>
          </div>
        </div>
        {/* form field of request quote */}
        <div className="bg-[#fafafa] py-12">
          <div className="max-w-[1140px] mx-auto my-0 lgMax:max-w-[920px] mdMax:max-w-[720px]  lgMax:px-12">
            <div>
              <iframe
                class="airtable-embed"
                src="https://airtable.com/embed/app30hmkatmLiojps/pagBFKEcQg2EOzQqu/form"
                frameborder="0"
                onmousewheel=""
                width="100%"
                height="1385"
                style={{ background: "transparent"}}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuotePage;
