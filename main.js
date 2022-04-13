const data = [
  {
    name: "김규연",
    img: "images/김규연.jpg",
    url: "https://kimgyuyeon.github.io/GyuyeonPortfolio",
  },
  {
    name: "김예은",
    img: "images/김예은.jpg",
    url: "https://kps2838.github.io/yeeun-s_portfolio/",
  },
  {
    name: "박정현",
    img: "images/박정현.jpg",
    url: "https://qkraksehs.github.io/PJHportfolio/",
  },
  {
    name: "신희정",
    img: "images/신희정.jpg",
    url: "https://sinheejung.github.io/shj-portfolio/",
  },
  {
    name: "손은샘",
    img: "images/손은샘.png",
    url: "https://soneunsaem.github.io/eunsaem-portfolio/",
  },
  {
    name: "임미화",
    img: "images/임미화.jpg",
    url: "https://limmihwa.github.io/_profile/",
  },
  {
    name: "이제현",
    img: "images/이제현.jpg",
    url: "https://leejaehyun93.github.io/portfolio.github.com",
  },
  {
    name: "조근우",
    img: "images/조근우.jpg",
    url: "https://ckw1994.github.io/portpolio-page/",
  },
  {
    name: "조지은",
    img: "images/조지은.jpg",
    url: "https://jj624.github.io/web-portfolio/",
  },
  {
    name: "양혜현",
    img: "images/양혜현.jpg",
    url: "https://cold-miss.github.io/PORTFOLIO/",
  },
  {
    name: "박철현",
    img: "images/박철현.png",
    url: "https://ironpark1105.github.io/wepPortfolio/",
  },
  {
    name: "최수진",
    img: `images/최수진.png`,
    url: "https://monari12.github.io/portfolio/",
  },
  {
    name: "문성훈",
    img: "images/문성훈.png",
    url: "https://sunghoon-moon-portfolio.netlify.app/",
  },
  {
    name: "송유진",
    img: "images/송유진.png",
    url: "https://eugeneeeeee.github.io/portfolio/index.html",
  },
  {
    name: "신은영",
    img: "images/신은영.png",
    url: "https://eunyoungdana.github.io/portfolio/",
  },
  {
    name: "김성헌",
    img: "images/김성헌.png",
    url: "https://trainingezen.github.io/Pv002/",
  },
];

const list = document.querySelector("#works .work-list");
let html = ``;

for (var i = 0; i < data.length; i++) {
  // console.log(data[i], i);
  html += `
            <li class="col-div-5 item">
                <a href="#">
                    <img src="${data[i].img}" alt="${i}">
                </a>
            </li>
        `;
}

list.innerHTML = html;


$(function(){
    $('.work-list > li').on('click', function(){
        console.log($(this).index())
        const idx = $(this).index();
        const work_info = `
            <div class="work-info">
                <figure>
                    <a href="${data[idx].url}" target="_blank">
                        <img src="${data[idx].img}" alt="${idx}">
                    </a>
                    <figcaption>${data[idx].name}</figcaption>
                </figure>          
                <a class="btn btn-outline-primary" href="${data[idx].url}" target="_blank">작품보러가기</a>
            </div>
        `
        $('#works .figure').html(work_info);
    })

    $('.work-list > li').eq(0).trigger('click');
})


// selector string
imagesLoaded( '.page', function() {
    console.log('loaded')
    $('.page').removeClass('loading');
    $('progress').hide();
});