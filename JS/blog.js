console.log("blog.js");

// array for blogs
let blogsArr = [
  {
    id: 1,
    image: "Images-Videos/digital-work-blog.jpg",
    title: "Digital Work",
    detail:
      "Digital work means performing tasks using digital tools and technologies. It boosts efficiency, enables remote collaboration, and opens new opportunities like freelancing, remote jobs, and online businesses. Key aspects include reliable communication, cloud-based file sharing, automation of repetitive tasks, and good time-management practices. Embracing digital work helps individuals and organizations stay flexible, productive, and competitive in a fast-changing world.",
  },
  {
    id: 2,
    image: "Images-Videos/python.png",
    title: "Python",
    detail:
      "Python is a powerful and versatile programming language that is widely used in web development, data science, automation, and artificial intelligence. Its simple and readable syntax makes it beginner-friendly while still being robust enough for advanced projects. With thousands of libraries and frameworks, Python allows developers to build applications quickly and efficiently. It continues to grow in popularity because of its flexibility, strong community support, and wide range of practical uses in the modern tech world.",
  },
  {
    id: 3,
    image: "Images-Videos/coding.jpg",
    title: "Full Stack Developement",
    detail:
      "Full stack development refers to the ability to work on both the front-end and back-end of a web application. A full stack developer handles everything from designing user interfaces with HTML, CSS, and JavaScript to managing databases and server-side logic with technologies like Node.js, Python, or PHP. This approach makes developers more versatile, capable of building complete applications, and better at understanding how different parts of a system connect. Full stack development is highly valued in the industry because it allows for faster project delivery and more efficient teamwork.",
  },
  {
    id: 4,
    image: "Images-Videos/graphic-icon.png",
    title: "Graphic Design",
    detail:
      "Graphic design is the art of creating visual content to communicate messages effectively. It combines typography, images, colors, and layouts to produce designs for websites, advertisements, logos, social media, and print media. Good graphic design not only attracts attention but also helps convey a brand’s identity and values clearly. With the rise of digital platforms, graphic design has become an essential skill for marketers, businesses, and creatives to engage audiences and enhance visual storytelling.",
  },
  {
    id: 5,
    image: "Images-Videos/cyber-security-blog.jpg",
    title: "Cyber Security",
    detail:
      "Cyber security involves protecting computers, networks, and digital information from unauthorized access, attacks, or damage. It includes measures like firewalls, encryption, secure passwords, and regular software updates to safeguard sensitive data. As more personal and business activities move online, cyber threats such as hacking, phishing, and malware are becoming increasingly common. Strong cyber security practices help individuals and organizations prevent data breaches, maintain privacy, and ensure the safe use of digital technologies.",
  },
  {
    id: 6,
    image: "Images-Videos/Artificial-I.jpg",
    title: "Artificial Intelligence",
    detail:
      "Artificial Intelligence (AI) is the field of computer science that focuses on creating machines capable of performing tasks that usually require human intelligence. This includes learning from data, recognizing patterns, making decisions, and understanding natural language. AI is widely applied in areas like virtual assistants, recommendation systems, autonomous vehicles, healthcare diagnostics, and more. By automating complex tasks and providing intelligent insights, AI is transforming industries and shaping the future of technology.",
  },
  {
    id: 7,
    image: "Images-Videos/data-analytics.jpg",
    title: "Data Analytics",
    detail:
      "Data analytics is the process of examining raw data to discover patterns, draw meaningful insights, and support decision-making. It involves collecting, cleaning, and analyzing data using statistical methods and tools like Excel, Python, R, or specialized analytics software. Organizations use data analytics to understand customer behavior, optimize operations, predict trends, and improve business strategies. In today’s data-driven world, the ability to interpret and leverage data effectively is a crucial skill across industries.",
  },
  {
    id: 8,
    image: "Images-Videos/cloud-c.jpg",
    title: "Cloud Computing",
    detail:
      "Cloud computing refers to the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet (“the cloud”). It allows individuals and organizations to access resources on-demand without maintaining physical infrastructure. Cloud computing offers benefits such as scalability, cost-efficiency, remote accessibility, and automatic updates. Services like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud have made cloud computing a cornerstone of modern IT, enabling businesses to innovate faster and operate more flexibly.",
  },
  {
    id: 9,
    image: "Images-Videos/hacking.jpg",
    title: "Ethical Hacking",
    detail:
      "Ethical hacking is the practice of legally probing computer systems, networks, and applications to find security vulnerabilities before malicious actors can exploit them. Ethical hackers use the same tools and techniques as cybercriminals but operate with permission and within legal boundaries to improve security. Their work includes penetration testing, vulnerability assessments, and reporting actionable fixes to strengthen defenses. Organizations hire ethical hackers to proactively identify weaknesses, comply with security standards, and reduce the risk of data breaches.",
  },
  {
    id: 10,
    image: "Images-Videos/marketing.jpg",
    title: "Digital Marketing",
    detail:
      "Digital marketing is the practice of promoting products, services, or brands using online channels such as social media, search engines, email, and websites. It enables businesses to reach a wider audience, target specific demographics, and measure the effectiveness of campaigns in real time. Key strategies include content marketing, SEO, pay-per-click advertising, and influencer partnerships. In today’s digital-first world, mastering digital marketing is essential for businesses to build brand awareness, engage customers, and drive growth.",
  },
  {
    id: 11,
    image: "Images-Videos/animated-clock.jpg",
    title: "Animation",
    detail:
      "Animation is the art of bringing images, characters, or objects to life through motion. It is widely used in films, advertisements, video games, websites, and educational content to tell stories and engage audiences. Animators combine creativity, design skills, and technology to create visually appealing sequences, whether through traditional hand-drawn techniques, 2D or 3D computer animation. Effective animation captures attention, conveys emotions, and enhances the overall experience of visual media.",
  },
  {
    id: 12,
    image: "Images-Videos/video-edit.jpg",
    title: "Video Editing",
    detail:
      "Video editing is the process of arranging and manipulating video footage to create a polished, cohesive final product. It involves cutting, trimming, adding transitions, effects, sound, and color correction to enhance storytelling and visual appeal. Video editors work on projects ranging from films and advertisements to social media content and tutorials. Skilled video editing helps convey messages clearly, engage viewers, and elevate the overall quality of visual content.",
  },
  {
    id: 13,
    image: "Images-Videos/ux-ui-design.jpg",
    title: "UX/UI Design",
    detail:
      "UX/UI design focuses on creating user-friendly and visually appealing digital experiences. UX (User Experience) design ensures that a product is intuitive, efficient, and enjoyable to use, while UI (User Interface) design deals with the look and feel, including layout, colors, typography, and interactive elements. Together, UX and UI design help users navigate websites, apps, and software effortlessly, improving satisfaction and engagement. Effective UX/UI design is essential for building products that meet user needs and encourage positive interactions.",
  },
  {
    id: 14,
    image: "Images-Videos/binary-code.jpg",
    title: "Machine Learning",
    detail:
      "Machine learning is a branch of artificial intelligence that enables computers to learn from data and improve their performance without being explicitly programmed. It involves algorithms and statistical models that can identify patterns, make predictions, and support decision-making. Machine learning is widely used in applications like recommendation systems, speech recognition, image processing, and predictive analytics. By leveraging large amounts of data, machine learning helps businesses and researchers automate tasks, gain insights, and innovate in various fields.",
  },
  {
    id: 15,
    image: "Images-Videos/video-editing.jpg",
    title: "Content Creation",
    detail:
      "Content creation is the process of producing digital material—such as articles, videos, graphics, podcasts, or social media posts—to engage, inform, or entertain an audience. Effective content captures attention, communicates messages clearly, and aligns with the goals of a brand or individual. Content creators plan, design, and publish material that resonates with their target audience, often using analytics to refine their approach. In the digital age, content creation is essential for building online presence, driving engagement, and establishing authority in any niche.",
  },
];

