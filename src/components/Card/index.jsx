import React from 'react';
import styles from './Card.module.scss';

function Card({title, price, imageUrl, onClick}) {

  const [activePlus, setActivePlus] = React.useState(false);

  const [activeLike, setActiveLike] = React.useState(false);

  const handleClickPlus = () => {
        onClick(console.log({title, price, imageUrl}))
        setActivePlus(!activePlus);
  }

  const handleClickLike = () => {
    setActiveLike(!activeLike);
}

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        {/* <img src="/img/heart-unliked.svg" alt="Unliked" /> */}
        {!activeLike
          ? <svg className={styles.btn_unliked} onClick={handleClickLike} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="7" fill="#FEF0F0"/>
              <path d="M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z" fill="#a7a7a7"/>
            </svg>
          : <svg onClick={handleClickLike} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="7" fill="#FEF0F0"/>
              <path d="M23.6129 11.869C23.3646 11.3076 23.0067 10.7988 22.5591 10.3712C22.1111 9.94231 21.583 9.60147 21.0033 9.36723C20.4023 9.12337 19.7577 8.99855 19.1068 9.00001C18.1938 9.00001 17.3029 9.24422 16.5288 9.70551C16.3435 9.81585 16.1676 9.93705 16.0009 10.0691C15.8342 9.93705 15.6583 9.81585 15.4731 9.70551C14.6989 9.24422 13.8081 9.00001 12.895 9.00001C12.2375 9.00001 11.6004 9.12302 10.9985 9.36723C10.4169 9.6024 9.89281 9.94067 9.44276 10.3712C8.99455 10.7983 8.63651 11.3072 8.38893 11.869C8.1315 12.4533 8 13.0738 8 13.7124C8 14.3147 8.12594 14.9424 8.37597 15.581C8.58525 16.1146 8.88529 16.6682 9.26866 17.2272C9.87614 18.1117 10.7114 19.0343 11.7486 19.9695C13.4673 21.5198 15.1693 22.5907 15.2416 22.6341L15.6805 22.9091C15.875 23.0303 16.125 23.0303 16.3195 22.9091L16.7584 22.6341C16.8306 22.5889 18.5308 21.5198 20.2514 19.9695C21.2886 19.0343 22.1238 18.1117 22.7313 17.2272C23.1147 16.6682 23.4166 16.1146 23.624 15.581C23.874 14.9424 24 14.3147 24 13.7124C24.0018 13.0738 23.8703 12.4533 23.6129 11.869V11.869Z" fill="url(#paint0_linear)"/>
              <defs>
              <linearGradient id="paint0_linear" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFB0B0"/>
              <stop offset="1" stop-color="#FF4343"/>
              </linearGradient>
              </defs>
            </svg>
        }
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className={styles.button}>
          {/* <img width={11} height={11} src="/img/plus.svg" alt="Plus" /> */}
          {!activePlus
            ? <svg className={styles.btn_plus} onClick={handleClickPlus} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
                <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" stroke='grey'/>
                </svg>
           : <svg className={styles.btn_checked} onClick={handleClickPlus} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#paint0_linear)"/>
                <g clipPath="url(#clip0)">
                <g filter="url(#filter0_d)">
                <path d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z" fill="white"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d" x="10.6665" y="11.3298" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#89F09C"/>
                <stop offset="1" stopColor="#3CC755"/>
                </linearGradient>
                <clipPath id="clip0">
                <rect width="10.6667" height="10.6667" fill="white" transform="translate(10.6667 10.6667)"/>
                </clipPath>
                </defs>
              </svg>
          }
        </button>
      </div>
    </div>
  )
}

export default Card