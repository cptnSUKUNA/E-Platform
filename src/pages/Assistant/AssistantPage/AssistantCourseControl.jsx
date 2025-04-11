import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetails from "../../courseDetails/CourseDetails";
import AdminControls from "../Component/AdminControl";
import LessonsList from "../Component/LessonList";
import LessonFormModal from "../Component/LessonFormModal";
import DeleteConfirmationModal from "../Component/DeleteConfirmationModal";
import { fetchLessons } from "../Component/LessonServices";

export default function AssistantCourseControl() {
  const [showLessonForm, setShowLessonForm] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState(null);
  const navigate = useNavigate();
  
  const [lessonData, setLessonData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    pdfUrl: "",
    isFree: false,
    createdAt: new Date().toISOString()
  });

  useEffect(() => {
    // Load lessons when component mounts
    const loadLessons = async () => {
      const data = await fetchLessons();
      setLessons(data);
    };
    
    loadLessons();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLessonData({
      ...lessonData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing && currentLesson) {
      // Update existing lesson
      const updatedLessons = lessons.map(lesson => 
        lesson.id === currentLesson.id ? { ...lessonData, id: currentLesson.id } : lesson
      );
      setLessons(updatedLessons);
      console.log("Lesson updated:", lessonData);
    } else {
      // Add new lesson
      const newLesson = {
        ...lessonData,
        id: Date.now().toString(), // Simple ID generation
        createdAt: new Date().toISOString()
      };
      setLessons([...lessons, newLesson]);
      console.log("New lesson added:", newLesson);
    }
    
    // Reset form and state
    resetForm();
  };

  const handleEdit = (lesson) => {
    setCurrentLesson(lesson);
    setLessonData({
      title: lesson.title,
      description: lesson.description,
      videoUrl: lesson.videoUrl,
      pdfUrl: lesson.pdfUrl,
      isFree: lesson.isFree,
      createdAt: lesson.createdAt
    });
    setIsEditing(true);
    setShowLessonForm(true);
  };

  const handleDelete = (lesson) => {
    setLessonToDelete(lesson);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    const updatedLessons = lessons.filter(lesson => lesson.id !== lessonToDelete.id);
    setLessons(updatedLessons);
    console.log("Lesson deleted:", lessonToDelete);
    setShowDeleteConfirmation(false);
    setLessonToDelete(null);
  };

  const resetForm = () => {
    setLessonData({
      title: "",
      description: "",
      videoUrl: "",
      pdfUrl: "",
      isFree: false,
      createdAt: new Date().toISOString()
    });
    setIsEditing(false);
    setCurrentLesson(null);
    setShowLessonForm(false);
  };

  const redirectToExam = () => {
    navigate("/assistant/exams/1");
  };

  return (
    <div className="container">
      <AdminControls 
        onAddLesson={() => {
          resetForm();
          setShowLessonForm(true);
        }}
        onRedirectToExam={redirectToExam} 
      />

      <LessonsList 
        lessons={lessons}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showLessonForm && (
        <LessonFormModal
          lessonData={lessonData}
          isEditing={isEditing}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={resetForm}
        />
      )}

      {showDeleteConfirmation && (
        <DeleteConfirmationModal
          lesson={lessonToDelete}
          onConfirm={confirmDelete}
          onCancel={() => {
            setShowDeleteConfirmation(false);
            setLessonToDelete(null);
          }}
        />
      )}

      <CourseDetails />
    </div>
  );
}