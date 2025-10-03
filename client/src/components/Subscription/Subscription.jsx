import { assets } from '../../assets/assets'
import ButtonVariant from '../../helpers/button/buttonVariant'

const Subscription = () => {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="w-full lg:w-[80%] p-10 rounded-2xl bg-gradient-to-b from-[#6613E1] to-[#A97AEE] flex flex-col md:flex-row items-center justify-between shadow-xl gap-10">
        
        <div className="w-full text-white md:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Build Real Projects. <br className='hidden lg:block'/> Get Certified.
          </h2>
          <p className="text-sm opacity-90">
            Work on hands-on projects designed to sharpen your skills. 
            Earn industry-recognized certificates and showcase your achievements.
          </p>

          <ButtonVariant text={"Explore Now"} />
        </div>

        <div className='w-full md:w-[500px] flex items-center justify-center'>
            <img src={assets.footer} alt="Footer" />
        </div>
      </div>
    </div>
  )
}

export default Subscription
