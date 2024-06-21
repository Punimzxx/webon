
  const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    })

    // translations

    const translations = {
      en: {
        // nav
        nav_home: "Home",
        nav_about: "About",
        nav_products: "Products",
        nav_news: "News",
        nav_contect: "Contact",

        // about
        h_sabout: "About The Company",
        h_about: "About The Company",
        title_p1:"Golden Eagle Wood Products Company Limited is a manufacturer of high quality wood pallets. That has received IPPC international standards and has ISO14001 and ISO9001 certificates. It is a company with experience in creating wooden pallets and exporting them abroad. With a team of professional technicians and quality raw materials Using good quality wood from local areas. that passes strict quality checks in every step With a fast and safe transportation system. The company is very pleased to design wooden pallets that meet the needs of every customer. In addition to wooden pallets, there are other products such as Scotch tape, clear plastic wrap, angled paper, and the company has a logistics transportation system. Sticks To meet the needs of various customers as well.",
        title_p2:"Year founded : 26 March 2020",
        title_p3:"Registered capital: 10,000,000 baht",
        title_p4:"Sales : Not disclosed",
        title_p5:"Main products : processed wood, pallets, adhesive tape, corner paper, plywood sheets, clear plastic wrap",
        title_p6:"Number of employees: 49 people as of June 2024",
        title_p7:"Total area : 4,012 square meters",
        title_p8:"Building area : 1,300 square meters",
        title_p9:"Head office address : 293 Village No. 12, Hua Wa Subdistrict, Si Maha Phot District Prachinburi Province 25140",
        h_policy:"Company policy",
        p_title1:"Produce products with quality standards",
        p_title2:"Deliver work on time",
        p_title3:"Create satisfaction for customers",
        p_title4:"sustainable development",

         // products
         h_sproducts:"Product",
         h_products1:"Our Products",
      },

      th: {
        // nav
        nav_home: "หน้าหลัก",
        nav_about: "เกี่ยวกับ",
        nav_products: "ผลิตภัณฑ์",
        nav_news: "ข่าวสาร",
        nav_contect: "ข้อมูลติดต่อ",

        // about
        h_sabout: "เกี่ยวกับบริษัท",
        h_about: "เกี่ยวกับบริษัท",
        title_p1: "บริษัท โกลเด้น อีเกิ้ล วู๊ด โปรดักส์ จำกัด เป็นผู้ผลิตไม้พาเลทคุณภาพสูง ที่ได้รับมาตรฐานสากล IPPC และมีใบรับรอง ISO14001 และ ISO9001 ป็นบริษัทที่มีประสบการณ์ในการสร้างไม้พาเลทและส่งออกไปต่างประเทศ ด้วยทีมช่างมืออาชีพและวัตถุดิบคุณภาพ โดยใช้ไม้คุณภาพดีจากท้องถิ่น ที่ผ่านการตรวจสอบคุณภาพอย่างเข้มงวดในทุกขั้นตอน พร้อมระบบขนส่งที่รวดเร็วและปลอดภัย ทางบริษัทยินดีอย่างยิ่งที่จะออกแบบไม้พาเลทที่ตรงกับความต้องการของลูกค้าทุกท่านนอกจากไม้พาเลทยังมีสินค้าอื่นๆ เช่น สก็อตเทป แรปพลาสติกใส กระดาษฉากมุม และทางบริษัทมีระบบขนส่งโลจิสติกส์ เพื่อตอบสนองความต้องการของลูกค้าที่หลากหลายอีกด้วย",
        title_p2:"ปีก่อตั้ง : 26 มีนาคม 2563",
        title_p3:"ทุนจดทะเบียน : 10,000,000 บาท",
        title_p4:"ยอดขาย : ไม่เปิดเผย",
        title_p5:"ผลิตภัณฑ์หลัก : ไม้แปรรูป ไม้พาเลท เทปกาว กระดาษฉากมุม ไม้อัดแผ่น แรปพลาสติกใส",
        title_p6:"จำนวนพนักงาน :  49 คน ณ เดือนมิถุนายน ปี 2567",
        title_p7:"พื้นที่ทั้งหมด : 4,012 ตารางเมตร",
        title_p8:"พื้นที่อาคาร : 1,300 ตารางเมตร",
        title_p9:"ที่อยู่สำนักงานใหญ่ : 293 หมู่ที่ 12 ตำบลหัวหว้า อำเภอศรีมหาโพธิ์ จังหวัดปราจีนบุรี 25140",
        h_policy:"นโยบายบริษัท",
        p_title1:"ผลิตสินค้าด้วยมาตรฐานที่มีคุณภาพ",
        p_title2:"ส่งมอบงานตรงเวลา",
        p_title3:"สร้างความพึงพอใจให้กับลูกค้า",
        p_title4:"พัฒนาอย่างยั่งยืน",
         // products
         h_sproducts:"ผลิตภัณฑ์",
         h_products1:"ผลิตภัณฑ์ของเรา",
      },

      中文: {
        // nav
        nav_home: "主页",
        nav_about: "关于",
        nav_products: "产品",
        nav_news: "信息",
        nav_contect: "联系信息",

        // about
        h_sabout: "关于公司",
        h_about: "关于公司",
        title_p1: "金鹰木制品有限公司是一家高品质木托盘制造商。已获得IPPC国际标准，并拥有ISO14001和ISO9001证书，是一家拥有制造木托盘并出口国外的经验的公司。拥有专业的技术团队和优质的原材料使用当地优质木材。每一步都经过严格的质量检查拥有快速、安全的交通系统。公司非常乐意设计出满足每一位客户需求的木托盘。除了木托盘外，还有透明胶带、透明保鲜膜、角纸等其他产品，并且公司拥有物流运输系统。也能满足不同客户的需求。",
        title_p2:"成立年份 ：2020年3月26日",
        title_p3:"注册资本 ：10,000,000泰铢",
        title_p4:"销售情况 ：未透露",
        title_p5:"主要产品 ：加工木材、托盘、胶带、角纸、胶合板、透明保鲜膜",
        title_p6:"员工人数 ：截至 2024 年 6 月 49 人",
        title_p7:"总面积 ：4,012平方米",
        title_p8:"建筑面积 ：1300平方米",
        title_p9:"总部地址 ：巴真府 Si Maha Phot 区 Hua Wa 镇 293 村 12 号，邮编 25140",
        h_policy:"藝術本身",
        p_title1:"生产符合质量标准的产品",
        p_title2:"按时交付工作",
        p_title3:"为客户创造满意",
        p_title4:"可持续发展",
         // products
         h_sproducts:"产品",
         h_products1:"产品",
      
      }
  }
  
  const languageSelector = document.querySelector("select");
  let nav_home = document.getElementById("nav_home");
  let nav_about = document.getElementById("nav_about");
  let nav_products = document.getElementById("nav_products");
  let nav_news = document.getElementById("nav_news");
  let nav_contect = document.getElementById("nav_contect");
  // about
  let h_sabout = document.getElementById("h_sabout");
  let h_about = document.getElementById("h_about");
  let title_p1 = document.getElementById("title_p1");
  let title_p2 = document.getElementById("title_p2");
  let title_p3 = document.getElementById("title_p3");
  let title_p4 = document.getElementById("title_p4");
  let title_p5 = document.getElementById("title_p5");
  let title_p6 = document.getElementById("title_p6");
  let title_p7 = document.getElementById("title_p7");
  let title_p8 = document.getElementById("title_p8");
  let title_p9 = document.getElementById("title_p9");
  let h_policy = document.getElementById("h_policy");
  let p_title1 = document.getElementById("p_title1");
  let p_title2 = document.getElementById("p_title2");
  let p_title3 = document.getElementById("p_title3");
  let p_title4 = document.getElementById("p_title4");
  // products
  let h_sproducts = document.getElementById("h_sproducts");
  let h_products1 = document.getElementById("h_products1");

  
  languageSelector.addEventListener("change", (event) => {
      setLanguage(event.target.value);
  });
  
  const setLanguage = (language) => {
      if (language === "th") {
        // nav
          nav_home.innerText = translations.th.nav_home;
          nav_about.innerText = translations.th.nav_about;
          nav_products.innerText = translations.th.nav_products;
          nav_news.innerText = translations.th.nav_news;
          nav_contect.innerText = translations.th.nav_contect;

          // about 
          h_sabout.innerText = translations.th.h_sabout;
          h_about.innerText = translations.th.h_about;
          title_p1.innerText = translations.th.title_p1;
          title_p2.innerText = translations.th.title_p2;
          title_p3.innerText = translations.th.title_p3;
          title_p4.innerText = translations.th.title_p4;
          title_p5.innerText = translations.th.title_p5;
          title_p6.innerText = translations.th.title_p6;
          title_p7.innerText = translations.th.title_p7;
          title_p8.innerText = translations.th.title_p8;
          title_p9.innerText = translations.th.title_p9;
          h_policy.innerText = translations.th.h_policy;
          p_title1.innerText = translations.th.p_title1;
          p_title2.innerText = translations.th.p_title2;
          p_title3.innerText = translations.th.p_title3;
          p_title4.innerText = translations.th.p_title4;
          // products
          h_sproducts.innerText = translations.th.h_sproducts;
          h_products1.innerText = translations.th.h_products1;

      } else if (language === "en") {
        // nav
          nav_home.innerText = translations.en.nav_home;
          nav_about.innerText = translations.en.nav_about;
          nav_products.innerText = translations.en.nav_products;
          nav_news.innerText = translations.en.nav_news;
          nav_contect.innerText = translations.en.nav_contect;
          // about
          h_sabout.innerText = translations.en.h_sabout;
          h_about.innerText = translations.en.h_about;
          title_p1.innerText = translations.en.title_p1;
          title_p2.innerText = translations.en.title_p2;
          title_p3.innerText = translations.en.title_p3;
          title_p4.innerText = translations.en.title_p4;
          title_p5.innerText = translations.en.title_p5;
          title_p6.innerText = translations.en.title_p6;
          title_p7.innerText = translations.en.title_p7;
          title_p8.innerText = translations.en.title_p8;
          title_p9.innerText = translations.en.title_p9;
          h_policy.innerText = translations.en.h_policy;
          p_title1.innerText = translations.en.p_title1;
          p_title2.innerText = translations.en.p_title2;
          p_title3.innerText = translations.en.p_title3;
          p_title4.innerText = translations.en.p_title4;
          // products
          h_sproducts.innerText = translations.en.h_sproducts;
          h_products1.innerText = translations.en.h_products1;
           
           
           
      } else if (language === "中文") {
        // nav
        nav_home.innerText = translations.中文.nav_home;
        nav_about.innerText = translations.中文.nav_about;
        nav_products.innerText = translations.中文.nav_products;
        nav_news.innerText = translations.中文.nav_news;
        nav_contect.innerText = translations.中文.nav_contect;
        // about
        h_sabout.innerText = translations.中文.h_sabout;
        h_about.innerText = translations.中文.h_about;
        title_p1.innerText = translations.中文.title_p1;
        title_p2.innerText = translations.中文.title_p2;
        title_p3.innerText = translations.中文.title_p3;
        title_p4.innerText = translations.中文.title_p4;
        title_p5.innerText = translations.中文.title_p5;
        title_p6.innerText = translations.中文.title_p6;
        title_p7.innerText = translations.中文.title_p7;
        title_p8.innerText = translations.中文.title_p8;
        title_p9.innerText = translations.中文.title_p9;
        h_policy.innerText = translations.中文.h_policy;
        p_title1.innerText = translations.中文.p_title1;
        p_title2.innerText = translations.中文.p_title2;
        p_title3.innerText = translations.中文.p_title3;
        p_title4.innerText = translations.中文.p_title4;
        
        h_sproducts.innerText = translations.中文.h_sproducts;
        h_products1.innerText = translations.中文.h_products1;
      }
  }
