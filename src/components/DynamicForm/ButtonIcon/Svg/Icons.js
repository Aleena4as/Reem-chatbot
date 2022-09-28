import React from 'react';

const Icons = ({ image, className }) => {
    const renderIcons = () => {
        if (image === 'icon-Book-test_drive') {
            return (
                <svg
                    width="46"
                    height="20"
                    viewBox="0 0 46 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <path
                        d="M1.59288 15.8414H1.59313H4.55265V14.6172H2.0117H1.97905L1.96592 14.5873C1.5053 13.5382 1.26737 12.4036 1.26737 11.2565C1.26737 10.1093 1.5053 8.97476 1.96592 7.92565L1.97905 7.89575H2.0117H29.5725C30.2415 7.89575 32.3006 8.02693 34.4432 8.25649C35.5149 8.3713 36.6084 8.51083 37.5604 8.67105C38.5113 8.83109 39.3245 9.01235 39.8336 9.21155L40.1818 9.34727L40.1636 9.39385L40.1818 9.34727L40.1859 9.34887C40.8049 9.59014 41.9344 10.0304 42.9104 10.506C43.3992 10.7442 43.8515 10.9922 44.1823 11.2295C44.3475 11.348 44.4844 11.4652 44.5804 11.5786C44.6756 11.691 44.7358 11.8057 44.7358 11.9186V13.905C44.7358 14.0938 44.6614 14.2749 44.5288 14.4084C44.3963 14.542 44.2164 14.6172 44.0287 14.6172H42.1074V15.8414H44.0287C44.5381 15.8414 45.0268 15.6375 45.3871 15.2744C45.7475 14.9113 45.95 14.4187 45.95 13.905V11.9186C45.95 11.1729 45.3902 10.5418 44.4317 9.94465C43.4754 9.34895 42.1392 8.79746 40.6194 8.2056C40.6193 8.20559 40.6193 8.20557 40.6193 8.20555L40.2739 8.07322L40.2735 8.07308C39.6944 7.8458 38.8093 7.64402 37.7861 7.46939C36.7638 7.29492 35.6069 7.14808 34.4863 7.02982C32.2443 6.79325 30.1507 6.67147 29.5725 6.67147L1.59313 6.67147L1.59291 6.67147C1.47953 6.67096 1.36824 6.70247 1.27168 6.76247C1.17512 6.82248 1.09712 6.90859 1.04659 7.01107L1.04651 7.01122C0.391216 8.32904 0.0499992 9.78275 0.0499992 11.2568C0.0499992 12.7308 0.391216 14.1845 1.04651 15.5024L1.04656 15.5025C1.09718 15.6048 1.17522 15.6908 1.27177 15.7507C1.36833 15.8106 1.47956 15.842 1.59288 15.8414Z"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                    <path
                        d="M34.1226 14.6182H30.4837V15.8431H34.1226V14.6182Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                    <path
                        d="M30.6043 14.6182H12.5381V15.8431H30.6043V14.6182Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                    <path
                        d="M29.7141 5.42501C30.993 6.58241 32.1923 7.66783 33.9579 8.18885L34.2914 7.0117C32.7926 6.56609 31.7355 5.61141 30.5253 4.51243L30.525 4.51215C29.4237 3.51531 28.1928 2.40109 26.42 1.53499C24.6476 0.669074 22.3309 0.05 19.059 0.05C12.8156 0.05 9.56801 2.66709 7.18592 4.58672L7.17717 4.59377L7.17714 4.5938L7.17532 4.59526C6.4616 5.17142 5.81923 5.68997 5.19279 6.06411C4.58096 6.42952 3.98056 6.65958 3.33858 6.67097V7.89539C5.0519 7.87495 6.38019 6.80552 7.93573 5.54957C10.2906 3.64788 13.234 1.27428 19.059 1.27428C22.0923 1.27428 24.22 1.82493 25.8586 2.62055C27.4959 3.41555 28.6421 4.45389 29.712 5.42308L29.7133 5.42427L29.7133 5.42428L29.7141 5.42501Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                    <path
                        d="M8.54476 11.8679H8.54482C9.20461 11.8679 9.84955 12.065 10.3981 12.4343C10.9466 12.8037 11.3741 13.3285 11.6265 13.9426C11.8789 14.5566 11.9449 15.2323 11.8163 15.8841C11.6876 16.536 11.37 17.1348 10.9035 17.6048C10.4371 18.0748 9.84272 18.395 9.19562 18.5247C8.54852 18.6544 7.87779 18.5878 7.26825 18.3334C6.65873 18.079 6.13782 17.6482 5.77135 17.0955C5.40489 16.5429 5.20932 15.8932 5.20932 15.2286V15.2285C5.21038 14.3376 5.56204 13.4835 6.18728 12.8535C6.81254 12.2234 7.66035 11.8689 8.54476 11.8679ZM8.54488 19.8135C9.44462 19.8135 10.3242 19.5447 11.0724 19.0409C11.8205 18.5372 12.4037 17.8211 12.7482 16.9833C13.0926 16.1454 13.1827 15.2235 13.0071 14.334C12.8315 13.4445 12.3981 12.6275 11.7618 11.9863C11.1255 11.3452 10.3148 10.9085 9.43235 10.7317C8.54987 10.5548 7.63515 10.6456 6.80385 10.9925C5.97254 11.3395 5.26195 11.9271 4.76197 12.6811C4.26201 13.4351 3.99513 14.3216 3.99512 15.2285C3.99649 16.4442 4.47637 17.6097 5.32936 18.4692C6.18234 19.3287 7.33875 19.8122 8.54488 19.8135Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                    <path
                        d="M38.1143 11.8679H38.1144C38.7742 11.8679 39.4191 12.065 39.9677 12.4343C40.5162 12.8037 40.9436 13.3285 41.1961 13.9426C41.4485 14.5566 41.5145 15.2323 41.3858 15.8841C41.2572 16.536 40.9395 17.1348 40.4731 17.6048C40.0066 18.0748 39.4123 18.395 38.7652 18.5247C38.1181 18.6544 37.4474 18.5878 36.8378 18.3334C36.2283 18.079 35.7074 17.6482 35.3409 17.0955C34.9745 16.5429 34.7789 15.8932 34.7789 15.2286V15.2285C34.78 14.3376 35.1316 13.4835 35.7569 12.8535C36.3821 12.2234 37.2299 11.8689 38.1143 11.8679ZM38.1145 19.8135C39.0142 19.8135 39.8938 19.5447 40.6419 19.0409C41.3901 18.5372 41.9733 17.8211 42.3177 16.9833C42.6621 16.1454 42.7523 15.2235 42.5767 14.334C42.4011 13.4445 41.9677 12.6275 41.3314 11.9863C40.6951 11.3452 39.8844 10.9085 39.0019 10.7317C38.1195 10.5548 37.2047 10.6456 36.3734 10.9925C35.5421 11.3395 34.8315 11.9271 34.3316 12.6811C33.8316 13.4351 33.5647 14.3216 33.5647 15.2285C33.5661 16.4442 34.046 17.6097 34.8989 18.4692C35.7519 19.3287 36.9083 19.8122 38.1145 19.8135Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                    <path
                        d="M20.3226 0.721326H19.1084V7.23281H20.3226V0.721326Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                </svg>
            );
        } else if (image === 'icon-book-service') {
            return (
                <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <path
                        d="M24.0706 3.77442C24.0154 3.67957 23.9393 3.59853 23.8481 3.53745C23.7569 3.47636 23.653 3.43682 23.5442 3.42184C23.4355 3.40685 23.3248 3.41681 23.2205 3.45095C23.1162 3.48509 23.021 3.54253 22.9421 3.6189L19.9764 6.56658C19.5778 6.4881 19.2116 6.29281 18.9243 6.00556C18.6371 5.7183 18.4418 5.35208 18.3633 4.95349L21.311 2.00582C21.3857 1.92554 21.4413 1.8293 21.4733 1.72439C21.5054 1.61948 21.5132 1.50864 21.4962 1.40027C21.4791 1.29191 21.4376 1.18884 21.3748 1.09888C21.312 1.00891 21.2296 0.934409 21.1338 0.881002C18.3235 -0.670596 15.0937 -0.146163 12.703 2.24453C11.6887 3.25701 10.9979 4.54802 10.7184 5.95372C10.439 7.35942 10.5834 8.81646 11.1334 10.14L0.778529 20.4948C0.259502 21.0691 -0.0188777 21.8209 0.000995264 22.5948C0.0208682 23.3686 0.337473 24.1051 0.885294 24.652C1.43311 25.1989 2.17022 25.5143 2.94407 25.5328C3.71793 25.5514 4.4693 25.2717 5.04271 24.7517L15.5892 14.2197C16.9729 14.6564 18.4558 14.6669 19.8455 14.2499C21.2352 13.8329 22.4674 13.0076 23.3819 11.8812C24.2965 10.7549 24.8512 9.37952 24.974 7.93382C25.0968 6.48812 24.7821 5.03891 24.0706 3.77442ZM21.9005 11.3697C21.1058 12.1731 20.0932 12.7262 18.9877 12.9608C17.8822 13.1954 16.7322 13.1012 15.6797 12.6898C15.5483 12.6381 15.4047 12.6259 15.2665 12.6549C15.1283 12.6838 15.0016 12.7525 14.902 12.8525L4.05171 23.7029C3.75723 23.9974 3.35783 24.1628 2.94136 24.1628C2.5249 24.1628 2.1255 23.9974 1.83101 23.7029C1.53653 23.4084 1.37109 23.009 1.37109 22.5925C1.37109 22.1761 1.53653 21.7767 1.83101 21.4822L12.515 10.8054C12.6229 10.6976 12.694 10.5583 12.7181 10.4076C12.7421 10.2569 12.7179 10.1024 12.6488 9.96635C12.2211 9.07233 12.0232 8.08573 12.0731 7.09593C12.1229 6.10613 12.419 5.1444 12.9343 4.29789C13.4497 3.45138 14.1681 2.74683 15.0246 2.24808C15.881 1.74933 16.8483 1.47213 17.8389 1.4416C18.4198 1.44197 18.9966 1.53852 19.546 1.72733L17.0974 4.1795C17.0268 4.25049 16.9717 4.33536 16.9356 4.42875C16.8995 4.52213 16.8832 4.622 16.8877 4.72202C16.929 5.59119 17.2928 6.41374 17.9081 7.02903C18.5234 7.64432 19.3459 8.00815 20.2151 8.04946C20.3151 8.05394 20.415 8.03761 20.5084 8.0015C20.6018 7.96539 20.6866 7.91029 20.7576 7.83968L23.2134 5.38389C23.5982 6.40615 23.6776 7.51821 23.442 8.58476C23.2063 9.65132 22.6657 10.6264 21.886 11.3914L21.9005 11.3697Z"
                        fill="#333333"
                    />
                </svg>
            );
        } else if (image === 'icon-experience-lexus') {
            return (
                <svg
                    width="34"
                    height="26"
                    viewBox="0 0 34 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <mask
                        id="path-1-outside-1"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="34"
                        height="26"
                        fill="black"
                    >
                        <rect fill="white" width="34" height="26" />
                        <path d="M31.7393 8.39171C31.7393 8.39171 31.6288 8.18039 31.413 7.84426C31.383 7.79756 31.3514 7.75085 31.3206 7.70338L31.2875 7.65438C31.2492 7.59619 31.2123 7.538 31.1717 7.48057C31.162 7.46679 31.1507 7.45301 31.1401 7.43999C30.5643 6.61594 29.8909 5.86734 29.1352 5.21115C27.7106 3.96235 25.9372 2.92947 23.9812 2.21434C23.8564 2.16789 23.7311 2.12272 23.6053 2.07882C21.6652 1.41433 19.6376 1.05292 17.5913 1.00689H17.5867C17.3883 1 17.1988 1 17.0004 1C12.7597 1 8.76489 2.24114 5.75335 4.49372C2.68844 6.78688 1 9.85183 1 13.1258C1 16.3998 2.68844 19.4594 5.75335 21.7495C8.76564 24.002 12.7597 25.2424 17.0004 25.2424C19.5428 25.2424 22.0717 24.783 24.315 23.9071C26.4988 23.0565 28.4248 21.8145 29.8825 20.3169C29.9707 20.2276 30.0566 20.1372 30.1403 20.0459C31.295 18.7971 32.1122 17.4097 32.57 15.9189C32.8539 15.0168 32.9989 14.0754 33 13.1281C33.0015 11.4965 32.567 9.88169 31.7393 8.39171ZM17.0049 24.0962C8.79947 24.0962 2.12763 19.1745 2.12763 13.1258C2.12763 7.21565 8.48899 2.38279 16.423 2.15768C13.9279 5.47453 9.30314 11.8816 7.17643 16.471L7.16966 16.4863C7.14335 16.5483 6.52916 18.0176 7.28844 19.1998C7.83797 20.0543 8.91599 20.4877 10.4932 20.4877H26.4732C26.5231 20.4805 26.5737 20.4805 26.6236 20.4877H28.0091C25.2065 22.7663 21.2012 24.0962 17.0011 24.0962H17.0049ZM31.2153 16.35C31.2078 16.3692 31.1995 16.3883 31.1913 16.4074C31.1657 16.4679 31.1394 16.5276 31.1123 16.5881C31.1018 16.6126 31.0905 16.6364 31.0793 16.6609C31.0522 16.7198 31.0244 16.778 30.9966 16.8362L30.9672 16.8967C30.9289 16.9733 30.8921 17.0498 30.8485 17.1264L30.8364 17.1486C30.7996 17.2183 30.7613 17.2872 30.7222 17.3553C30.7101 17.3775 30.6974 17.399 30.6846 17.4204C30.6523 17.4771 30.6184 17.5337 30.5846 17.5896L30.5463 17.6532C30.5034 17.7228 30.4591 17.7918 30.414 17.8607C30.4111 17.866 30.4079 17.8712 30.4042 17.876C30.3546 17.9525 30.3042 18.0291 30.2538 18.1018L30.22 18.1501C30.1787 18.2083 30.1373 18.2665 30.0945 18.3239L30.0501 18.3844C30.006 18.4431 29.9609 18.502 29.9148 18.5612L29.8832 18.6018C29.8253 18.6784 29.7667 18.7481 29.7066 18.8208L29.6863 18.8438C29.6344 18.9066 29.581 18.9686 29.5261 19.0306C29.5096 19.0505 29.4923 19.0696 29.475 19.0888C29.4284 19.1416 29.381 19.1937 29.3329 19.2457L29.2803 19.3032L29.248 19.3369H26.6236C26.5737 19.344 26.5231 19.344 26.4732 19.3369H10.4962C9.69255 19.3369 8.64836 19.2044 8.24091 18.5712C7.83346 17.938 8.17927 17.0184 8.20784 16.9457C8.96861 15.3011 11.4216 10.5984 17.8393 2.16534H17.904L18.0348 2.17146L18.2731 2.18448L18.4062 2.19367C18.4904 2.19903 18.573 2.20592 18.6565 2.21204L18.7693 2.22123C18.8888 2.23195 19.0083 2.24267 19.1271 2.25569L19.1632 2.25952C19.2699 2.271 19.3774 2.28325 19.4842 2.29703L19.5999 2.31158C19.6811 2.3223 19.7623 2.33302 19.8428 2.34527L19.9691 2.36365C20.0495 2.37513 20.1292 2.38815 20.2089 2.40116L20.3246 2.4203C20.4231 2.43638 20.5208 2.45399 20.6178 2.47237L20.6742 2.48232C20.7922 2.50453 20.9088 2.52826 21.0253 2.55276L21.1065 2.56961L21.3733 2.62857L21.4823 2.6546C21.5635 2.67374 21.644 2.69288 21.7244 2.71355C21.7605 2.72198 21.7996 2.73116 21.8334 2.74112C21.9206 2.76332 22.0071 2.78629 22.0935 2.81003L22.1755 2.83223C22.2897 2.86362 22.401 2.89655 22.5175 2.93024L22.5453 2.93942C22.631 2.96469 22.716 2.99149 22.8017 3.01599C18.5648 7.91623 14.8894 12.6633 13.4649 14.5369C13.33 14.7145 13.247 14.9271 13.2252 15.1505C13.2034 15.3739 13.2437 15.599 13.3416 15.8002C13.4394 16.0014 13.5908 16.1704 13.7785 16.2881C13.9662 16.4058 14.1827 16.4673 14.4031 16.4656L31.2228 16.3224L31.2153 16.35ZM31.6085 15.1755L14.4 15.3225C14.39 15.3233 14.3799 15.3208 14.3713 15.3155C14.3626 15.3101 14.3559 15.3021 14.3519 15.2926C14.3475 15.2855 14.3456 15.2769 14.3467 15.2685C14.3478 15.2601 14.3518 15.2524 14.358 15.2467C15.8096 13.3394 19.6105 8.42693 23.9534 3.42868C25.6516 4.09404 27.1859 5.01054 28.4218 6.10391L28.4714 6.14755L28.5894 6.25628C29.1872 6.7994 29.7281 7.40419 30.2035 8.06094C30.2168 8.08925 30.2324 8.11639 30.2501 8.1421C30.3666 8.31055 30.4756 8.48129 30.5808 8.65204L30.5944 8.67424C31.4424 10.0754 31.8724 11.57 31.8724 13.1258C31.8717 13.8178 31.783 14.5067 31.6085 15.1755Z" />
                    </mask>
                    <path
                        d="M31.7393 8.39171C31.7393 8.39171 31.6288 8.18039 31.413 7.84426C31.383 7.79756 31.3514 7.75085 31.3206 7.70338L31.2875 7.65438C31.2492 7.59619 31.2123 7.538 31.1717 7.48057C31.162 7.46679 31.1507 7.45301 31.1401 7.43999C30.5643 6.61594 29.8909 5.86734 29.1352 5.21115C27.7106 3.96235 25.9372 2.92947 23.9812 2.21434C23.8564 2.16789 23.7311 2.12272 23.6053 2.07882C21.6652 1.41433 19.6376 1.05292 17.5913 1.00689H17.5867C17.3883 1 17.1988 1 17.0004 1C12.7597 1 8.76489 2.24114 5.75335 4.49372C2.68844 6.78688 1 9.85183 1 13.1258C1 16.3998 2.68844 19.4594 5.75335 21.7495C8.76564 24.002 12.7597 25.2424 17.0004 25.2424C19.5428 25.2424 22.0717 24.783 24.315 23.9071C26.4988 23.0565 28.4248 21.8145 29.8825 20.3169C29.9707 20.2276 30.0566 20.1372 30.1403 20.0459C31.295 18.7971 32.1122 17.4097 32.57 15.9189C32.8539 15.0168 32.9989 14.0754 33 13.1281C33.0015 11.4965 32.567 9.88169 31.7393 8.39171ZM17.0049 24.0962C8.79947 24.0962 2.12763 19.1745 2.12763 13.1258C2.12763 7.21565 8.48899 2.38279 16.423 2.15768C13.9279 5.47453 9.30314 11.8816 7.17643 16.471L7.16966 16.4863C7.14335 16.5483 6.52916 18.0176 7.28844 19.1998C7.83797 20.0543 8.91599 20.4877 10.4932 20.4877H26.4732C26.5231 20.4805 26.5737 20.4805 26.6236 20.4877H28.0091C25.2065 22.7663 21.2012 24.0962 17.0011 24.0962H17.0049ZM31.2153 16.35C31.2078 16.3692 31.1995 16.3883 31.1913 16.4074C31.1657 16.4679 31.1394 16.5276 31.1123 16.5881C31.1018 16.6126 31.0905 16.6364 31.0793 16.6609C31.0522 16.7198 31.0244 16.778 30.9966 16.8362L30.9672 16.8967C30.9289 16.9733 30.8921 17.0498 30.8485 17.1264L30.8364 17.1486C30.7996 17.2183 30.7613 17.2872 30.7222 17.3553C30.7101 17.3775 30.6974 17.399 30.6846 17.4204C30.6523 17.4771 30.6184 17.5337 30.5846 17.5896L30.5463 17.6532C30.5034 17.7228 30.4591 17.7918 30.414 17.8607C30.4111 17.866 30.4079 17.8712 30.4042 17.876C30.3546 17.9525 30.3042 18.0291 30.2538 18.1018L30.22 18.1501C30.1787 18.2083 30.1373 18.2665 30.0945 18.3239L30.0501 18.3844C30.006 18.4431 29.9609 18.502 29.9148 18.5612L29.8832 18.6018C29.8253 18.6784 29.7667 18.7481 29.7066 18.8208L29.6863 18.8438C29.6344 18.9066 29.581 18.9686 29.5261 19.0306C29.5096 19.0505 29.4923 19.0696 29.475 19.0888C29.4284 19.1416 29.381 19.1937 29.3329 19.2457L29.2803 19.3032L29.248 19.3369H26.6236C26.5737 19.344 26.5231 19.344 26.4732 19.3369H10.4962C9.69255 19.3369 8.64836 19.2044 8.24091 18.5712C7.83346 17.938 8.17927 17.0184 8.20784 16.9457C8.96861 15.3011 11.4216 10.5984 17.8393 2.16534H17.904L18.0348 2.17146L18.2731 2.18448L18.4062 2.19367C18.4904 2.19903 18.573 2.20592 18.6565 2.21204L18.7693 2.22123C18.8888 2.23195 19.0083 2.24267 19.1271 2.25569L19.1632 2.25952C19.2699 2.271 19.3774 2.28325 19.4842 2.29703L19.5999 2.31158C19.6811 2.3223 19.7623 2.33302 19.8428 2.34527L19.9691 2.36365C20.0495 2.37513 20.1292 2.38815 20.2089 2.40116L20.3246 2.4203C20.4231 2.43638 20.5208 2.45399 20.6178 2.47237L20.6742 2.48232C20.7922 2.50453 20.9088 2.52826 21.0253 2.55276L21.1065 2.56961L21.3733 2.62857L21.4823 2.6546C21.5635 2.67374 21.644 2.69288 21.7244 2.71355C21.7605 2.72198 21.7996 2.73116 21.8334 2.74112C21.9206 2.76332 22.0071 2.78629 22.0935 2.81003L22.1755 2.83223C22.2897 2.86362 22.401 2.89655 22.5175 2.93024L22.5453 2.93942C22.631 2.96469 22.716 2.99149 22.8017 3.01599C18.5648 7.91623 14.8894 12.6633 13.4649 14.5369C13.33 14.7145 13.247 14.9271 13.2252 15.1505C13.2034 15.3739 13.2437 15.599 13.3416 15.8002C13.4394 16.0014 13.5908 16.1704 13.7785 16.2881C13.9662 16.4058 14.1827 16.4673 14.4031 16.4656L31.2228 16.3224L31.2153 16.35ZM31.6085 15.1755L14.4 15.3225C14.39 15.3233 14.3799 15.3208 14.3713 15.3155C14.3626 15.3101 14.3559 15.3021 14.3519 15.2926C14.3475 15.2855 14.3456 15.2769 14.3467 15.2685C14.3478 15.2601 14.3518 15.2524 14.358 15.2467C15.8096 13.3394 19.6105 8.42693 23.9534 3.42868C25.6516 4.09404 27.1859 5.01054 28.4218 6.10391L28.4714 6.14755L28.5894 6.25628C29.1872 6.7994 29.7281 7.40419 30.2035 8.06094C30.2168 8.08925 30.2324 8.11639 30.2501 8.1421C30.3666 8.31055 30.4756 8.48129 30.5808 8.65204L30.5944 8.67424C31.4424 10.0754 31.8724 11.57 31.8724 13.1258C31.8717 13.8178 31.783 14.5067 31.6085 15.1755Z"
                        fill="#333333"
                    />
                    <path
                        d="M31.7393 8.39171C31.7393 8.39171 31.6288 8.18039 31.413 7.84426C31.383 7.79756 31.3514 7.75085 31.3206 7.70338L31.2875 7.65438C31.2492 7.59619 31.2123 7.538 31.1717 7.48057C31.162 7.46679 31.1507 7.45301 31.1401 7.43999C30.5643 6.61594 29.8909 5.86734 29.1352 5.21115C27.7106 3.96235 25.9372 2.92947 23.9812 2.21434C23.8564 2.16789 23.7311 2.12272 23.6053 2.07882C21.6652 1.41433 19.6376 1.05292 17.5913 1.00689H17.5867C17.3883 1 17.1988 1 17.0004 1C12.7597 1 8.76489 2.24114 5.75335 4.49372C2.68844 6.78688 1 9.85183 1 13.1258C1 16.3998 2.68844 19.4594 5.75335 21.7495C8.76564 24.002 12.7597 25.2424 17.0004 25.2424C19.5428 25.2424 22.0717 24.783 24.315 23.9071C26.4988 23.0565 28.4248 21.8145 29.8825 20.3169C29.9707 20.2276 30.0566 20.1372 30.1403 20.0459C31.295 18.7971 32.1122 17.4097 32.57 15.9189C32.8539 15.0168 32.9989 14.0754 33 13.1281C33.0015 11.4965 32.567 9.88169 31.7393 8.39171ZM17.0049 24.0962C8.79947 24.0962 2.12763 19.1745 2.12763 13.1258C2.12763 7.21565 8.48899 2.38279 16.423 2.15768C13.9279 5.47453 9.30314 11.8816 7.17643 16.471L7.16966 16.4863C7.14335 16.5483 6.52916 18.0176 7.28844 19.1998C7.83797 20.0543 8.91599 20.4877 10.4932 20.4877H26.4732C26.5231 20.4805 26.5737 20.4805 26.6236 20.4877H28.0091C25.2065 22.7663 21.2012 24.0962 17.0011 24.0962H17.0049ZM31.2153 16.35C31.2078 16.3692 31.1995 16.3883 31.1913 16.4074C31.1657 16.4679 31.1394 16.5276 31.1123 16.5881C31.1018 16.6126 31.0905 16.6364 31.0793 16.6609C31.0522 16.7198 31.0244 16.778 30.9966 16.8362L30.9672 16.8967C30.9289 16.9733 30.8921 17.0498 30.8485 17.1264L30.8364 17.1486C30.7996 17.2183 30.7613 17.2872 30.7222 17.3553C30.7101 17.3775 30.6974 17.399 30.6846 17.4204C30.6523 17.4771 30.6184 17.5337 30.5846 17.5896L30.5463 17.6532C30.5034 17.7228 30.4591 17.7918 30.414 17.8607C30.4111 17.866 30.4079 17.8712 30.4042 17.876C30.3546 17.9525 30.3042 18.0291 30.2538 18.1018L30.22 18.1501C30.1787 18.2083 30.1373 18.2665 30.0945 18.3239L30.0501 18.3844C30.006 18.4431 29.9609 18.502 29.9148 18.5612L29.8832 18.6018C29.8253 18.6784 29.7667 18.7481 29.7066 18.8208L29.6863 18.8438C29.6344 18.9066 29.581 18.9686 29.5261 19.0306C29.5096 19.0505 29.4923 19.0696 29.475 19.0888C29.4284 19.1416 29.381 19.1937 29.3329 19.2457L29.2803 19.3032L29.248 19.3369H26.6236C26.5737 19.344 26.5231 19.344 26.4732 19.3369H10.4962C9.69255 19.3369 8.64836 19.2044 8.24091 18.5712C7.83346 17.938 8.17927 17.0184 8.20784 16.9457C8.96861 15.3011 11.4216 10.5984 17.8393 2.16534H17.904L18.0348 2.17146L18.2731 2.18448L18.4062 2.19367C18.4904 2.19903 18.573 2.20592 18.6565 2.21204L18.7693 2.22123C18.8888 2.23195 19.0083 2.24267 19.1271 2.25569L19.1632 2.25952C19.2699 2.271 19.3774 2.28325 19.4842 2.29703L19.5999 2.31158C19.6811 2.3223 19.7623 2.33302 19.8428 2.34527L19.9691 2.36365C20.0495 2.37513 20.1292 2.38815 20.2089 2.40116L20.3246 2.4203C20.4231 2.43638 20.5208 2.45399 20.6178 2.47237L20.6742 2.48232C20.7922 2.50453 20.9088 2.52826 21.0253 2.55276L21.1065 2.56961L21.3733 2.62857L21.4823 2.6546C21.5635 2.67374 21.644 2.69288 21.7244 2.71355C21.7605 2.72198 21.7996 2.73116 21.8334 2.74112C21.9206 2.76332 22.0071 2.78629 22.0935 2.81003L22.1755 2.83223C22.2897 2.86362 22.401 2.89655 22.5175 2.93024L22.5453 2.93942C22.631 2.96469 22.716 2.99149 22.8017 3.01599C18.5648 7.91623 14.8894 12.6633 13.4649 14.5369C13.33 14.7145 13.247 14.9271 13.2252 15.1505C13.2034 15.3739 13.2437 15.599 13.3416 15.8002C13.4394 16.0014 13.5908 16.1704 13.7785 16.2881C13.9662 16.4058 14.1827 16.4673 14.4031 16.4656L31.2228 16.3224L31.2153 16.35ZM31.6085 15.1755L14.4 15.3225C14.39 15.3233 14.3799 15.3208 14.3713 15.3155C14.3626 15.3101 14.3559 15.3021 14.3519 15.2926C14.3475 15.2855 14.3456 15.2769 14.3467 15.2685C14.3478 15.2601 14.3518 15.2524 14.358 15.2467C15.8096 13.3394 19.6105 8.42693 23.9534 3.42868C25.6516 4.09404 27.1859 5.01054 28.4218 6.10391L28.4714 6.14755L28.5894 6.25628C29.1872 6.7994 29.7281 7.40419 30.2035 8.06094C30.2168 8.08925 30.2324 8.11639 30.2501 8.1421C30.3666 8.31055 30.4756 8.48129 30.5808 8.65204L30.5944 8.67424C31.4424 10.0754 31.8724 11.57 31.8724 13.1258C31.8717 13.8178 31.783 14.5067 31.6085 15.1755Z"
                        stroke="#333333"
                        stroke-width="0.2"
                        mask="url(#path-1-outside-1)"
                    />
                </svg>
            );
        } else if (image === 'icon-explore-offer') {
            return (
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <path
                        d="M23.2422 2.79367L25 1.03589L23.9642 0L22.2063 1.75788C21.3964 1.13624 20.4245 0.73796 19.4052 0.619443L14.0967 0.00214864L0 14.0988L10.9021 25.0009L24.9988 10.9042L24.3809 5.59476C24.2624 4.57548 23.864 3.60356 23.2422 2.79367ZM10.9021 22.9291L2.07183 14.0988L14.6314 1.53921L19.236 2.07461C19.9499 2.15762 20.6056 2.41487 21.1615 2.8027L19.809 4.15513C19.5111 4.01097 19.1822 3.9345 18.8415 3.9345C18.2474 3.9345 17.6888 4.16582 17.2688 4.58593C16.4016 5.4531 16.4016 6.86412 17.2688 7.73129C17.6889 8.1514 18.2474 8.38272 18.8415 8.38272C19.4356 8.38272 19.9941 8.15135 20.4141 7.73129C21.0999 7.04558 21.2428 6.01995 20.844 5.19194L22.1974 3.83854C22.5854 4.39445 22.8428 5.05023 22.9258 5.76416L23.4617 10.3696L10.9021 22.9291ZM19.3782 6.69535C19.2349 6.83873 19.0442 6.91769 18.8415 6.91769C18.6387 6.91769 18.4481 6.83873 18.3046 6.69535C18.0087 6.39933 18.0087 5.91779 18.3046 5.62177C18.448 5.47839 18.6387 5.39943 18.8415 5.39943C19.0443 5.39943 19.2349 5.47839 19.3782 5.62177C19.6742 5.91779 19.6742 6.39938 19.3782 6.69535Z"
                        fill="#333333"
                    />
                    <path
                        d="M8.5271 12.4352L16.0276 11.3594L16.2356 12.8097L8.73513 13.8855L8.5271 12.4352Z"
                        fill="#333333"
                    />
                    <path
                        d="M11.3743 9.49988L12.4101 8.46407L13.4458 9.49981L12.41 10.5356L11.3743 9.49988Z"
                        fill="#333333"
                    />
                    <path
                        d="M11.4783 15.6954L12.5141 14.6596L13.5498 15.6954L12.514 16.7312L11.4783 15.6954Z"
                        fill="#333333"
                    />
                </svg>
            );
        } else if (image === 'icon-locate-a-center') {
            return (
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <path
                        d="M26.9374 26.106L26.9375 26.1059L26.9354 26.1031L21.9871 19.5776L21.9874 19.5774L21.9829 19.5728C21.8799 19.4677 21.7177 19.3539 21.5474 19.3539H19.3523C21.18 17.0605 22.797 13.9161 22.797 9.92157C22.797 4.94961 18.8267 0.95 14 0.95C9.17312 0.95 5.20303 5.00077 5.20303 9.92157C5.20303 13.9161 6.81997 17.0605 8.64767 19.3539H6.45262C6.29121 19.3539 6.1235 19.4094 6.01188 19.579L1.06463 26.1031L1.06453 26.1031L1.06262 26.106C0.956045 26.269 0.899694 26.4919 1.00959 26.7161C1.06245 26.8239 1.13006 26.9079 1.21381 26.9649C1.29792 27.0221 1.39541 27.05 1.50433 27.05H26.4957C26.6046 27.05 26.7021 27.0221 26.7862 26.9649C26.8699 26.9079 26.9376 26.8239 26.9904 26.7161C27.1003 26.4919 27.044 26.269 26.9374 26.106ZM14 2.12059C18.22 2.12059 21.6973 5.66589 21.6973 9.97255C21.6973 17.54 15.3575 21.8534 14 22.7096C12.6423 21.8539 6.30269 17.5906 6.30269 9.97255C6.30269 5.61491 9.73003 2.12059 14 2.12059ZM21.2725 20.4735L25.3458 25.8794H2.65425L6.72746 20.4735H9.62982C10.652 21.5645 11.6605 22.3897 12.4211 22.9429C12.8033 23.2208 13.123 23.4303 13.3506 23.5703C13.4643 23.6404 13.5552 23.6932 13.6196 23.7286C13.6517 23.7463 13.6775 23.7598 13.6964 23.769C13.7057 23.7736 13.714 23.7774 13.7207 23.7802C13.7219 23.7807 13.7232 23.7812 13.7245 23.7817C13.7599 23.8121 13.8059 23.825 13.8491 23.8313C13.8964 23.8382 13.9494 23.8382 13.9979 23.8382H14H14.0027C14.0505 23.8382 14.0917 23.8382 14.1333 23.8312C14.1755 23.824 14.2163 23.81 14.267 23.7847C14.2678 23.7844 14.2684 23.7842 14.2688 23.7841C14.2724 23.783 14.276 23.7816 14.2793 23.7802C14.286 23.7774 14.2943 23.7736 14.3036 23.769C14.3225 23.7598 14.3483 23.7463 14.3804 23.7286C14.4448 23.6932 14.5357 23.6404 14.6494 23.5703C14.877 23.4303 15.1967 23.2208 15.5789 22.9429C16.3395 22.3897 17.348 21.5645 18.3702 20.4735H21.2725Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                    <path
                        d="M13.9999 12.9795C15.9283 12.9795 17.4487 11.3753 17.4487 9.46288C17.4487 7.49847 15.8773 5.94622 13.9999 5.94622C12.0715 5.94622 10.5511 7.55041 10.5511 9.46288C10.5511 11.4268 12.072 12.9795 13.9999 12.9795ZM13.9999 7.06582C15.3202 7.06582 16.3491 8.16338 16.3491 9.46288C16.3491 10.812 15.2716 11.8599 13.9999 11.8599C12.6796 11.8599 11.6507 10.7624 11.6507 9.46288C11.6507 8.11309 12.6789 7.06582 13.9999 7.06582Z"
                        fill="#333333"
                        stroke="#333333"
                        stroke-width="0.1"
                    />
                </svg>
            );
        } else {
            return (
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.5667 1H5.76667C5.52736 1 5.33333 1.19402 5.33333 1.43333V4.9H1.43333C1.19402 4.9 1 5.09402 1 5.33333V20.5C1 20.7393 1.19402 20.9333 1.43333 20.9333H5.33333V26.5667C5.33328 26.7419 5.4388 26.8999 5.6007 26.9671C5.6533 26.989 5.70968 27.0002 5.76667 27C5.88161 27 5.99178 26.9543 6.07303 26.873L12.0127 20.9333H22.2333C22.4726 20.9333 22.6667 20.7393 22.6667 20.5V17.0333H26.5667C26.806 17.0333 27 16.8393 27 16.6V1.43333C27 1.19402 26.806 1 26.5667 1ZM21.8 20.0667H11.8333C11.7184 20.0667 11.6082 20.1124 11.527 20.1936L6.2 25.5206V20.5C6.2 20.2607 6.00598 20.0667 5.76667 20.0667H1.86667V5.76667H21.8V20.0667ZM26.1333 16.1667H22.6667V5.33333C22.6667 5.09402 22.4726 4.9 22.2333 4.9H6.2V1.86667H26.1333V16.1667ZM17 11H7V9.9H17V11ZM7 15H17V13.9H7V15Z"
                        fill="#333333"
                        stroke="#000033"
                        stroke-width="0.3"
                    />
                </svg>
            );
        }
    };

    return renderIcons();
};

export default Icons;
