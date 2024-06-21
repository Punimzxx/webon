const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    })

// translations
const translations = {
    th: {
        // nav
        nav_home: 'หน้าแรก',
        nav_about: 'เกี่ยวกับ',
        nav_products: 'ผลิตภัณฑ์',
        nav_logis:'การขนส่ง',
        nav_news: 'ข่าวสาร',
        nav_contact: 'ข้อมุลติดต่อ',
        // about
        about_h1:'เกี่ยวกับเรา',
        about_h2:'Golden Eagle Wood Products',
        about_p1:'บริษัท โกลเด้น อีเกิ้ล วู๊ด โปรดักส์ จำกัด เป็นผู้ผลิตไม้พาเลทคุณภาพสูง ที่ได้รับมาตรฐานสากล IPPC และมีใบรับรอง ISO14001 และ ISO9001 เป็นบริษัทที่มีประสบการณ์ในการสร้างไม้พาเลทและส่งออกไปต่างประเทศ ด้วยทีมช่างมืออาชีพและวัตถุดิบคุณภาพ โดยใช้ไม้คุณภาพดีจากท้องถิ่น ที่ผ่านการตรวจสอบคุณภาพอย่างเข้มงวดในทุกขั้นตอน พร้อมระบบขนส่งที่รวดเร็วและปลอดภัย',
        about_button:'เพิ่มเติม',
        // footer
        footer_h1:'ติดต่อเรา',
        footer_h2:'เบอร์ติดต่อ',
        footer_h3:'เวลาทำการ',
        footer_h4:'ที่ตั้ง',
        footer_p1:'โทร : 037-480-265',
        footer_p2:'โทร : 096-842-5898',
        footer_p3:'โทร : 096-943-1117',
        footer_p4:'08.30 น.-17.30 น.',
        footer_p5:'293 หมู่ที่ 12 ตำบลหัวหว้า อำเภอศรีมหาโพธิ จ.ปราจีนบุรี 25140',

    },
    en: {
        // nav
        nav_home: 'Home',
        nav_about: 'About',
        nav_products: 'Products',
        nav_logis:'Logistics',
        nav_news: 'News',
        nav_contact: 'Contact',
        // about
        about_h1:'About us',
        about_h2:'Golden Eagle Wood Products',
        about_p1:'Golden Eagle Wood Products Company Limited is a manufacturer of high quality wood pallets. That has received IPPC international standards and has ISO14001 and ISO9001 certificates. It is a company with experience in building wooden pallets and exporting them abroad. With a team of professional technicians and quality raw materials Using good quality wood from local areas. that passes strict quality checks in every step with a fast and safe transportation system',
        about_button:'More',
        // footer
        footer_h1:'Contact us',
        footer_h2:'Contact number',
        footer_h3:'Business hours',
        footer_h4:'Location',
        footer_p1:'Tel. : 037-480-265',
        footer_p2:'Tel. : 096-842-5898',
        footer_p3:'Tel. : 096-943-1117',
        footer_p4:'08.30 a.m.-5.30 p.m.',
        footer_p5:'293 Village No. 12, Hua Wa Subdistrict, Si Maha Phot District, Prachinburi Province 25140',
    
    },
    zh: {
        // nav
        nav_home: '首页',
        nav_about: '关于我们',
        nav_products: '产品中心',
        nav_logis:'物流',
        nav_news: '新闻中心',
        nav_contact: '联系方式',
        // about
        about_h1:'关于我们',
        about_h2:'金鹰木制品',
        about_p1:'金鹰木制品有限公司是一家高品质木质托盘制造商。该公司已获得 IPPC 国际标准，并拥有 ISO14001 和 ISO9001 证书。该公司在建造木质托盘并将其出口到国外方面拥有丰富的经验。该公司拥有一支专业技术人员团队和优质原材料，采用来自当地的优质木材。通过快速安全的运输系统，每一步都经过严格的质量检查',
        about_button:'更多',
        // footer
        footer_h1:'联系我们',
        footer_h2:'联系电话',
        footer_h3:'营业时间',
        footer_h4:'位置',
        footer_p1:'电话：037-480-265',
        footer_p2:'电话：096-842-5898',
        footer_p3:'电话：096-943-1117',
        footer_p4:'上午 08:30 - 下午 5:30',
        footer_p5:'293 村 12 号，Hua Wa 区，Si Maha Phot 县，巴真府 25140',

        
    }
};

// document.querySelector('select').addEventListener('change', function () {
//     const lang = this.value;
//     for (const id in translations[lang]) {
//         document.getElementById(id).innerText = translations[lang][id];
//     }
// });
document.querySelector('select').addEventListener('change', function () {
    const lang = this.value;
    for (const id in translations[lang]) {
        document.getElementById(id).innerText = translations[lang][id];
    }
});
// Load default language content
function loadDefaultLanguage(lang) {
    for (const id in translations[lang]) {
        document.getElementById(id).innerText = translations[lang][id];
    }
}
