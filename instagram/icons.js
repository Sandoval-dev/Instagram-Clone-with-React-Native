import * as React from 'react';
import Svg, { Circle, Rect, Path, Stop, Defs, LinearGradient } from 'react-native-svg';


function Logo({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 104 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.34906 0.103386C3.22375 1.01086 0.881358 3.5683 0.144313 6.78057C-0.789613 10.8488 3.10259 12.5709 3.42568 12.0089C3.7942 11.3437 2.72397 11.1169 2.50185 9.00802C2.2141 6.28043 3.46606 3.23316 5.03607 1.89772C5.32887 1.65022 5.31372 1.99568 5.31372 2.63504C5.31372 3.7797 5.25314 14.0456 5.25314 16.1853C5.25314 19.0831 5.13703 20.0009 4.92501 20.9032C4.70793 21.821 4.36465 22.4397 4.62716 22.6769C4.91996 22.945 6.16688 22.3108 6.88373 21.2848C7.74698 20.0576 8.04987 18.5829 8.10541 16.9845C8.17103 15.051 8.16599 11.9934 8.17103 10.2455C8.17103 8.64193 8.19627 3.95501 8.14579 1.13461C8.1256 0.448846 6.2426 -0.273011 5.34906 0.103386ZM103.522 15.3294C103.214 15.3294 103.073 15.6543 102.957 16.1957C102.553 18.088 102.129 18.5159 101.579 18.5159C100.968 18.5159 100.418 17.5775 100.276 15.7007C100.165 14.226 100.18 11.5087 100.322 8.80693C100.352 8.25007 100.201 7.70352 98.7367 7.16212C98.1056 6.9301 97.1868 6.58464 96.7325 7.70867C95.4452 10.8694 94.9404 13.3804 94.8192 14.4013C94.8142 14.4529 94.7485 14.4632 94.7384 14.3446C94.6627 13.5248 94.4961 12.0398 94.4709 8.92036C94.4658 8.31194 94.3396 7.79117 93.6783 7.36837C93.2492 7.09509 91.9468 6.60526 91.4773 7.1879C91.0734 7.66227 90.5989 8.93583 90.1092 10.4466C89.7104 11.6737 89.4378 12.5039 89.4378 12.5039C89.4378 12.5039 89.4428 9.18848 89.4479 7.93554C89.4479 7.46118 89.1298 7.3065 89.0339 7.27556C88.5998 7.14666 87.7416 6.93525 87.3781 6.93525C86.9288 6.93525 86.8228 7.1879 86.8228 7.55915C86.8228 7.60555 86.7521 11.9212 86.7521 14.9376V15.3655C86.5047 16.7525 85.7021 18.6345 84.8287 18.6345C83.9503 18.6345 83.5414 17.8508 83.5414 14.2518C83.5414 12.1533 83.602 11.2406 83.6323 9.72472C83.6474 8.85333 83.6828 8.17788 83.6828 8.02835C83.6777 7.55915 82.8801 7.32712 82.5116 7.23947C82.138 7.15181 81.8149 7.11572 81.5625 7.13119C81.2041 7.15181 80.9517 7.38899 80.9517 7.71899C80.9517 7.89429 80.9517 8.22944 80.9517 8.22944C80.4923 7.49727 79.7552 6.98682 79.2605 6.83729C77.9379 6.44027 76.5546 6.79088 75.5097 8.27585C74.6817 9.45144 74.182 10.7869 73.9851 12.705C73.8387 14.1074 73.8892 15.5305 74.1416 16.7319C73.8336 18.088 73.2581 18.6448 72.6321 18.6448C71.7235 18.6448 71.0621 17.1341 71.1379 14.5199C71.1883 12.8029 71.5266 11.5964 71.8951 9.84847C72.0516 9.10598 71.9254 8.71412 71.6023 8.34288C71.3095 8.00257 70.6785 7.82726 69.7748 8.03867C69.1337 8.19335 68.2099 8.35835 67.3719 8.48209C67.3719 8.48209 67.4224 8.27585 67.4627 7.91492C67.6798 6.01231 65.6454 6.16699 64.9941 6.77541C64.6054 7.1415 64.3429 7.56946 64.242 8.33772C64.0855 9.55972 65.0648 10.1372 65.0648 10.1372C64.7417 11.6325 63.9542 13.5867 63.1414 14.9994C62.7073 15.7574 62.3691 16.3194 61.94 16.9124C61.94 16.6906 61.94 16.4689 61.9349 16.2472C61.9248 13.102 61.9652 10.627 61.9854 9.73503C62.0005 8.86365 62.0359 8.20882 62.0359 8.05413C62.0308 7.71383 61.8339 7.58493 61.425 7.41993C61.0616 7.27556 60.6375 7.17759 60.1933 7.1415C59.638 7.09509 59.2997 7.39931 59.3098 7.75508C59.3098 7.82211 59.3098 8.2346 59.3098 8.2346C58.8504 7.50243 58.1134 6.99197 57.6187 6.84244C56.296 6.44542 54.9128 6.79604 53.8678 8.281C53.0399 9.4566 52.4997 11.1117 52.3432 12.6946C52.2019 14.1693 52.2271 15.4222 52.424 16.4792C52.212 17.5363 51.6062 18.6448 50.9247 18.6448C50.0513 18.6448 49.5515 17.8611 49.5515 14.2621C49.5515 12.1636 49.6121 11.2509 49.6424 9.73503C49.6626 8.86365 49.6929 8.18819 49.6929 8.03867C49.6879 7.56946 48.8902 7.33743 48.5217 7.24978C48.133 7.15697 47.7998 7.12603 47.5423 7.14666C47.2041 7.17244 46.9668 7.4818 46.9668 7.70867V8.23975C46.5075 7.50758 45.7654 6.99713 45.2757 6.8476C43.953 6.45058 42.5799 6.81151 41.5299 8.28616C40.8433 9.25036 40.288 10.3177 40.0053 12.6792C39.9195 13.3598 39.8841 13.9991 39.8892 14.5973C39.6166 16.2988 38.4101 18.253 37.4256 18.253C36.8501 18.253 36.2999 17.1134 36.2999 14.6901C36.2999 11.4572 36.4968 6.85791 36.5321 6.41449C36.5321 6.41449 37.779 6.39386 38.0213 6.38871C38.6423 6.38355 39.2077 6.39902 40.0356 6.35261C40.4495 6.33199 40.8484 4.81609 40.4243 4.63047C40.2274 4.54281 38.8543 4.47063 38.3091 4.46031C37.8749 4.43453 36.5977 4.33657 36.5977 4.33657C36.5977 4.33657 36.7138 1.28414 36.7391 0.959303C36.7593 0.691184 36.416 0.551969 36.2242 0.469471C35.7446 0.263226 35.3205 0.165259 34.8157 0.0621369C34.114 -0.0873908 33.801 0.0569808 33.7354 0.660248C33.6395 1.56773 33.594 4.2386 33.594 4.2386C33.0791 4.2386 31.3274 4.13548 30.8175 4.13548C30.3379 4.13548 29.828 6.21855 30.4843 6.24433C31.2415 6.27527 32.5642 6.30105 33.4426 6.32683C33.4426 6.32683 33.4022 11.0034 33.4022 12.4472C33.4022 12.5967 33.4022 12.7462 33.4022 12.8906C32.9226 15.448 31.2213 16.8247 31.2213 16.8247C31.5848 15.1335 30.8427 13.8651 29.4999 12.7926C29.0052 12.3956 28.0309 11.648 26.9354 10.823C26.9354 10.823 27.5664 10.1888 28.1318 8.91521C28.5306 8.01289 28.5458 6.9765 27.5715 6.74963C25.9611 6.37324 24.6283 7.57461 24.2346 8.86365C23.9266 9.85878 24.0932 10.5961 24.694 11.3644C24.7343 11.4211 24.7848 11.4778 24.8353 11.5345C24.4718 12.2512 23.9721 13.2103 23.548 13.9527C22.3718 16.0204 21.4833 17.6548 20.8119 17.6548C20.2767 17.6548 20.2818 15.9946 20.2818 14.4426C20.2818 13.102 20.3777 11.0911 20.4585 9.00286C20.4837 8.31194 20.1455 7.92007 19.575 7.5643C19.2318 7.34774 18.4947 6.91979 18.0656 6.91979C17.4245 6.91979 15.5819 7.00744 13.8402 12.1326C13.6231 12.7771 13.189 13.9579 13.189 13.9579L13.2243 7.79633C13.2243 7.65196 13.1486 7.51274 12.977 7.41477C12.6842 7.24978 11.8966 6.91979 11.2 6.91979C10.8668 6.91979 10.7002 7.07963 10.7002 7.39415L10.6396 17.0361C10.6396 17.7683 10.6598 18.6242 10.7305 18.9954C10.8012 19.3667 10.9173 19.676 11.0586 19.8565C11.2 20.037 11.3666 20.1762 11.6341 20.2329C11.8865 20.2845 13.2698 20.4649 13.3404 19.9287C13.4263 19.2842 13.4313 18.5881 14.1583 15.9946C15.2891 11.9522 16.7632 9.98253 17.4548 9.28129C17.5759 9.15755 17.7173 9.15239 17.7072 9.35348C17.6769 10.2403 17.5759 12.4575 17.5052 14.3343C17.3185 19.3667 18.2171 20.2999 19.5044 20.2999C20.4888 20.2999 21.877 19.3048 23.3663 16.7886C24.2951 15.2212 25.1937 13.6795 25.845 12.5709C26.2943 12.9937 26.8041 13.4526 27.309 13.9373C28.4852 15.0716 28.8689 16.1493 28.6164 17.1702C28.4196 17.9539 27.6825 18.7583 26.37 17.9745C25.9863 17.7477 25.8248 17.5723 25.4411 17.3094C25.2341 17.1702 24.9161 17.1289 24.7293 17.2784C24.2396 17.6548 23.9569 18.1344 23.7954 18.7273C23.6389 19.3048 24.2093 19.609 24.7949 19.8771C25.3048 20.1092 26.3952 20.3154 27.0919 20.3412C29.8028 20.434 31.9735 19.0109 33.488 15.3397C33.7606 18.5108 34.9116 20.3051 36.9107 20.3051C38.2485 20.3051 39.5913 18.5469 40.1769 16.8195C40.3435 17.5259 40.596 18.1395 40.914 18.6551C42.4588 21.1404 45.4473 20.6041 46.9517 18.4953C47.4161 17.8456 47.4868 17.6084 47.4868 17.6084C47.7039 19.5987 49.284 20.2948 50.1876 20.2948C51.1973 20.2948 52.2423 19.8101 52.9743 18.1344C53.0601 18.3148 53.156 18.4901 53.257 18.6551C54.7967 21.1404 57.7903 20.6041 59.2896 18.4953C59.3603 18.3973 59.4209 18.3097 59.4764 18.2272L59.5218 19.5368C59.5218 19.5368 58.6636 20.336 58.1386 20.8259C55.8215 22.9863 54.0596 24.6259 53.9284 26.5337C53.7618 28.9674 55.7054 29.8697 57.1744 29.9883C58.7343 30.112 60.0721 29.2407 60.8899 28.0135C61.6118 26.9359 62.0864 24.6105 62.051 22.3211C62.0359 21.4033 62.0157 20.2381 61.9955 18.9851C62.8083 18.0261 63.727 16.8092 64.5701 15.3913C65.4889 13.8393 66.4783 11.7614 66.9832 10.1424C66.9832 10.1424 67.8414 10.1475 68.7551 10.0908C69.0479 10.0753 69.1287 10.1321 69.0782 10.3486C69.0126 10.6116 67.9221 14.886 68.9166 17.7322C69.5982 19.6812 71.1328 20.3102 72.0415 20.3102C73.1067 20.3102 74.1264 19.4956 74.6716 18.2787C74.7373 18.4128 74.8079 18.5417 74.8837 18.6654C76.4234 21.1507 79.4069 20.6093 80.9214 18.5056C81.2647 18.0312 81.4565 17.6187 81.4565 17.6187C81.7796 19.6812 83.3597 20.3154 84.2633 20.3154C85.2023 20.3154 86.0958 19.9235 86.8228 18.1808C86.8531 18.949 86.9035 19.5781 86.9742 19.774C87.0197 19.8926 87.2872 20.0473 87.4841 20.1195C88.3474 20.4443 89.2207 20.2896 89.5488 20.2226C89.776 20.1762 89.9476 19.9906 89.9729 19.5214C90.0335 18.2787 89.9981 16.1853 90.3667 14.6334C90.9876 12.0244 91.5681 11.0138 91.8458 10.5136C91.9972 10.2352 92.1739 10.1888 92.179 10.4827C92.1941 11.0859 92.2244 12.8442 92.4617 15.216C92.6384 16.9588 92.8756 17.99 93.0574 18.3148C93.5773 19.2481 94.2185 19.2893 94.7384 19.2893C95.0716 19.2893 95.7632 19.1965 95.7027 18.6036C95.6724 18.3148 95.7279 16.5308 96.3387 13.9579C96.7426 12.2822 97.409 10.7663 97.6513 10.2146C97.7421 10.0083 97.7825 10.1733 97.7825 10.2042C97.7321 11.3592 97.6159 15.1335 98.0804 17.2011C98.7064 20.0009 100.524 20.3102 101.155 20.3102C102.503 20.3102 103.608 19.2687 103.982 16.5205C104.052 15.845 103.921 15.3294 103.522 15.3294ZM46.9668 13.6331C46.8911 15.0871 46.6084 16.3039 46.1642 17.1856C45.3514 18.784 43.7511 19.2893 43.0443 16.9794C42.5345 15.314 42.7061 13.0453 42.9181 11.8181C43.2311 9.99799 44.0187 8.70896 45.2504 8.83271C46.5175 8.96161 47.1284 10.6116 46.9668 13.6331ZM59.3098 13.6537C59.2391 15.0252 58.8858 16.4071 58.5071 17.1856C57.7196 18.7943 56.0688 19.2996 55.3873 16.9794C54.9229 15.3965 55.0339 13.3495 55.2611 12.0604C55.559 10.3847 56.2859 8.83271 57.5934 8.83271C58.8656 8.83271 59.4916 10.2506 59.3098 13.6537ZM59.6329 23.0224C59.6178 25.5282 59.229 27.7196 58.3961 28.359C57.2148 29.2613 55.6296 28.5858 55.9578 26.7606C56.2506 25.1415 57.6186 23.4916 59.6329 21.4755C59.638 21.4704 59.638 21.9293 59.6329 23.0224ZM80.9365 13.6692C80.8659 15.1747 80.5377 16.3555 80.1339 17.1856C79.3463 18.7943 77.7056 19.2945 77.014 16.9794C76.6354 15.7213 76.6203 13.6124 76.8929 11.8542C77.1705 10.065 77.9429 8.70896 79.2252 8.83271C80.4822 8.95646 81.0728 10.6116 80.9365 13.6692Z" fill="black" />
            <Defs>
                <Rect width="16" height="16" fill="white" transform="translate(112)" />
            </Defs>
        </Svg>

    )
}

