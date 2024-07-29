import React from 'react';
import Image from 'next/image';

const ProgramOverview = () => {
  return (
    <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1440px] mx-auto p-36">
      <div className="hero__title ">
        <h1 className="hero__title justify-center text-center items-center">
          Program Overview
        </h1>
        <h1 className="text-center hero__subtitle font-bold">
          The NaijaCoder program is a 10-day course that teaches the basics of algorithms and computer programming.
          The course is designed to be accessible to all students, especially those who are underprivileged.
        </h1>
      </div>

<div className="hero__image-container">
      <div className="hero__image">
          <Image src="./picture_overview.png" alt="hero" fill className="object-contain" />
      </div>
      </div>



    <div className="hero__subtitle text-center">
        <ol>
          <li>Day 1: Introductions and Motivations</li>
          <li>Day 2: Types in Python</li>
          <li>Day 3: For Loops and Recursion</li>
          <li>Day 4: More Methods of Iteration in Python</li>
          <li>Day 5: Objects, Libraries, Data Science</li>
          <li>Day 6: Growth of Functions</li>
          <li>Day 7: Searching Algorithms: Linear, Binary</li>
          <li>Day 8: Sorting Algorithms: Bubble, Selection, Insertion</li>
          <li>Day 9: Sorting Algorithms: Part 2</li>
          <li>Day 10: Review, Recap, Exam</li>
        </ol>
    </div>
  </div>


    
  );
}

export default ProgramOverview;
