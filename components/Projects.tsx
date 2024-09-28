"use client"
import React from 'react'
import { motion } from "framer-motion"

type Project = {
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {}

const Projects = ({}: Props) => {
    const projects: Project[] = [
        {
            title: "E-Ramen",
            description: " This project is a comprehensive online ramen ordering platform designed specifically for E-Ramen restaurants. This website enhance the digital experience for ramen lovers by providing an intuitive and user-friendly platform where customers can easily browse the menu, learn about the restaurant, and place their orders online. This project involves UI/UX design using Figma, front-end development with HTML and CSS.",
            imageUrl: "https://i.imgur.com/wGl9c9z.png"
        },
        {
            title: "Water Quality Prediction for Potability",
            description: "This project involved extensive data exploration and preprocessing to handle missing values, outliers, and ensure the dataset suitable for model training. I compared several models, including Logistic Regression, Support Vector Machines (SVM), Random Forest, and Artificial Neural Networks (ANN). Additionally, I explored ensemble techniques to enhance model performance. Despite these efforts, the best-performing model achieved an accuracy of only 68%, highlighting the challenge of accurately predicting water potability with the available dataset and the need for further improvements or additional data.",
            imageUrl: "https://i.imgur.com/bxMpzBo.png"
        },
        {
            title: "Beat Buddy",
            description: "This Project is a music recommendation system designed to enhance user experience by providing diverse and personalized song suggestions. Using the cosine similarity and clustering method, the system compares song features to identify tracks that closely match user preferences.",
            imageUrl: "https://i.imgur.com/w3JTqEN.png"
        },
        {
            title: "Breast Cancer Prediction",
            description: "I developed a breast cancer prediction model using Logistic Regression, Naive Bayes, and Artificial Neural Networks (ANN) on computational biology data. Cross-validation ensured reliable results, with ANN performing best, though all models offered valuable insights for accurate cancer prediction.",
            imageUrl: "https://i.imgur.com/17ZOf4N.png"
        },
        {
            title: "Mahacademy",
            description: "This project is an online website for learning that can help beginners in computer science, which is equipped with materials, learning videos and practice questions. This project involves UI/UX design using Figma, front-end development with HTML and CSS.",
            imageUrl: "https://i.imgur.com/8OIHAwp.png"
        },
        {
            title: "Music Genre Classification",
            description: "This project, derived from a speech recognition course, focuses on classifying music genres by extracting key audio features such as MFCCs, Chroma, and Root Mean Square. Various machine learning models, including Naive Bayes, K-Nearest Neighbors (KNN), Random Forest, and Cross Gradient Boosting to classify the genres. The process involves data preprocessing using label encoding and optimizing models with different hyperparameters to improve classification accuracy. Through this approach, the project highlights the application of machine learning in audio signal processing and genre classification.",
            imageUrl: "https://i.imgur.com/nXCbn7k.png"
        },
        {
            title: "Topic Quest",
            description: "As the UI/UX designer for Topic Quest, I’m working on an app that allows users to create questions based on specific topics. The app dynamically generates these questions and provides options for users to respond either through essays or multiple-choice formats. Powered by the ChatGPT API, Topic Quest ensures a seamless and interactive experience, enhancing learning and engagement with AI-driven questions and answers.",
            imageUrl: "https://i.imgur.com/3vFa8ZZ.png"
        }
    ];

    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-12 uppercase tracking-[20px] text-white-200 text-2xl'>
                Projects
            </h3>

            <div className='absolute w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }}
                            src={project.imageUrl} alt={project.title} 
                            className='w-[500px] h-[200px] xl:w-[700px] xl:h-[400px] xl:mt-10 mt-16' 
                        />
                        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl font-semibold text-center'>Project {i+1} of {projects.length}: <span className='underline'>{project.title}</span></h4>
                            <p className='font-light xl:mr-10 xl:ml-10 justify-center'>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[35%] bg-[#90D5FF]/20 left-0 h-[300px] -skew-y-12'/>
        </div>
    )
}

export default Projects