function Home({ size, fill, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M22 11.5358V22H16V17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17V22H2L2 11.5358L12 2L22 11.5358Z" fill="black" />
            <Path strokeWidth="2" d="M22 22V22.5H22.5V22H22ZM22 11.5358H22.5V11.3217L22.3451 11.1739L22 11.5358ZM16 22H15.5V22.5H16V22ZM8 22V22.5H8.5V22H8ZM2 22H1.5V22.5H2L2 22ZM2 11.5358L1.65495 11.1739L1.5 11.3217V11.5358H2ZM12 2L12.3451 1.63815L12 1.30911L11.6549 1.63815L12 2ZM22.5 22V11.5358H21.5V22H22.5ZM16 22.5H22V21.5H16V22.5ZM16.5 22V17H15.5L15.5 22H16.5ZM16.5 17C16.5 14.5147 14.4853 12.5 12 12.5V13.5C13.933 13.5 15.5 15.067 15.5 17H16.5ZM12 12.5C9.51472 12.5 7.5 14.5147 7.5 17H8.5C8.5 15.067 10.067 13.5 12 13.5V12.5ZM7.5 17V22H8.5V17H7.5ZM2 22.5H8V21.5H2L2 22.5ZM1.5 11.5358L1.5 22H2.5L2.5 11.5358H1.5ZM11.6549 1.63815L1.65495 11.1739L2.34505 11.8976L12.3451 2.36185L11.6549 1.63815ZM22.3451 11.1739L12.3451 1.63815L11.6549 2.36185L21.6549 11.8976L22.3451 11.1739Z" fill="black" />
        </Svg>

    )
}

