import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

const Calculator = () => {

    const [modal, setModal] = useState(false)
    const [calories, setCalories] = useState(0);
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    const [size, setSize] = useState('')
    const [gender, setGender] = useState('')
    const [physicActivity, setPhysicActivity] = useState('')
    const [objective, setObjective] = useState('')
    const [error, setError] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const showResults = () => {

        if (age == '' || isNaN(parseInt(age))) {
            setError("age")
            return
        }
        if (weight == '' || isNaN(parseFloat(weight.replace(',', '.')))) {
            setError("weight")
            return
        }
        if (size == '' || isNaN(parseInt(size))) {
            setError("size")
            return
        }
        if (gender == '') {
            setError("gender")
            return
        }
        if (physicActivity == '') {
            setError("physicActivity")
            return
        }
        if (objective == '') {
            setError("objective")
            return
        }

        setError('');

        if (gender == "0") setCalories(((65 + (9.6 * parseFloat(weight.replace(',', '.')))) + ((1.8 * parseInt(size)) - (4.7 * parseInt(age))) * parseFloat(physicActivity)) + parseInt(objective))
        else if (gender == "1") setCalories(((66 + (13.7 * parseFloat(weight.replace(',', '.')))) + ((5 * parseInt(size)) - (6.8 * parseInt(age))) * parseFloat(physicActivity)) + + parseInt(objective))
        setModal(true);

    }


    return (
        <>
            <section className="p-8 text-white max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                <div className="w-full h-full flex flex-col justify-center max-w-[700px]">
                    <h1 className="text-4xl leading-12 sm:text-5xl font-extrabold italic sm:leading-14">
                        CALCULADORA<br />
                        <span className="bg-lime-500 text-black">DE MACROS</span>
                    </h1>
                    <hr className="my-8 w-[100px]" />
                    <p className="text-gray-300 my-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo quae distinctio, voluptates voluptatem facere architecto laudantium repudiandae. Recusandae, numquam!</p>
                </div>
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4">
                            <span className="italic font-medium">EDAD</span>
                            <input type="text" onChange={(e) => { setAge(e.target.value) }} id="age" className={"w-full border p-3 outline-none " + (error == "age" ? "border-red-400" : "border-gray-300")} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="italic font-medium">PESO</span>
                            <div className="relative flex items-center">
                                <input type="text" onChange={(e) => { setWeight(e.target.value) }} id="weight" className={"border w-full border-gray-300 p-3 outline-none pr-12 " + (error == "weight" ? "border-red-400" : "border-gray-300")} />
                                <span className="absolute right-4">kg</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="italic font-medium">ALTURA</span>
                            <div className="relative flex items-center">
                                <input type="text" onChange={(e) => { setSize(e.target.value) }} id="size" className={"w-full border border-gray-300 p-3 outline-none pr-12 " + (error == "size" ? "border-red-400" : "border-gray-300")} />
                                <span className="absolute right-4">cm</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="italic font-medium">GÉNERO</span>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="gender_female" className={"flex gap-4 items-center border border-gray-300 px-4 py-3 cursor-pointer " + (error == "gender" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setGender("0") }} className="outline-none w-4 h-4" name="gender" id="gender_female" />
                                <h3 className="font-medium italic">MUJER</h3>
                            </label>
                            <label htmlFor="gender_male" className={"flex gap-4 items-center border border-gray-300 px-4 py-3 cursor-pointer " + (error == "gender" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setGender("1") }} className="outline-none w-4 h-4" name="gender" id="gender_male" />
                                <h3 className="font-medium italic">HOMBRE</h3>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="italic font-medium">NIVEL DE ACTIVIDAD FÍSICA</span>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="level_sedentary" className={"flex gap-4 items-center border border-gray-300 px-4 py-3 cursor-pointer " + (error == "physicActivity" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setPhysicActivity("1.2") }} className="outline-none w-4 h-4" name="physic_activity" id="level_sedentary" />
                                <div>
                                    <h3 className="font-medium italic">SEDENTARIO</h3>
                                    <span className="text-sm text-gray-300">Poco o nada de ejercicio.</span>
                                </div>
                            </label>
                            <label htmlFor="level_active" className={"flex gap-4 items-center border border-gray-300 px-4 py-3 cursor-pointer " + (error == "physicActivity" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setPhysicActivity("1.45") }} className="outline-none w-4 h-4" name="physic_activity" id="level_active" />
                                <div>
                                    <h3 className="font-medium italic">ACTIVO</h3>
                                    <span className="text-sm text-gray-300">Ejercicio de 1 a 4 días por semana.</span>
                                </div>
                            </label>
                            <label htmlFor="level_veryactive" className={"flex gap-4 items-center border border-gray-300 px-4 py-3 cursor-pointer " + (error == "physicActivity" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setPhysicActivity("1.725") }} className="outline-none w-4 h-4" name="physic_activity" id="level_veryactive" />
                                <div>
                                    <h3 className="font-medium italic">MUY ACTIVO</h3>
                                    <span className="text-sm text-gray-300">Ejercicio de 5 a 7 días por semana.</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="italic font-medium">OBJETIVO</span>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="objective_maintenance" className={"flex gap-4 border border-gray-300 p-4 items-center cursor-pointer " + (error == "objective" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setObjective("0") }} className="outline-none w-4 h-4" name="objective" id="objective_maintenance" />
                                <h3 className="font-medium italic">MANTENIMIENTO</h3>
                            </label>
                            <label htmlFor="objective_definition" className={"flex gap-4 border border-gray-300 p-4 items-center cursor-pointer " + (error == "objective" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setObjective("-500") }} className="outline-none w-4 h-4" name="objective" id="objective_definition" />
                                <h3 className="font-medium italic">DEFINICIÓN</h3>
                            </label>
                            <label htmlFor="objective_volume" className={"flex gap-4 border border-gray-300 p-4 items-center cursor-pointer " + (error == "objective" ? "border-red-400" : "border-gray-300")}>
                                <input type="radio" onChange={() => { setObjective("500") }} className="outline-none w-4 h-4" name="objective" id="objective_volume" />
                                <h3 className="font-medium italic">VOLUMEN</h3>
                            </label>
                        </div>
                    </div>
                    <button onClick={() => showResults()} className="px-3 mt-6 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit">CALCULAR</button>
                </form>
            </section>

            <AnimatePresence>
                {modal && (
                    <motion.div
                        className="fixed w-full h-full top-0 left-0 flex justify-center items-center p-8 z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="max-w-[400px] w-full flex flex-col gap-1 text-white p-12 bg-[#080808] border border-lime-500 relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10">
                            <button className="absolute top-2 right-2 z-10 text-xl p-2 flex justify-center items-center cursor-pointer" onClick={() => setModal(false)}><IoMdClose /></button>
                            <p className="font-medium italic">Tu consumo debería ser de:</p>
                            <strong className="text-black bg-lime-500 w-fit p-1 font-extrabold italic text-4xl flex items-end gap-1">{calories.toFixed(2).toString().replace('.', ',')} <span className="text-medium text-xl">cal</span></strong>
                            <p className="font-medium italic">por día.</p>
                            <div>
                                <span></span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Calculator;