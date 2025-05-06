import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  let post1= [
    { id: "1", img: "blog/assets/image/1.jpg", title: "How much does a website development cost?", description: "Sharing of right agriculture knowledge and technology to the growers at right time motivates them to improve their crop productivity...", link: "/blog/website-development-cost-nepal",},
  ]
  let post2 = [
    { id: "2", img: "blog/assets/image/2.jpg", title: "What is corporate business Email?", description: "In the heart of the Himalayas, where lush landscapes and fertile soil meet, Nepal is increasingly embracing organic farming. As a country where agriculture plays a pivotal role in the economy, the shift towards organic practices offers a refreshing solution for both farmers and consumers...", link:"what-is-corporate-business-email",},
  ]
  let post3 = [
    { id: "3", img: "blog/assets/image/3.jpg", title: "What is IT Audit ?", description: "Agriculture is the backbone of many economies worldwide, and Nepal is no exception. The country’s vast farming community...", link:"what-is-it-audit-nepal",},
    
    { id: "4", img: "blog/assets/image/4.jpg", title: "How to keep data safe from Ransomware Attacks?", description: "Water is one of the most critical resources for farming in Nepal, especially as climate change and erratic rainfall patterns continue to....", link:"protect-data-from-ransomware-attacks"}, 
  ]
  let post4 = [
    { id: "5", img: "blog/assets/image/5.jpg", title: "What is DataBanking?", description: "Agriculture has been the backbone of Nepal’s economy for centuries. However, traditional farming methods, while effective in the past, have often been inefficient...", link:"what-is-databanking"},

    { id: "6", img: "blog/assets/image/6.jpg", title: "The rise of Ecommerce ", description: "Agriculture is a vital part of Nepal’s economy, but farmers in the country face numerous challenges, including unpredictable weather, limited resources and traditional farming practices..", link:"rise-of-ecommerce-in-nepal"},

    { id: "7", img: "blog/assets/image/7.jpg", title: "Digital Transformation for Economic Growth", description: "Livestock farming is a cornerstone of Nepal’s agricultural economy, with dairy and poultry farming playing a significant role in providing nutrition..", link:"digital-transformation-economic-growth"},
  ]
  let post5 = [
    { id: "8", img: "blog/assets/image/8.jpg", title: "IT Consulting & Solutions", description: "Agriculture remains the backbone of Nepal’s economy, with the majority of the population relying on farming for their livelihood. Recognizing this,...", link:"IT-Consulting-&-Solutions"},

    { id: "9", img: "blog/assets/image/9.jpg", title: "Why Your Business in Nepal Needs IT Consulting: A 2025 Perspective", description: "Climate change is one of the biggest challenges facing agriculture today. Rising temperatures, unpredictable rainfall, and extreme weather events are making...", link:"why-nepal-businesses-need-it-consulting-2025"},
  ]
  let post6 = [
    { id: "10", img: "blog/assets/image/10.jpg", title: "How IT Consulting Can Reduce Costs and Improve Efficiency for SMEs in Nepal", description: "Selecting the right crops is crucial for successful farming, especially in a country like Nepal, where diverse climates and terrains influence agricultural productivity...", link:"it-consulting-for-nepal-smes-cost-efficiency"},

    { id: "11", img: "blog/assets/image/11.jpg", title: "Custom Software vs Off-the-Shelf: What’s Best for Nepali Businesses?", description: "For small farmers in Nepal, harvesting crops is only half the battle. Without proper post-harvest management and storage solutions, a significant portion of produce..", link:"custom-vs-off-the-shelf-software-nepal"},
  ]
  let post7 = [
    { id: "12", img: "blog/assets/image/12.jpg", title: "A Beginner’s Guide to Choosing the Right IT Consultant in Kathmandu", description: "Organic farming is gaining popularity in Nepal as consumers become more conscious of their health and the environment...", link:"choose-it-consultant-kathmandu-guide"},

    { id: "13", img: "blog/assets/image/13.jpg", title: "Digital Transformation in Nepal: Trends, Challenges & Opportunities", description: "For Nepalese farmers, maximizing crop yields is key to improving livelihoods and ensuring food security. With challenges like unpredictable weather...", link:"digital-transformation-nepal-trends-challenges"},

    { id: "14", img: "blog/assets/image/14.jpg", title: "How Nepali Businesses Can Embrace Cloud Computing Safely and Efficiently", description: "Farming isn’t just about growing crops, it’s a business that requires smart decision-making to ensure profitability...", link:"cloud-computing-for-nepali-businesses"},

    { id: "15", img: "blog/assets/image/15.jpg", title: "Top 5 Technologies Reshaping Business in Nepal (AI, Cloud, Automation, etc.)", description: "Agriculture has long been the backbone of Nepal’s economy, but in recent years, fewer young people are choosing farming as a career...", link:"top-technologies-changing-business-nepal"},
  ]

  return (
    <>
      <section className="blog bg-[#f9f9f9]">
        <h1 className='flex place-content-center text-center text-[45px] font-bold text-[#4b4b4b] py-10'>Blog</h1>
        <hr />
        {/* Blog_1 */}
        <div className="container mx-auto max-w-[1200px] mt-5 mb-10 px-4 lg:px-0">
          {post1.slice(0, 1).map((a) => (
            <div className="blog-content max-h-[650px] border lg:border-none rounded-xl">
              <img className='object-cover w-full max-h-[500px] rounded-t-xl' src={a.img} alt="" />
              <div className="blog-text py-2 px-2 text-gray-600">
                <div className="title flex flex-col md:flex-row justify-between">
                  <h5 className='text-[20px] font-semibold text-[#4b4b4b] py-2'>{a.title}</h5>
                  <Link to={a.link}>
                    <button className='border hidden sm:block lg:block border-[#4b4b4b] text-[#4b4b4b] mt-4 rounded-lg px-2 py-1 my-2 gap-2 hover:bg-[#4b4b4b] hover:text-white'>Read More
                    </button>
                  </Link>
                </div>
                <p>{a.description}</p>
                <Link to={a.link}>
                  <button className='border block sm:hidden lg:hidden border-[#4b4b4b] text-[#4b4b4b] shadow mt-4 rounded-lg px-2 py-1 my-2 gap-2 hover:bg-[#4b4b4b] hover:text-white'>{a.link}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Blog_2 */}
        <div className="container mx-auto max-w-[1200px] py-10 flex flex-wrap flex-col md:flex-row items-center gap-y-6 justify-between px-4 lg:px-0">
          {post2.map((b) => (
            <div className="blog-content max-w-[590px] flex flex-wrap h-[545x] border rounded-xl">
              <img className='w-[590px] lg:h-[310px] h-[210px] object-cover rounded-t-xl' src={b.img} alt="" />
              <div className="blog-text px-2 text-gray-600">
                <h5 className='text-[20px] font-semibold text-[#4b4b4b] py-2'>{b.title}</h5>
                <p className='text-[15px]'>{b.description}</p>
                <Link to={`/blog/${b.link}`}>
                  <button className='border border-[#4b4b4b] mt-4 text-[#4b4b4b] shadow rounded-lg px-2 py-1 my-2 flex gap-2 hover:bg-[#4b4b4b] hover:text-white'>Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
          {/* Blog_3 */}
          <div className="blog-contents">
            {post3.slice(0, 2).map((d) => (
              <div className="blog-content max-w-[590px] h-[300px] lg:h-[242px] border gap-y-40 overflow-hidden rounded-xl my-6 flex text-gray-600">
                <div className="text basis-[70%] relative px-4 py-2">
                  <h5 className='text-[20px] font-semibold text-[#4b4b4b]'>{d.title}</h5>
                  <p className='text-[15px]'>{d.description}</p>
                  <Link to={`/blog/${d.link}`}>
                    <button className='border absolute bottom-2 border-[#4b4b4b] text-[#4b4b4b] mt-6 px-2 py-1 rounded-lg flex items-center gap-1  hover:bg-[#4b4b4b] hover:text-white'>Read More
                    </button>
                  </Link>
                </div>
                <div className="image basis-[30%]">
                  <img className=' lg:block md:block sm:block flex w-[100%] h-[100%] object-cover rounded-e-xl' src={d.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Blog_4 */}
        <div className="container mx-auto max-w-[1200px] gap-6 grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between mb-10 px-4 lg:px-0">
          {post4.slice(0, 3).map((e) => (
            <div className="blog-content w-full border rounded-xl">
              <img className='w-full object-cover lg:h-[280px] h-[210px] rounded-t-xl' src={e.img} alt="" />
              <div className="blog-text py-2 px-2 text-gray-600">
                <h5 className='text-[18px] font-semibold text-[#4b4b4b]'>{e.title}</h5>
                <p className='py-2 overflow-hidden'>{e.description}</p>
                <Link to={`/blog/${e.link}`}>
                  <button className='border shadow border-[#4b4b4b] text-[#4b4b4b] mt-8 rounded-lg px-2 py-1 flex gap-2 hover:bg-[#4b4b4b] hover:text-white'>Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
          {/* Blog_5 */}
        <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-y-6 gap-4 px-4 lg:px-0">
          {post5.slice(0, 2).map((f) => (
            <div className="blog-content max-w-[590px] h-[300px] lg:h-[240px] border overflow-hidden rounded-xl flex text-gray-600 mb-4">
              <div className="text basis-[70%] relative px-4 py-2">
                <h5 className='text-[20px] font-semibold text-[#4b4b4b]'>{f.title}</h5>
                <p className='text-[15px]'>{f.description}</p>
                <Link to={`/blog/${f.link}`}>
                  <button className='border absolute bottom-2 border-[#4b4b4b] text-[#4b4b4b] mt-6 px-2 py-1 rounded-lg flex items-center gap-1  hover:bg-[#4b4b4b] hover:text-white'>Read More
                  </button>
                </Link>
              </div>
              <div className="image basis-[30%]">
                <img className='flex wifull h-full lg:block md:block sm:block object-cover rounded-e-xl' src={f.img} alt="" />
              </div>
            </div>
          ))}
        </div>
          {/* Blog_6 */}
        <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-y-6 gap-4 px-4 lg:px-0">
          {post6.slice(0, 2).map((g) => (
            <div className="blog-content max-w-[590px] h-[300px] lg:h-[240px] border rounded-xl overflow-hidden flex text-gray-600 mb-6">
              <div className="text basis-[70%] relative px-4 py-2">
                <h5 className='text-[20px] font-semibold text-[#4b4b4b]'>{g.title}</h5>
                <p className='text-[15px]'>{g.description}</p>
                <Link to={`/blog/${g.link}`}>
                  <button className='border absolute bottom-2 border-[#4b4b4b] text-[#4b4b4b] px-2 py-1 rounded-lg flex items-center gap-1  hover:bg-[#4b4b4b] hover:text-white'>Read More
                  </button>
                </Link>
              </div>
              <div className="image basis-[30%]">
                <img className='flex w-full h-full lg:block md:block sm:block object-cover rounded-e-xl' src={g.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        {/* Blog_7 */}
        <div className="container mx-auto max-w-[1200px] gap-4 grid sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 items-center gap-y-6 justify-between justify py-5">
          {post7.slice(0,4).map((h) => (
            <div className="blog-content overflow-hidden w-full lg:h-[450px] h-[470px] items-center relative border rounded-xl">
              <img className='w-full lg:h-[170px] h-[210px] object-cover rounded-t-xl' src={h.img} alt="" />
              <div className="blog-text py-2 px-2 text-gray-600">
                <h5 className='text-[18px] font-semibold text-[#4b4b4b] py-2'>{h.title}</h5>
                <p>{h.description}</p>
                <Link to={`/blog/${h.link}`}>
                  <button className='border absolute bottom-[10px] border-[#4b4b4b] text-[#4b4b4b] shadow mt-8 rounded-lg px-2 py-1 flex gap-2 hover:bg-[#4b4b4b] hover:text-white'>Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}

export default Blog
