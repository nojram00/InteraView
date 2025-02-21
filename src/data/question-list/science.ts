import { Quiz } from "@/types/questions";


const ScienceQuestions : Quiz = {
    "subject": "Science",
    "questions": [
        {
            "question": "In your biology class, you are using a microscope to observe a specimen, but the image is still blurry after initially adjusting the focus. To achieve a sharper focus and see the details more clearly, which part of the microscope should you use?",
            "answers": [
                {"answer": "Stage", "isCorrectAnswer": false},
                {"answer": "Fine Adjustment Knob", "isCorrectAnswer": true},
                {"answer": "Coarse Adjustment Knob", "isCorrectAnswer": false},
                {"answer": "Eyepiece", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "While studying a cell, you observe a large network of membrane-bound tunnels responsible for protein and lipid synthesis. This organelle also plays a key role in detoxification processes and contributes to the formation of the cytoskeleton. Which organelle is being described?",
            "answers": [
                {"answer": "Mitochondria", "isCorrectAnswer": false},
                {"answer": "Golgi Apparatus", "isCorrectAnswer": false},
                {"answer": "Endoplasmic Reticulum", "isCorrectAnswer": true},
                {"answer": "Lysosome", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "In plant cells, there is a rigid outer structure that provides support, protection, and helps maintain the shape of the cell. This structure also regulates the passage of substances into and out of the cell. What is this structure called, and how does it differ from the structure found in animal cells?",
            "answers": [
                {"answer": "Plasma Membrane, which provides flexibility in animal cells", "isCorrectAnswer": false},
                {"answer": "Cell Wall, which provides rigidity in plant cells", "isCorrectAnswer": true},
                {"answer": "Endoplasmic Reticulum, responsible for protein synthesis", "isCorrectAnswer": false},
                {"answer": "Golgi Apparatus, which modifies proteins in animal cells", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "What part of the microscope is used to hold objective lenses and can be turned to increase the magnification?",
            "answers": [
                {"answer": "Body Tube", "isCorrectAnswer": false},
                {"answer": "Diaphragm", "isCorrectAnswer": false},
                {"answer": "Nose Piece", "isCorrectAnswer": true},
                {"answer": "Coarse Adjustment Knob", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "What is the term for a group of organs that work together to perform closely related functions?",
            "answers": [
                {"answer": "Tissue", "isCorrectAnswer": false},
                {"answer": "Organ System", "isCorrectAnswer": true},
                {"answer": "Cell", "isCorrectAnswer": false},
                {"answer": "Organism", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "What type of consumers are organisms that consume producers for energy and nutrients?",
            "answers": [
                {"answer": "Primary Consumers", "isCorrectAnswer": true},
                {"answer": "Secondary Consumers", "isCorrectAnswer": false},
                {"answer": "Tertiary Consumers", "isCorrectAnswer": false},
                {"answer": "None of the above", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which of the following is a characteristic of asexual reproduction?",
            "answers": [
                {"answer": "It requires two parents to produce offspring.", "isCorrectAnswer": false},
                {"answer": "The offspring are genetically identical to the parent.", "isCorrectAnswer": true},
                {"answer": "It involves the fusion of male and female gametes.", "isCorrectAnswer": false},
                {"answer": "It always occurs in animals.", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "During a science experiment, a student observes a cell under a microscope as it goes through a process where it divides into two identical daughter cells. The student notes that the chromosomes in the nucleus are duplicated and evenly distributed between the two cells. Which stage of cellular reproduction is the student most likely observing, and why is this stage crucial for growth and repair?",
            "answers": [
                {"answer": "Prophase, because it is when the nuclear membrane disappears and chromosomes condense.", "isCorrectAnswer": false},
                {"answer": "Mitosis, because it ensures that each daughter cell receives an identical set of chromosomes", "isCorrectAnswer": true},
                {"answer": "Interphase, because it involves the replication of DNA before cell division", "isCorrectAnswer": false},
                {"answer": "Mitosis, because it ensures that each daughter cell receives an identical set of chromosomes", "isCorrectAnswer": true}
            ]
        },
        {
            "question": "You as a scientist are studying how muscle cells form tissues that make up the heart. These heart tissues work together to pump blood throughout the body. What level of biological organization is being observed in this scenario?",
            "answers": [
                {"answer": "Organism, because all the heart tissues work together", "isCorrectAnswer": false},
                {"answer": "Tissue, because muscle cells group together to form the heart tissue", "isCorrectAnswer": false},
                {"answer": "Organ, because the heart is an organ that performs specific functions", "isCorrectAnswer": true},
                {"answer": "Organ system, because the circulatory system relies on the heart for its function", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Imagine yourself as a scientist who observes a sequence where plants are consumed by herbivores, which are then eaten by carnivores. You notice that energy flows from one organism to the next as each feeds on the one below it. Which level of the food chain is being described, and why is it important for the stability of the ecosystem?",
            "answers": [
                {"answer": "Producers, because they provide energy for all other organisms in the food chain", "isCorrectAnswer": true},
                {"answer": "Herbivores, because they transfer energy from producers to primary consumers", "isCorrectAnswer": false},
                {"answer": "Secondary consumers, because they regulate the population of primary consumers", "isCorrectAnswer": false},
                {"answer": "Decomposers, because they break down organic matter and recycle nutrients", "isCorrectAnswer": false}
            ]
        }
    ]
}


export default ScienceQuestions;