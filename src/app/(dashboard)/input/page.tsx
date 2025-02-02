import { TextInput, Dropdown } from "@/components/form-inputs"
import { saveData } from "@/actions/dummy-actions"
import Wrapper from "@/components/wrapper"

export const metadata = {
    title : "InteraView - Input",
}

export default function InputPage() {

    const options = [
        { name: "Math", value: "math" },
        { name: "English", value: "english" },
        // { name: "Science", value: "science" },
        // { name: "Filipino", value: "filipino" },
        // { name: "Araling Panlipunan", value: "araling-panlipunan" },
        // { name: "Edukasyon sa Pagpapakatao", value: "edukasyon-sa-pagpapakatao" },
        // { name: "Music", value: "music" },
        // { name: "Arts", value: "arts" },
        // { name: "Physical Education", value: "physical-education" },
        // { name: "Health", value: "health" },
        // { name: "Technology and Livelihood Education", value: "technology-and-livelihood-education" },
        // { name: "Home Economics", value: "home-economics" },
        // { name: "Entrepreneurship", value: "entrepreneurship" },
        // { name: "Research", value: "research" },
        // { name: "Work Immersion", value: "work-immersion" },
        // { name: "Discipline and Ideas", value: "discipline-and-ideas" },
        // { name: "Media and Information Literacy", value: "media-and-information-literacy" },
        // { name: "Understanding Culture, Society, and Politics", value: "understanding-culture-society-and-politics" },
        // { name: "Contemporary Philippine Arts from the Regions", value: "contemporary-philippine-arts-from-the-regions" },
        // { name: "Physical Education and Health", value: "physical-education-and-health" },
        // { name: "Personal Development", value: "personal-development" },
        // { name: "Earth and Life Science", value: "earth-and-life-science" },
        // { name: "Physical Science", value: "physical-science" },
        // { name: "Empowerment Technologies", value: "empowerment-technologies" },
        // { name: "Applied Economics", value: "applied-economics" },
        // { name: "Organization and Management", value: "organization-and-management" },
        // { name: "General Mathematics", value: "general-mathematics" },
    ]
    return(
        <Wrapper>
            <form action={saveData} className="w-full flex flex-col gap-5 bg-gray-300 shadow-md p-5 rounded-md">
                
                <Dropdown name="subject" label="Subject" options={options}/>

                <div className="flex flex-col gap-4 w-full">
                    <div className="self-start font-bold text-xl">
                        <h1>Written Works</h1>
                    </div>
                    <TextInput name="written-works-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="written-works-score" label="Score" type="number"/>
                        <TextInput name="written-works-items" label="No. of items" type="number"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="self-start font-bold text-xl">
                        <h1>Performance Task</h1>
                    </div>
                    <TextInput name="perf-task-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="perf-task-score" label="Score" type="number"/>
                        <TextInput name="perf-task-items" label="No. of items" type="number"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="self-start font-bold text-xl">
                        <h1>Exam</h1>
                    </div>
                    <TextInput name="exam-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="exam-score" label="Score" type="number"/>
                        <TextInput name="exam-items" label="No. of items" type="number"/>
                    </div>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </div>
            </form>
        </Wrapper>
    )
}