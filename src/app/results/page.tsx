

export default function Results(){
    return(
    <>
    <div className="text-3xl items-center flex py-4 justify-center text-sky-800 font-extrabold">Grand Entrance Exam Result</div> 
<div className="flex items-center justify-center py-10 bg-white">
 <div className="bg-white shadow-2xl text-2xl text-gray-700 text-start rounded-lg p-10 w-1/2">
 <p>Registration Number*</p>
<input
                        type="text"
                        placeholder="Registration Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
<br />
<p className="pt-5">CNIC or B-Form Number *</p>
<input
                        type="text"
                        placeholder="CNIC or B-Form Number *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <br />
                    <div className="pt-5 items-center justify-center px-40">
                    <button className="bg-sky-800 text-white p-2 px-14 rounded-md">GET RESULT</button>
                    </div>

</div>



        </div>
        </>
    )
}