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
