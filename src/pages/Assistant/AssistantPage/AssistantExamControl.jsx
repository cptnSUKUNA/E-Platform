import  { useState, useEffect } from "react";

export default function AssistantExamControl() {
  const [questions, setQuestions] = useState([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  
  const [questionData, setQuestionData] = useState({
    id: "",
    questionDescription: "",
    answer: "",
    choices: [
      { id: "choice1", choice: "" },
      { id: "choice2", choice: "" },
      { id: "choice3", choice: "" },
      { id: "choice4", choice: "" }
    ]
  });

  // Sample data - replace with actual API call
  useEffect(() => {
    // Simulating fetching questions from API
    const sampleQuestions = [
      {
        id: "1",
        questionDescription: "ما هي التربة الأكثر خصوبة للزراعة؟",
        answer: "التربة الطينية",
        choices: [
          { id: "c1", choice: "التربة الرملية" },
          { id: "c2", choice: "التربة الطينية" },
          { id: "c3", choice: "التربة الصخرية" },
          { id: "c4", choice: "التربة الجيرية" }
        ]
      },
      {
        id: "2",
        questionDescription: "ما هو تأثير الأمطار الحمضية على التربة؟",
        answer: "تقليل خصوبة التربة",
        choices: [
          { id: "c1", choice: "زيادة خصوبة التربة" },
          { id: "c2", choice: "لا تأثير" },
          { id: "c3", choice: "تقليل خصوبة التربة" },
          { id: "c4", choice: "زيادة قلوية التربة" }
        ]
      }
    ];
    setQuestions(sampleQuestions);
  }, []);

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({
      ...questionData,
      [name]: value
    });
  };

  const handleChoiceChange = (choiceId, value) => {
    const updatedChoices = questionData.choices.map(choice => 
      choice.id === choiceId ? { ...choice, choice: value } : choice
    );
    
    setQuestionData({
      ...questionData,
      choices: updatedChoices
    });
  };

  const handleAddChoice = () => {
    if (questionData.choices.length < 6) {
      const newChoice = {
        id: `choice${questionData.choices.length + 1}`,
        choice: ""
      };
      
      setQuestionData({
        ...questionData,
        choices: [...questionData.choices, newChoice]
      });
    }
  };

  const handleRemoveChoice = (choiceId) => {
    if (questionData.choices.length > 2) {
      const filteredChoices = questionData.choices.filter(choice => choice.id !== choiceId);
      
      setQuestionData({
        ...questionData,
        choices: filteredChoices
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that answer is one of the choices
    const answerExists = questionData.choices.some(choice => choice.choice === questionData.answer);
    
    if (!answerExists) {
      alert("يجب أن تكون الإجابة الصحيحة من ضمن الخيارات المتاحة");
      return;
    }
    
    if (isEditing && currentQuestion) {
      // Update existing question
      const updatedQuestions = questions.map(question => 
        question.id === currentQuestion.id ? { ...questionData, id: currentQuestion.id } : question
      );
      setQuestions(updatedQuestions);
      console.log("Question updated:", questionData);
    } else {
      // Add new question
      const newQuestion = {
        ...questionData,
        id: Date.now().toString() // Simple ID generation
      };
      setQuestions([...questions, newQuestion]);
      console.log("New question added:", newQuestion);
    }
    
    // Reset form and state
    resetForm();
  };

  const handleEdit = (question) => {
    setCurrentQuestion(question);
    setQuestionData({
      id: question.id,
      questionDescription: question.questionDescription,
      answer: question.answer,
      choices: question.choices
    });
    setIsEditing(true);
    setShowQuestionForm(true);
  };

  const handleDelete = (question) => {
    setQuestionToDelete(question);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    const updatedQuestions = questions.filter(question => question.id !== questionToDelete.id);
    setQuestions(updatedQuestions);
    console.log("Question deleted:", questionToDelete);
    setShowDeleteConfirmation(false);
    setQuestionToDelete(null);
  };

  const resetForm = () => {
    setQuestionData({
      id: "",
      questionDescription: "",
      answer: "",
      choices: [
        { id: "choice1", choice: "" },
        { id: "choice2", choice: "" },
        { id: "choice3", choice: "" },
        { id: "choice4", choice: "" }
      ]
    });
    setIsEditing(false);
    setCurrentQuestion(null);
    setShowQuestionForm(false);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-secondaryColor p-8 rounded-2xl text-white">
        <h1 className="text-[36px] text-center font-bold font-[Marhey] mb-6">
          إدارة الاختبارات
        </h1>
        
        {/* Admin Controls */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => {
              resetForm();
              setShowQuestionForm(true);
            }} 
            className="bg-mainColor font-[500] px-6 py-3 rounded-2xl text-[20px] font-[Marhey] text-white hover:bg-opacity-80 transition-all"
          >
            إضافة سؤال جديد
          </button>
        </div>
        
        {/* Questions List */}
        <div className="bg-white rounded-xl p-6 text-gray-800">
          <h2 className="text-[24px] font-bold font-[Marhey] text-secondaryColor mb-6 text-center">
            أسئلة الاختبار
          </h2>
          
          {questions.length > 0 ? (
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={question.id} className="bg-gray-50 rounded-xl p-4 shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">سؤال {index + 1}</h3>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(question)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition-all text-sm"
                      >
                        تعديل
                      </button>
                      <button 
                        onClick={() => handleDelete(question)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all text-sm"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-4">{question.questionDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    {question.choices.map((choice) => (
                      <div 
                        key={choice.id} 
                        className={`p-3 rounded-lg border ${choice.choice === question.answer ? 'bg-green-100 border-green-500' : 'bg-gray-100 border-gray-300'}`}
                      >
                        {choice.choice}
                        {choice.choice === question.answer && (
                          <span className="mr-2 text-green-600 text-sm">(الإجابة الصحيحة)</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-gray-500 text-lg">لا توجد أسئلة حاليًا</p>
          )}
        </div>
      </div>

      {/* Question Form Modal */}
      {showQuestionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h4 className="text-[24px] text-center font-bold font-[Marhey] text-secondaryColor mb-6">
              {isEditing ? 'تعديل السؤال' : 'إضافة سؤال جديد'}
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">نص السؤال</label>
                <textarea
                  name="questionDescription"
                  value={questionData.questionDescription}
                  onChange={handleQuestionChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="3"
                  required
                ></textarea>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-semibold">الخيارات</label>
                  {questionData.choices.length < 6 && (
                    <button
                      type="button"
                      onClick={handleAddChoice}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                    >
                      إضافة خيار
                    </button>
                  )}
                </div>
                
                <div className="space-y-4">
                  {questionData.choices.map((choice) => (
                    <div key={choice.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={choice.choice}
                        onChange={(e) => handleChoiceChange(choice.id, e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-lg"
                        placeholder="أدخل الخيار"
                        required
                      />
                      
                      <button
                        type="button"
                        onClick={() => {
                          if (questionData.answer === choice.choice) {
                            setQuestionData({
                              ...questionData,
                              answer: choice.choice
                            });
                          }
                        }}
                        className={`px-3 py-2 rounded ${questionData.answer === choice.choice 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-700'}`}
                      >
                        صحيح
                      </button>
                      
                      {questionData.choices.length > 2 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveChoice(choice.id)}
                          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-mainColor text-white py-3 px-4 rounded-lg hover:bg-opacity-80 transition-all w-1/2 font-[Marhey] text-lg"
                >
                  {isEditing ? 'حفظ التعديلات' : 'إضافة السؤال'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-opacity-80 transition-all w-1/2 font-[Marhey] text-lg"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full">
            <h4 className="text-[24px] text-center font-bold font-[Marhey] text-red-600 mb-4">
              تأكيد الحذف
            </h4>
            <p className="text-center mb-6">
              هل أنت متأكد من حذف هذا السؤال؟
              <br />
              <span className="font-bold">"{questionToDelete?.questionDescription.substring(0, 50)}..."</span>
              <br />
              لا يمكن التراجع عن هذه العملية.
            </p>
            <div className="flex gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all w-1/2"
              >
                نعم، حذف
              </button>
              <button
                onClick={() => {
                  setShowDeleteConfirmation(false);
                  setQuestionToDelete(null);
                }}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all w-1/2"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}