function HomeFilled({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M22 11.5358V22H16V17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17V22H2L2 11.5358L12 2L22 11.5358Z" fill="white" />
            <Path d="M22 22V22.5H22.5V22H22ZM22 11.5358H22.5V11.3217L22.3451 11.1739L22 11.5358ZM16 22H15.5V22.5H16V22ZM8 22V22.5H8.5V22H8ZM2 22H1.5V22.5H2L2 22ZM2 11.5358L1.65495 11.1739L1.5 11.3217V11.5358H2ZM12 2L12.3451 1.63815L12 1.30911L11.6549 1.63815L12 2ZM22.5 22V11.5358H21.5V22H22.5ZM16 22.5H22V21.5H16V22.5ZM16.5 22V17H15.5L15.5 22H16.5ZM16.5 17C16.5 14.5147 14.4853 12.5 12 12.5V13.5C13.933 13.5 15.5 15.067 15.5 17H16.5ZM12 12.5C9.51472 12.5 7.5 14.5147 7.5 17H8.5C8.5 15.067 10.067 13.5 12 13.5V12.5ZM7.5 17V22H8.5V17H7.5ZM2 22.5H8V21.5H2L2 22.5ZM1.5 11.5358L1.5 22H2.5L2.5 11.5358H1.5ZM11.6549 1.63815L1.65495 11.1739L2.34505 11.8976L12.3451 2.36185L11.6549 1.63815ZM22.3451 11.1739L12.3451 1.63815L11.6549 2.36185L21.6549 11.8976L22.3451 11.1739Z" />
        </Svg>


    )
}



