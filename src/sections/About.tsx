"use client";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

//front-end svg
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/next-js.svg";

//mobile app svg
import AndroidIcon from "@/assets/icons/android.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";

//backend svg
import NodejsIcon from "@/assets/icons/nodejs.svg";
import PhpIcon from "@/assets/icons/php.svg";
import pythonIcon from "@/assets/icons/python.svg";

//database svg
import MysqlIcon from "@/assets/icons/mysql.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";

//other
import ShopifyIcon from "@/assets/icons/shopify.svg";
import WordpressIcon from "@/assets/icons/wordpress.svg";
import UiUxIcon from "@/assets/icons/ui-ux.svg";

import mapImage from "@/assets/images/map.png";
import smileImage from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  //front end
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS3',
    iconType: CSSIcon
  },
  {
    title: 'Javascript',
    iconType: JavascriptIcon
  },
  {
    title: 'Typescript',
    iconType: TypescriptIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'Next js',
    iconType: NextjsIcon
  },

  //mobile app
  {
    title: 'Android',
    iconType: AndroidIcon
  },
  {
    title: 'Apple',
    iconType: AppleIcon
  },
  {
    title: 'Flutter',
    iconType: FlutterIcon
  },
  {
    title: 'React Native',
    iconType: ReactIcon
  },

  //backend
  {
    title: 'Node js',
    iconType: NodejsIcon
  },
  {
    title: 'Python',
    iconType: pythonIcon
  },
  {
    title: 'Php',
    iconType: PhpIcon
  },

  //database
  {
    title: 'Mysql',
    iconType: MysqlIcon
  },
  {
    title: 'Mongodb',
    iconType: MongodbIcon
  },
  {
    title: 'Postgresql',
    iconType: PostgresqlIcon
  },
  
  //other
  {
    title: 'Shopify',
    iconType: ShopifyIcon
  },
  {
    title: 'WOrdpress',
    iconType: WordpressIcon
  },
  {
    title: 'UI/UX',
    iconType: UiUxIcon
  },
] 

const hobbies = [
  {
    title: 'Design',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Ideas',
    emoji: '💡',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Research',
    emoji: '🔍',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Content',
    emoji: '✍️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'AI',
    emoji: '🤖',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Target',
    emoji: '🎯',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Innovation',
    emoji: '🚀',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className="" />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the code" description="Explore the interests and hobbies beyond the digital realm." className="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{ left: hobby.left, top: hobby.top }} drag dragConstraints={constraintRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileImage} alt="smiling memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
