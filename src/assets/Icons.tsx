import React from 'react'

const Icons = {
  plus: () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.5 0.75L9.5 18.25M0.749999 9.5L18.25 9.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  edit: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M7.73499 2.09999L2.94583 7.16916C2.76499 7.36166 2.58999 7.74083 2.55499 8.00333L2.33916 9.89333C2.26333 10.5758 2.75333 11.0425 3.42999 10.9258L5.30833 10.605C5.57083 10.5583 5.93833 10.3658 6.11916 10.1675L10.9083 5.09833C11.7367 4.22333 12.11 3.22583 10.8208 2.00666C9.53749 0.799161 8.56333 1.22499 7.73499 2.09999Z"
        stroke="#2e2a2a"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.93583 2.94583C7.05812 3.728 7.43669 4.44741 8.01209 4.99114C8.5875 5.53487 9.32717 5.87214 10.115 5.95M1.75 12.8333H12.25"
        stroke="#2e2a2a"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  delete: () => (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M11.25 3.98832C9.3075 3.79582 7.35333 3.69666 5.405 3.69666C4.25 3.69666 3.095 3.75499 1.94 3.87166L0.75 3.98832M3.95833 3.39916L4.08667 2.63499C4.18 2.08082 4.25 1.66666 5.23583 1.66666H6.76417C7.75 1.66666 7.82583 2.10416 7.91333 2.64082L8.04167 3.39916M9.99583 5.83166L9.61667 11.7058C9.5525 12.6217 9.5 13.3333 7.8725 13.3333H4.1275C2.5 13.3333 2.4475 12.6217 2.38333 11.7058L2.00417 5.83166M5.02583 10.125H6.96833M4.54167 7.79166H7.45833"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export default Icons