function Search({ size, fill, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="10" cy="10" r="8.1" stroke="black" stroke-width="1.8" />
            <Path stroke="black" strokeWidth="2" d="M22 22L16 16" stroke-width="1.8" stroke-linecap="round" />
        </Svg>


    )
}

function SearchFilled({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="10" cy="10" r="8.1" stroke="black" stroke-width="1.8" />
            <Path d="M22 22L16 16" stroke="black" stroke-width="1.8" stroke-linecap="round" />
        </Svg>
    )
}

function Reel({ size, fill, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15.24 14.3268C15.5867 14.5334 15.5867 15.0499 15.24 15.2565L9.78 18.5106C9.43333 18.7172 9 18.459 9 18.0457L9 11.5376C9 11.1244 9.43333 10.8661 9.78 11.0727L15.24 14.3268Z" fill="black" />
            <Path d="M6 2L10 8" stroke="black" stroke-width="1.8" />
            <Path d="M13 2L17 8" stroke="black" stroke-width="1.8" />
            <Rect x="1.9" y="1.9" width="20.2" height="20.2" rx="5.1" stroke="black" stroke-width="1.8" />
            <Path d="M2 8L22 8" stroke="black" stroke-width="1.8" />
        </Svg>


    )
}

function ReelFilled({ size, ...props }) {

    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15.24 14.3268C15.5867 14.5334 15.5867 15.0499 15.24 15.2565L9.78 18.5106C9.43333 18.7172 9 18.459 9 18.0457L9 11.5376C9 11.1244 9.43333 10.8661 9.78 11.0727L15.24 14.3268Z" fill="#FF0000" />
            <Path d="M6 2L10 8" stroke="#FF0000" stroke-width="1.8" />
            <Path d="M13 2L17 8" stroke="#FF0000" stroke-width="1.8" />
            <Rect x="1.9" y="1.9" width="20.2" height="20.2" rx="5.1" stroke="#FF0000" stroke-width="1.8" />
            <Path d="M2 8L22 8" stroke="#FF0000" stroke-width="1.8" />
        </Svg>


    )
}

