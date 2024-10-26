import Image from 'next/image';
import bg from '../../../../public/background/backgroud-contact.png';
import Form from '@/components/contact/Form';

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="backgroud-image"
        className="-z-50 fixed w-full h-full top-0 left-0 object-cover py-8 sm:py-0 object-center opacity-20"
      />

      <article className=" flex flex-col items-center justify-center space-y-8 w-full relative">
        <div className=" flex flex-col items-center justify-center w-full sm:w-3/4 space-y-6">
          <h1 className=" font-semibold text-4xl text-center capitalize text-accent">
            Contact For Whatsab
          </h1>
          <p className=" text-center text-foreground font-light text-sm xs:text-base">{`If you have any questions, encounter any difficulties, or need assistance with anything at all, please don't hesitate to reach out to me. Whether it’s a quick clarification or in-depth support, I’m more than happy to help and will do my best to provide the guidance you need. Your concerns matter, and I'm here to make things as smooth and easy as possible for you!`}</p>
        </div>
        <Form />
      </article>
    </>
  );
}
