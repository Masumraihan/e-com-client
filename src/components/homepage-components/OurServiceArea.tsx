const OurServiceArea = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <h2 className='mb-2 text-xl font-bold md:text-3xl'>Our Service Area</h2>
      </div>
      <hr />
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13832.18946478176!2d88.9785997793368!3d24.413337947296736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc11714a398415%3A0x4b786d401795f55b!2sNatore!5e1!3m2!1sen!2sbd!4v1723797835274!5m2!1sen!2sbd'
        width='600'
        height='450'
        loading='lazy'
        className='w-full h-[400px] rounded-xl'
      ></iframe>
    </div>
  );
};

export default OurServiceArea;