function Shop({ size, fill, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2.88104 7.33138C2.91728 6.75164 3.39803 6.29999 3.9789 6.29999L20.0211 6.29999C20.602 6.29999 21.0827 6.75164 21.119 7.33138L21.8362 18.8066C21.9477 20.5913 20.5303 22.1 18.7422 22.1H5.2578C3.46966 22.1 2.0523 20.5913 2.16384 18.8066L2.88104 7.33138Z" stroke="black" stroke-width="1.8" />
            <Path d="M15.3002 9.90002C15.3002 11.7226 13.8227 13.2 12.0002 13.2C10.1777 13.2 8.7002 11.7226 8.7002 9.90002" stroke="black" stroke-width="1.8" stroke-linecap="round" />
            <Path d="M15.3002 5.95001V4.30001C15.3002 2.47747 13.8227 1.00001 12.0002 1.00001C10.1777 1.00001 8.7002 2.47747 8.7002 4.30001V5.95001" stroke="black" stroke-width="1.8" stroke-linecap="round" />
        </Svg>



    )
}

function ShopFilled({ size, ...props }) {

    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2.88104 7.33138C2.91728 6.75164 3.39803 6.29999 3.9789 6.29999L20.0211 6.29999C20.602 6.29999 21.0827 6.75164 21.119 7.33138L21.8362 18.8066C21.9477 20.5913 20.5303 22.1 18.7422 22.1H5.2578C3.46966 22.1 2.0523 20.5913 2.16384 18.8066L2.88104 7.33138Z" stroke="black" stroke-width="1.8" />
            <Path d="M15.3002 9.90002C15.3002 11.7226 13.8227 13.2 12.0002 13.2C10.1777 13.2 8.7002 11.7226 8.7002 9.90002" stroke="white" stroke-width="1.8" stroke-linecap="round" />
            <Path d="M15.3002 5.95001V4.30001C15.3002 2.47747 13.8227 1.00001 12.0002 1.00001C10.1777 1.00001 8.7002 2.47747 8.7002 4.30001V5.95001" stroke="black" stroke-width="1.8" stroke-linecap="round" />
        </Svg>


    )
}


