// This service would handle API calls in a real application
// For now, we'll return mock data

export const fetchLessons = async () => {
    // This would be an API call in a real application
    // return await fetch('/api/lessons').then(res => res.json());
    
    // Mock data for development
    const sampleLessons = [
      {
        id: "1",
        title: "المحاضرة الأولى تركيب التربة و أهميتها",
        description: "شرح مفصل عن تركيب التربة وأهميتها للنباتات والبيئة",
        videoUrl: "https://example.com/video1",
        pdfUrl: "https://example.com/pdf1",
        isFree: true,
        createdAt: "2025-03-15T18:09:21.114Z"
      },
      {
        id: "2",
        title: "المحاضرة الثانية تأثير الممارسات البشرية",
        description: "تأثير الممارسات البشرية على التربة والبيئة المحيطة",
        videoUrl: "https://example.com/video2",
        pdfUrl: "https://example.com/pdf2",
        isFree: false,
        createdAt: "2025-03-16T18:09:21.114Z"
      }
    ];
    
    return Promise.resolve(sampleLessons);
  };
  
  export const createLesson = async (lessonData) => {
    // This would be an API call in a real application
    // return await fetch('/api/lessons', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(lessonData)
    // }).then(res => res.json());
    
    // Mock implementation
    return Promise.resolve({
      ...lessonData,
      id: Date.now().toString(),
    });
  };
  
  export const updateLesson = async (id, lessonData) => {
    // This would be an API call in a real application
    // return await fetch(`/api/lessons/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(lessonData)
    // }).then(res => res.json());
    
    // Mock implementation
    return Promise.resolve({
      ...lessonData,
      id,
    });
  };
  
  export const deleteLesson = async (id) => {
    // This would be an API call in a real application
    // return await fetch(`/api/lessons/${id}`, {
    //   method: 'DELETE'
    // }).then(res => res.json());
    
    // Mock implementation
    return Promise.resolve({ success: true, id });
  };