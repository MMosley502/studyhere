import { useState } from "react";
import Studylist from "./Studylist";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Home = () => {

    const [showSpaces, setShowSpaces] = useState(true);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        setShowSpaces(true)
    } else {
        setShowSpaces(false)
    }
    });

  const spaces = [
    {id: 1, name: "Library", description: "Quiet", available: true},
    {id: 2, name: "Attic", description: "Dusty", available: false},
    {id: 3, name: "Classroom", description: "Warm", available: true},
    {id: 4, name: "Dining hall", description: "Busy", available: false},
    {id: 5, name: "Classroom 2", description: "Too hot", available: true},
    {id: 6, name: "Classroom3", description: "Haunted", available: true},
    {id: 7, name: "Basement", description: "Quiet", available: true},
    {id: 8, name: "Dining hall 2", description: "Messy", available: false},
    {id: 9, name: "Dorms", description: "Loud", available: true},
  ];
  return (
		<>
			<div className="flex justify-center pt-6">
				<a href='/signup'>
					<button className="bg-blue-700 text-white rounded-xl py-2 px-4 mr-4">Sign up</button>
				</a>

				<a href='/signin'>
					<button className="bg-blue-700 text-white rounded-xl py-2 px-4">Sign in</button>
				</a>

                <a href='/signout'>
					<button className="bg-blue-700 text-white rounded-xl py-2 px-4">Sign out</button>
				</a>
			</div>

            <h1>StudyHere</h1>

        {showSpaces && <Studylist spaces={spaces} />}
		</>
	);
}

export default Home