function Plus({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M17 0.25C20.7279 0.25 23.75 3.27208 23.75 7V17C23.75 20.7279 20.7279 23.75 17 23.75H7C3.27208 23.75 0.25 20.7279 0.25 17V7C0.25 3.27208 3.27208 0.25 7 0.25H17ZM17 1.75H7C4.10051 1.75 1.75 4.10051 1.75 7V17C1.75 19.8995 4.10051 22.25 7 22.25H17C19.8995 22.25 22.25 19.8995 22.25 17V7C22.25 4.10051 19.8995 1.75 17 1.75ZM12.7432 5.89823C12.6935 5.53215 12.3797 5.25 12 5.25L11.8982 5.25685L11.8006 5.27679C11.4832 5.36411 11.25 5.65482 11.25 6V11.249L6 11.25L5.89823 11.2568C5.53215 11.3065 5.25 11.6203 5.25 12L5.25685 12.1018C5.30651 12.4678 5.6203 12.75 6 12.75L11.25 12.749V18L11.2568 18.1018C11.3065 18.4678 11.6203 18.75 12 18.75L12.1018 18.7432C12.4678 18.6935 12.75 18.3797 12.75 18V12.75H18L18.1018 12.7432C18.4678 12.6935 18.75 12.3797 18.75 12L18.7432 11.8982C18.6935 11.5322 18.3797 11.25 18 11.25H12.75V6L12.7432 5.89823Z" fill="#262626" />
        </Svg>
    )
}

function Heart({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.314 6.18333L11.6642 5.55288C11.5296 5.42238 11.4002 5.29733 11.2744 5.17585C11.0546 4.96351 10.8461 4.76206 10.6415 4.56141C9.00072 2.95363 6.74236 2.49843 4.93299 3.27967L4.93283 3.27973C3.11907 4.06244 1.85702 6.05591 1.90111 8.28774L1.90111 8.2878C1.93442 9.97965 2.64327 11.4798 3.67634 12.964L3.67663 12.9644C5.93146 16.2077 8.99036 18.6439 12.2533 21.0298C14.6308 19.2988 16.895 17.5125 18.8503 15.3974L19.5111 16.0083L18.8503 15.3974C20.5094 13.6026 21.8746 11.7871 22.4325 9.53909L22.4326 9.53886C23.0207 7.17223 22.0148 4.70667 20.1001 3.55451L12.314 6.18333ZM12.314 6.18333L12.9405 5.52971M12.314 6.18333L12.9405 5.52971M12.9405 5.52971C13.0847 5.37935 13.212 5.24125 13.3317 5.11141C13.5615 4.86221 13.7633 4.64342 14.0019 4.42667L14.0023 4.42636M12.9405 5.52971L14.0023 4.42636M14.0023 4.42636C15.8653 2.73241 18.2782 2.4589 20.1 3.55442L14.0023 4.42636ZM12.0873 21.1505C12.0875 21.1503 12.0877 21.1502 12.088 21.15C12.0878 21.1501 12.0875 21.1503 12.0873 21.1504L12.0873 21.1505ZM12.1764 21.1002L12.1835 21.0999C12.1896 21.0997 12.2038 21.0997 12.225 21.1022C12.2453 21.1045 12.2813 21.1102 12.3278 21.1253C12.3732 21.1402 12.444 21.169 12.5215 21.2254L12.1764 21.1002Z" stroke="black" stroke-width="1.8" />
        </Svg>

    )
}

