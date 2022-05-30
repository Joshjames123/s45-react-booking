//NOTE:

//this is for Login page
function authentication(e) {
		e.preventDefault();

		//set the email of the authenticated user in the localStorage
		//localStorage.serItem('propertyName', value)
		//serItem to store information in localStorage
		localStorage.setItem('email', email);

		//set the global user state to have properties obtained from the local storage
		setUser({
			email: localStorage.getItem('email')
		})

		//clear inputs
		setEmail('');
		setPassword('');

		Swal.fire({
			title: 'Yay!',
			icon: 'success',
			text: `${email} has been verified! Welcome!`
		})
	}


	//========================================== for CourserPage

	import CourseCard from '../components/CourseCard';
	import coursesData from '../mockData/coursesData'



	export default function CoursePage({}) {

		console.log(coursesData)

		console.log(coursesData[0])

		const courses = coursesData.map(individualCourse => {
			return(
				<CourseCard key={individualCourse.id} courseProp={individualCourse} />
				)
		})

		return(
			<>
				<h1>Courses</h1>
				{courses}
			</>

			)
	}
