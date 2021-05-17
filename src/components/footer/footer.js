import "./footer.scss"
import LogoImg from "../../assets/img/svg/logo__hotel.svg"
import Facebook from "../../assets/img/svg/facebook.svg"
import  Twitter from "../../assets/img/svg/twitter.svg"
import Instagram  from "../../assets/img/svg/instagram.svg"

function Footer(){
return(
  <div>
    <div>
      <div className="footer__bg">
     <div className="container">
          <div className="row footer__row">
             <div className="col-3">
              <div className="footer__item1">
              <svg className="footer__logo" width="118" height="39" viewBox="0 0 118 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.563 35.147C28.941 35.147 28.941 35.156 28.941 35.408V36.704C28.941 37.541 28.896 37.631 28.482 37.685L28.284 37.712C28.212 37.766 28.212 37.973 28.284 38.027C28.716 38.009 29.157 38 29.607 38C30.021 38 30.462 38.009 30.912 38.027C30.984 37.973 30.984 37.766 30.912 37.712L30.696 37.676C30.282 37.604 30.228 37.541 30.228 36.704V33.356C30.228 32.519 30.282 32.438 30.696 32.375L30.876 32.348C30.948 32.294 30.948 32.087 30.876 32.033C30.462 32.051 30.048 32.06 29.607 32.06C29.175 32.06 28.734 32.051 28.239 32.033C28.167 32.087 28.167 32.294 28.239 32.348L28.482 32.384C28.896 32.447 28.941 32.519 28.941 33.356V34.4C28.941 34.661 28.941 34.67 28.563 34.67H26.691C26.322 34.67 26.313 34.661 26.313 34.4V33.356C26.313 32.519 26.367 32.429 26.754 32.375L26.943 32.348C27.015 32.294 27.015 32.087 26.943 32.033C26.547 32.051 26.097 32.06 25.692 32.06C25.26 32.06 24.792 32.051 24.351 32.033C24.279 32.087 24.279 32.294 24.351 32.348L24.567 32.375C24.981 32.429 25.026 32.519 25.026 33.356V36.704C25.026 37.541 24.981 37.631 24.567 37.685L24.351 37.712C24.279 37.766 24.279 37.973 24.351 38.027C24.81 38.009 25.26 38 25.692 38C26.097 38 26.547 38.009 27.06 38.027C27.132 37.973 27.132 37.766 27.06 37.712L26.772 37.676C26.367 37.622 26.313 37.541 26.313 36.704V35.408C26.313 35.156 26.322 35.147 26.691 35.147H28.563ZM40.224 31.916C38.343 31.916 37.011 33.293 37.011 35.075C37.011 36.956 38.325 38.144 40.134 38.144C42.069 38.144 43.383 36.965 43.383 35.003C43.383 33.176 42.096 31.916 40.224 31.916ZM41.943 35.12C41.943 36.578 41.484 37.73 40.305 37.73C38.838 37.73 38.451 35.966 38.451 34.868C38.451 33.365 39.045 32.33 40.152 32.33C41.268 32.33 41.943 33.581 41.943 35.12ZM51.1663 36.704C51.1663 37.541 51.1123 37.622 50.7073 37.667L50.3023 37.712C50.2303 37.766 50.2303 37.973 50.3023 38.027C50.9323 38.009 51.4003 38 51.8323 38C52.2373 38 52.6873 38.009 53.2723 38.027C53.3353 37.973 53.3353 37.766 53.2723 37.712L52.9123 37.667C52.5073 37.613 52.4533 37.541 52.4533 36.704V32.735C52.4533 32.501 52.4803 32.474 52.6963 32.474H53.2363C53.9113 32.474 54.0373 32.897 54.1903 33.473C54.2353 33.545 54.4783 33.527 54.5233 33.446C54.5053 32.933 54.5683 32.204 54.6583 31.898C54.6403 31.871 54.5773 31.835 54.5233 31.835C54.4693 31.835 54.4423 31.844 54.4063 31.862C54.3253 32.051 54.1903 32.06 53.5963 32.06H50.2483C49.5643 32.06 49.5373 32.024 49.4923 31.871C49.4563 31.844 49.4113 31.835 49.3663 31.835C49.3213 31.835 49.2763 31.853 49.2403 31.88C49.1773 32.231 49.1323 32.789 48.9433 33.41C48.9973 33.527 49.1683 33.545 49.2763 33.491C49.5463 32.834 49.7353 32.474 50.3923 32.474H50.9503C51.1663 32.474 51.1663 32.519 51.1663 32.735V36.704ZM62.3851 32.825C62.3851 32.492 62.3851 32.474 62.6821 32.474H63.4021C63.8431 32.474 64.1131 32.582 64.2841 32.753C64.4011 32.879 64.5271 33.149 64.6261 33.464C64.7161 33.545 64.9231 33.527 64.9591 33.428C64.9141 32.825 64.8511 32.177 64.8421 32.033C64.7251 32.051 64.2121 32.06 63.6361 32.06H61.7281C61.2961 32.06 60.8551 32.051 60.4321 32.033C60.3421 32.087 60.3331 32.294 60.4141 32.348L60.6391 32.393C61.0441 32.474 61.0981 32.528 61.0981 33.347V36.704C61.0981 37.532 61.0441 37.586 60.6391 37.649L60.2161 37.712C60.1441 37.757 60.1441 37.973 60.2161 38.027C60.8911 38.009 61.3321 38 61.7641 38H62.9341C63.6721 38 64.5361 38.009 65.0131 38.027C65.1391 37.784 65.3551 37.055 65.3911 36.587C65.3551 36.479 65.1301 36.443 65.0581 36.542C64.5631 37.559 64.2571 37.586 63.4741 37.586C62.8171 37.586 62.6461 37.514 62.5291 37.352C62.4211 37.199 62.3851 36.911 62.3851 36.497V35.426C62.3851 35.156 62.3941 35.147 62.6371 35.147H63.2581C63.7261 35.147 63.8341 35.219 63.9241 35.651L63.9691 35.876C64.0321 35.957 64.2571 35.948 64.3021 35.867C64.2841 35.579 64.2751 35.255 64.2751 34.913C64.2751 34.571 64.2841 34.247 64.3021 33.959C64.2571 33.878 64.0321 33.878 63.9691 33.95L63.9241 34.175C63.8341 34.607 63.7261 34.67 63.2581 34.67H62.6371C62.3941 34.67 62.3851 34.652 62.3851 34.4V32.825ZM73.12 33.356C73.12 32.519 73.174 32.447 73.579 32.384L73.813 32.348C73.885 32.294 73.885 32.087 73.813 32.033C73.363 32.051 72.913 32.06 72.481 32.06C72.049 32.06 71.599 32.051 71.131 32.033C71.023 32.087 71.023 32.294 71.113 32.348L71.374 32.384C71.779 32.438 71.833 32.519 71.833 33.356V36.704C71.833 37.541 71.779 37.613 71.374 37.667L71.032 37.712C70.96 37.766 70.978 37.973 71.059 38.027C71.617 38.009 72.067 38 72.481 38H73.687C74.425 38 75.289 38.009 75.766 38.027C75.892 37.784 76.108 37.037 76.153 36.569C76.09 36.461 75.883 36.425 75.811 36.515C75.28 37.559 75.028 37.586 74.209 37.586C73.552 37.586 73.39 37.514 73.273 37.361C73.156 37.217 73.12 36.929 73.12 36.506V33.356ZM85.7647 36.317C85.7647 35.327 85.0537 34.805 84.4957 34.508L83.9017 34.193C83.4517 33.959 83.0827 33.581 83.0827 33.167C83.0827 32.717 83.4067 32.33 84.0007 32.33C84.6487 32.33 85.0357 32.987 85.1887 33.446C85.2697 33.536 85.4947 33.527 85.5397 33.419C85.5397 32.816 85.4497 32.33 85.3777 32.132C85.2697 32.114 85.1887 32.096 85.0717 32.06C84.7117 31.952 84.3427 31.916 84.0457 31.916C82.7407 31.916 81.9487 32.618 81.9577 33.635C81.9577 34.526 82.6687 35.066 83.3167 35.39C83.8567 35.66 84.5407 36.092 84.5407 36.821C84.5407 37.271 84.2347 37.73 83.5687 37.73C82.8037 37.73 82.2007 36.902 82.0207 36.317C81.9487 36.218 81.7417 36.227 81.6787 36.344C81.6787 36.956 81.7957 37.604 81.9667 37.802C82.1557 37.91 82.6687 38.144 83.4967 38.144C84.8557 38.144 85.7647 37.424 85.7647 36.317Z" fill="white"/>
<path d="M6.425 8.1C6.425 5.775 6.575 5.575 7.7 5.4L8.35 5.3C8.55 5.15 8.55 4.575 8.35 4.425C7.1 4.475 5.85 4.5 4.65 4.5C3.45 4.5 2.2 4.475 0.9 4.425C0.6 4.575 0.6 5.15 0.85 5.3L1.575 5.4C2.7 5.55 2.85 5.775 2.85 8.1V17.4C2.85 19.725 2.7 19.925 1.575 20.075L0.625 20.2C0.425 20.35 0.475 20.925 0.7 21.075C2.25 21.025 3.5 21 4.65 21H8C10.05 21 12.45 21.025 13.775 21.075C14.125 20.4 14.725 18.325 14.85 17.025C14.675 16.725 14.1 16.625 13.9 16.875C12.425 19.775 11.725 19.85 9.45 19.85C7.625 19.85 7.175 19.65 6.85 19.225C6.525 18.825 6.425 18.025 6.425 16.85V8.1ZM20.1957 14.35C20.1957 17.075 20.7457 18.925 22.0457 20C23.3957 21.1 25.0957 21.4 26.9957 21.4C29.0207 21.4 30.8457 20.775 31.9457 19.6C33.3207 18.075 33.5457 15.925 33.5457 13.575V10.775C33.5457 8.75 33.6457 6.85 33.9207 6.2C34.1457 5.675 34.6207 5.525 35.2707 5.375L35.7207 5.275C35.9207 5.075 35.8707 4.575 35.7207 4.425C34.7707 4.475 33.8457 4.5 32.9207 4.5C31.8957 4.5 30.9207 4.475 29.5707 4.425C29.4207 4.575 29.3707 5.075 29.5707 5.275L30.2457 5.4C30.9207 5.525 31.4707 5.675 31.6957 6.2C31.9707 6.85 32.0707 8.75 32.0707 10.775V13.8C32.0707 17.225 31.0957 20.025 27.8957 20.025C24.0957 20.025 23.7707 16.8 23.7707 13.875V8.1C23.7707 5.775 23.9207 5.575 25.0457 5.375L25.6457 5.275C25.8457 5.125 25.8457 4.575 25.6457 4.425C24.4457 4.475 23.2207 4.5 21.9957 4.5C20.7957 4.5 19.5457 4.475 18.3457 4.425C18.0707 4.575 18.0957 5.125 18.2957 5.275L18.9207 5.4C20.0457 5.625 20.1957 5.775 20.1957 8.1V14.35ZM39.4266 20.25C39.2016 20.4 39.2766 20.95 39.5266 21.075C40.2766 21.025 41.3266 21 42.1516 21C43.2016 21 44.3266 21.025 45.4266 21.075C45.7016 20.975 45.7266 20.375 45.5016 20.2L44.8516 20.125C44.3266 20.075 44.0516 19.95 44.0516 19.8C44.0516 19.65 44.1016 19.475 44.2766 19.125C45.1016 17.55 46.2766 15.65 47.2516 14.225C47.6266 14.7 49.5266 17.625 49.9016 18.3C50.5266 19.35 50.6266 19.575 50.6266 19.775C50.6266 19.925 50.3266 20.05 49.7016 20.125L49.0266 20.2C48.7766 20.325 48.8766 20.975 49.1016 21.075C50.4516 21.025 51.5766 21 53.3016 21C55.3266 21 56.1016 21.025 57.2016 21.075C57.4516 20.9 57.4516 20.375 57.2766 20.2L56.5016 20.1C55.5516 19.975 54.9266 19.625 54.0516 18.3C53.1516 16.95 51.9266 15.075 50.0516 12.175C49.8016 11.8 49.7016 11.525 49.7016 11.4C49.7016 11.275 49.9516 10.9 50.2016 10.55C51.3766 8.95 52.4766 7.3 53.6766 6.075C54.1266 5.625 54.5766 5.525 55.1016 5.45L56.1516 5.3C56.3266 5.075 56.3016 4.55 56.0516 4.425C55.2516 4.475 54.2266 4.5 53.0266 4.5C51.8516 4.5 51.0516 4.475 50.2766 4.425C50.0016 4.55 50.0016 5.125 50.2016 5.3L51.2016 5.475C51.5266 5.525 51.7016 5.65 51.7016 5.725C51.7016 5.85 51.7016 6.025 51.4266 6.475C50.6516 7.8 49.8266 9.025 48.9016 10.425C48.1266 9.3 47.2266 7.925 46.5516 6.75C46.2516 6.225 46.1516 6 46.1516 5.775C46.1516 5.6 46.6016 5.475 47.0016 5.4L47.5516 5.3C47.7266 5.1 47.7266 4.55 47.4516 4.425C46.6766 4.475 45.6766 4.5 43.6516 4.5C42.1266 4.5 40.5516 4.475 39.7516 4.425C39.5016 4.575 39.5016 5.1 39.7266 5.3L40.1516 5.375C41.2766 5.575 41.8016 5.9 42.3766 6.725C43.5516 8.4 45.1266 10.875 45.9516 12.1C46.2766 12.55 46.4016 12.875 46.4016 12.975C46.4016 13.125 46.2766 13.425 46.0516 13.75C44.9766 15.35 43.6266 17.3 42.9016 18.25C42.0766 19.375 41.5016 19.975 40.0016 20.175L39.4266 20.25ZM62.8275 14.35C62.8275 17.075 63.3775 18.925 64.6775 20C66.0275 21.1 67.7275 21.4 69.6275 21.4C71.6525 21.4 73.4775 20.775 74.5775 19.6C75.9525 18.075 76.1775 15.925 76.1775 13.575V10.775C76.1775 8.75 76.2775 6.85 76.5525 6.2C76.7775 5.675 77.2525 5.525 77.9025 5.375L78.3525 5.275C78.5525 5.075 78.5025 4.575 78.3525 4.425C77.4025 4.475 76.4775 4.5 75.5525 4.5C74.5275 4.5 73.5525 4.475 72.2025 4.425C72.0525 4.575 72.0025 5.075 72.2025 5.275L72.8775 5.4C73.5525 5.525 74.1025 5.675 74.3275 6.2C74.6025 6.85 74.7025 8.75 74.7025 10.775V13.8C74.7025 17.225 73.7275 20.025 70.5275 20.025C66.7275 20.025 66.4025 16.8 66.4025 13.875V8.1C66.4025 5.775 66.5525 5.575 67.6775 5.375L68.2775 5.275C68.4775 5.125 68.4775 4.575 68.2775 4.425C67.0775 4.475 65.8525 4.5 64.6275 4.5C63.4275 4.5 62.1775 4.475 60.9775 4.425C60.7025 4.575 60.7275 5.125 60.9275 5.275L61.5525 5.4C62.6775 5.625 62.8275 5.775 62.8275 8.1V14.35ZM85.2084 17.4C85.2084 19.7 85.0584 19.875 83.9334 20.075L83.2584 20.2C83.0584 20.325 83.0584 20.925 83.2584 21.075C84.5584 21.025 85.6584 21 86.9084 21C88.1084 21 89.2584 21.025 90.5834 21.075C90.7584 20.925 90.7584 20.325 90.5834 20.2L89.9084 20.075C88.7834 19.875 88.6334 19.7 88.6334 17.4V14.325C88.6334 13.825 88.6834 13.775 89.5584 13.775C90.1834 13.775 90.5834 13.975 90.8834 14.65C91.4584 15.975 92.0334 17.2 92.8334 18.525C93.9334 20.325 95.3834 21.15 97.6834 21.15C98.4584 21.15 99.2584 21.1 99.6584 20.925C99.7834 20.775 99.7834 20.4 99.5584 20.275C99.1834 20.25 98.5334 20.1 97.8834 19.575C96.6834 18.55 95.6584 16.675 94.0084 13.325C93.8834 13.05 93.8834 12.9 94.1334 12.775C95.2834 12.2 96.7834 11.25 96.7834 9.025C96.7834 7.425 96.0334 6.175 94.5834 5.325C93.6334 4.75 91.8084 4.425 89.6834 4.425C87.3084 4.425 85.3584 4.525 83.4834 4.65C83.1834 4.775 83.1834 5.4 83.4334 5.525L84.1084 5.625C85.1584 5.775 85.2084 6.05 85.2084 8.55V17.4ZM88.6334 6.85C88.6334 5.65 88.6834 5.575 89.7084 5.575C91.6584 5.575 92.9834 7.025 92.9834 9.275C92.9834 10.75 92.5084 11.55 92.0834 11.975C91.6084 12.45 91.0834 12.675 90.1834 12.675C88.7084 12.675 88.6334 12.6 88.6334 11.725V6.85ZM110.933 15.65C110.933 14.225 111.108 13.6 111.758 12.425L113.333 9.575C114.533 7.4 115.133 6.5 115.508 6.025C115.783 5.675 116.358 5.5 116.808 5.425L117.458 5.3C117.658 5.125 117.658 4.525 117.358 4.425C116.633 4.475 115.858 4.5 114.908 4.5C114.008 4.5 113.108 4.475 112.108 4.425C111.858 4.55 111.883 5.175 112.083 5.3L112.558 5.4C113.158 5.5 113.558 5.65 113.558 5.8C113.558 6.1 113.258 6.85 112.358 8.625C111.708 9.9 110.933 11.525 110.208 12.75C109.908 12.125 109.333 10.975 108.958 10.15L107.783 7.475C107.258 6.3 107.133 5.925 107.133 5.725C107.133 5.7 107.283 5.6 107.733 5.5L108.583 5.3C108.808 5.1 108.758 4.525 108.533 4.425C107.683 4.475 106.408 4.5 104.883 4.5C103.408 4.5 102.483 4.475 101.358 4.425C101.058 4.5 101.033 5.1 101.258 5.3L102.108 5.45C102.983 5.6 103.208 6 103.708 7.025L106.683 13.175C107.333 14.5 107.358 14.9 107.358 16.15V17.4C107.358 19.725 107.208 19.9 106.083 20.075L105.233 20.2C105.033 20.35 105.033 20.925 105.233 21.075C106.708 21.025 107.958 21 109.158 21C110.358 21 111.583 21.025 113.208 21.075C113.383 20.925 113.383 20.35 113.208 20.2L112.208 20.075C111.083 19.925 110.933 19.725 110.933 17.4V15.65Z" fill="white"/>
</svg>

              <p className="footer__address">497 Evergreen Rd. Roseville, CA 95673</p>
              <p className="footer__number">+44 345 678 903</p>
              <a href="" className="footer__email"> luxury_hotels@gmail.com</a>
              </div>
             </div>
          <div className="col-3">
          <ul className="footer__menu">
               <li className="footer__list">About Us</li>
               <li className="footer__list">Contact</li>
               <li className="footer__list">Terms & Conditions</li> 
            </ul>
          </div>
          <div className="col-3">
          <ul className="footer__menu1">
               <li className="footer__list">  <img src= {Facebook} className="footer__svg"/> Facebook</li>
               <li className="footer__list">   <img src= {Twitter} className="footer__svg"/> Twitter</li>
               <li className="footer__list">   <img src= {Instagram} className="footer__svg"/>Instagram</li> 
            </ul>
          </div>
          <div className="col-3">
           <p className="footer__text">Subscribe to our newsletter</p>
            <form action="" className="footer__form">
             <input type="text" className="footer__input" placeholder="Email Address"></input> 
            <button className="footer__button">OK</button>
            </form>
          </div>
          </div>
     </div>
     </div>
    
    </div>

  </div>

)
}

export default Footer