let blogList = document.querySelector(".blogsContainer .blogList");
let showMore = document.querySelector(".blogsContainer .moreContent");
let footer = document.querySelector('footer')

function primaryDisplay(primaryList = blogsArr.slice(0, 6)) {
  blogList.innerHTML = primaryList
    .map((blog) => {
      let short = blog.detail.split(" ").slice(0, 12).join(" ") + "...";
      return `<div class="card darkBox shape" data-id="${blog.id}">
          <div class="image">
            <img src="${blog.image}" alt="Blog Banner">
          </div>
          <div class="content">
            <h2>${blog.title}</h2>
            <p>${short}</p>
          </div>
        </div>`;
    })
    .join(" ");
}
primaryDisplay();

// search filter
let searchInput = document.getElementById('inputSearch')
searchInput.addEventListener('input', filterCards)

function filterCards() {
  let key = searchInput.value.toLowerCase()
  
  if(searchInput.value === '') {
    showMore.style.display = 'block'
    primaryDisplay()
    expantion()
    return;
  }

  let filtered = blogsArr.filter(blog => {
    return blog.title.toLowerCase().includes(key)
  })

  if(filtered.length <= 1) {
    footer.style.position = 'absolute'
    footer.style.bottom = `${0}px`
    footer.style.left = `${0}px`
    footer.style.width = `100%`
  } else {
    footer.style.position = 'static'
  }

  if(filtered.length === 0) {
    blogList.innerHTML = `<h1>No Result Found</h1>`
    showMore.style.display = 'none'
    return;
  } else if (filtered.length === 0 && searchInput.value === '') {
    console.log(filtered)
    showMore.style.display = 'block'
  } else {
    showMore.style.display = 'none'
  }

  primaryDisplay(filtered)
  expantion()
}

