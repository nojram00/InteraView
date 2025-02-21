import { Quiz } from "@/types/questions";

const ComputerQuestions : Quiz = {
    "subject": "Computer",
    "questions": [
        {
            "question": "Which of the following statements is true about power-related issues?",
            "answers": [
                {"answer": "Sudden power failures or voltage can damage hardware, and overheating can harm internal components", "isCorrectAnswer": true},
                {"answer": "Sudden power failures or voltage can enhance hardware performance", "isCorrectAnswer": false},
                {"answer": "Overheating has no impact on internal components of computer", "isCorrectAnswer": false},
                {"answer": "Power-related issues do not affect hardware at all", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which of the following is NOT a type of malware?",
            "answers": [
                {"answer": "Virus", "isCorrectAnswer": false},
                {"answer": "Trojan Horse", "isCorrectAnswer": false},
                {"answer": "Firewall", "isCorrectAnswer": true},
                {"answer": "Ransomware", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "What should you type to access the help file for the defrag command?",
            "answers": [
                {"answer": "defrag /?", "isCorrectAnswer": true},
                {"answer": "defrag -help", "isCorrectAnswer": false},
                {"answer": "defrag /help", "isCorrectAnswer": false},
                {"answer": "defrag ?", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Who is widely known as the 'Father of the Internet'?",
            "answers": [
                {"answer": "Bill Gates", "isCorrectAnswer": false},
                {"answer": "Vinton Cerf", "isCorrectAnswer": true},
                {"answer": "Tim Berners-Lee", "isCorrectAnswer": false},
                {"answer": "Steve Jobs", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which of the following is NOT an example of an IP address?",
            "answers": [
                {"answer": "192.168.0.1", "isCorrectAnswer": false},
                {"answer": "255.255.255.0", "isCorrectAnswer": false},
                {"answer": "259.270.300.4", "isCorrectAnswer": true},
                {"answer": "126.255.255.254", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "You are working on an important project and want to ensure your files are safe in case your computer crashes. Which of the following would be the BEST backup strategy?",
            "answers": [
                {"answer": "Save the files in a new folder on your desktop", "isCorrectAnswer": false},
                {"answer": "Email the files to yourself and delete them from your computer", "isCorrectAnswer": false},
                {"answer": "Copy the files to an external hard drive and a cloud storage service", "isCorrectAnswer": true},
                {"answer": "Print out hard copies of the files", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "You need to upload a file from your computer to a server so that it can be accessed by others. Which internet service would you use?",
            "answers": [
                {"answer": "HTTP", "isCorrectAnswer": false},
                {"answer": "DNS", "isCorrectAnswer": false},
                {"answer": "FTP", "isCorrectAnswer": true},
                {"answer": "URL", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "You need to connect two computers directly without using a network switch or router. Which type of Ethernet cable should you use?",
            "answers": [
                {"answer": "Straight-through cable", "isCorrectAnswer": false},
                {"answer": "Crossover cable", "isCorrectAnswer": true},
                {"answer": "Coaxial cable", "isCorrectAnswer": false},
                {"answer": "Fiber optic cable", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "What is the process of breaking large networks into small networks known as subnets?",
            "answers": [
                {"answer": "Subsetting", "isCorrectAnswer": false},
                {"answer": "Packet Switching", "isCorrectAnswer": false},
                {"answer": "Subnetting", "isCorrectAnswer": true},
                {"answer": "Network Address Translation (NAT)", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which of the following is NOT an objective of network analysis?",
            "answers": [
                {"answer": "To minimize project cost", "isCorrectAnswer": false},
                {"answer": "To minimize project time", "isCorrectAnswer": false},
                {"answer": "To increase the project capacity", "isCorrectAnswer": true},
                {"answer": "To ensure optimum utilization of resources", "isCorrectAnswer": false}
            ]
        }
    ]
}

export default ComputerQuestions;