function Messenger({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z" stroke="black" stroke-width="1.8" stroke-linejoin="round" />
            <Path d="M10.1498 8.7953C10.2222 8.80572 10.2825 8.81615 10.3548 8.82658C11.428 9.056 12.5252 10.0363 13.3693 10.6203C13.8396 10.954 14.2375 10.9227 14.7078 10.6098C15.7086 9.92156 16.7456 9.26457 17.7705 8.58673C18.0478 8.39902 18.3372 8.20088 18.6748 8.45116C19.0486 8.7223 18.8195 9.01429 18.6266 9.28543C17.6137 10.6828 16.6129 12.0802 15.588 13.4672C14.8886 14.4266 13.8999 14.5622 12.8388 13.8843C12.1032 13.4046 11.3436 12.9562 10.6201 12.4557C10.1378 12.1219 9.73984 12.1637 9.28163 12.4765C8.26876 13.1648 7.24382 13.8218 6.21889 14.4996C5.94156 14.6873 5.65216 14.8855 5.31454 14.6247C4.97691 14.3745 5.15778 14.0929 5.33865 13.8322C6.3877 12.3931 7.42469 10.954 8.47374 9.51485C8.82343 9.02472 9.47456 8.73272 10.1498 8.7953Z" fill="black" />
        </Svg>


    )
}

function Dots({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="6.5" cy="11.5" r="1.5" fill="black" />
            <Circle cx="12" cy="11.5" r="1.5" fill="black" />
            <Circle cx="17.5" cy="11.5" r="1.5" fill="black" />
        </Svg>
    )
}

function Comment({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M22 11.5C22 5.42487 17.0751 0.5 11 0.5C4.92487 0.5 0 5.42487 0 11.5C0 17.5751 4.92487 22.5 11 22.5C12.326 22.5 14.1475 22.0163 16.4645 21.0489L20.2113 22.5104L20.3223 22.5465C20.8067 22.6735 21.3199 22.42 21.5063 21.9422C21.5808 21.7511 21.5948 21.5418 21.5464 21.3425L20.5016 17.046L20.6727 16.6367C21.5576 14.4813 22 12.7691 22 11.5ZM19.2714 16.1004L18.9265 16.9169L19.862 20.7641L16.4454 19.4313L15.5123 19.8183C13.5445 20.6124 12.0245 21 11 21C5.75329 21 1.5 16.7467 1.5 11.5C1.5 6.25329 5.75329 2 11 2C16.2467 2 20.5 6.25329 20.5 11.5C20.5 12.5455 20.097 14.0952 19.2714 16.1004Z" fill="#262626" />
        </Svg>


    )
}

function SendDm({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M23.1226 1.62889L12.4374 19.8824C12.101 20.4571 11.2383 20.341 11.0658 19.6978L8.31543 9.44223L8.29276 9.41018C8.27233 9.37479 8.25511 9.33844 8.24101 9.30145L0.721173 1.78033C0.2487 1.30786 0.583325 0.5 1.2515 0.5H22.4754C23.0547 0.5 23.4153 1.1289 23.1226 1.62889ZM20.4224 3.27211L9.85082 9.37561L12.0496 17.5758L20.4224 3.27211ZM3.06216 2L19.6274 1.99907L9.12507 8.06257L3.06216 2Z" fill="#262626" />
        </Svg>

    )
}

function Save({ size, ...props }) {

    return (
        <Svg width={size} height={size} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.860565 1.17859V22.831C0.860565 23.0938 0.963999 23.346 1.1485 23.5331C1.53627 23.9264 2.16941 23.9308 2.56268 23.5431L11.1113 15.1139L19.6599 23.5431C19.847 23.7276 20.0993 23.831 20.362 23.831C20.9143 23.831 21.362 23.3833 21.362 22.831V1.17859C21.362 0.902446 21.1382 0.678589 20.862 0.678589H1.36057C1.08442 0.678589 0.860565 0.902446 0.860565 1.17859ZM2.36057 21.6358V2.17859H19.862V21.6358L11.8134 13.6997C11.4241 13.3158 10.7985 13.3158 10.4092 13.6997L2.36057 21.6358Z" fill="#262626" />
        </Svg>


    )
}





export {
    Logo,
    Home,
    Search,
    Reel,
    Shop,
    HomeFilled,
    SearchFilled,
    ReelFilled,
    ShopFilled,
    Plus,
    Heart,
    Messenger,
    Dots,
    Comment,
    SendDm,
    Save
}