showMore.addEventListener("click", () => {
  
  primaryDisplay(blogsArr)
  showMore.style.display = 'none'
  expantion()

});

function expantion() {
  let cards = document.querySelectorAll(".blogsContainer .blogList .card");

  cards.forEach((card) => {
    let isExpand = false;

    let image = card.querySelector(".image");
    let img = card.querySelector(".image img");
    let content = card.querySelector(".content");
    let blogText = card.querySelector(".content p");

    //   card expantion event
    card.addEventListener("click", () => {

      if (!isExpand) {
        let id = card.getAttribute("data-id");
        let blogData = blogsArr.find((b) => {
          return b.id == id;
        });

        card.classList.remove("card");
        card.classList.add("expand");

        image.classList.remove("image");
        image.classList.add("imgExpand");

        img.classList.add("imgExpandIMG");
        content.classList.add("contentExpand");

        let newDiv = document.createElement("div");
        let fadeDiv = document.createElement("div");

        fadeDiv.classList.remove("whiteFade");
        fadeDiv.classList.add("darkFade");
        fadeDiv.classList.add("fade");

        newDiv.innerHTML = `<i class="fa-solid fa-compress"></i>`;
        newDiv.classList.add("compress");
        card.appendChild(newDiv);
        image.after(fadeDiv);

        blogText.textContent = blogData.detail;
        isExpand = true;

        // newDiv event
        newDiv.addEventListener("click", (e) => {
          e.stopPropagation();

          if (isExpand) {
            card.classList.remove("expand");
            card.classList.add("card");

            image.classList.remove("imgExpand");
            image.classList.add("image");

            img.classList.remove("imgExpandIMG");
            content.classList.remove("contentExpand");
            newDiv.remove();
            fadeDiv.remove();

            blogText.textContent =
              blogData.detail.split(" ").slice(0, 12).join(" ") + "...";
            isExpand = false;
          }
        });
      }
    });
  });
}

expantion()
