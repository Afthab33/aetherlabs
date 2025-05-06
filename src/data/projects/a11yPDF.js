export const a11yPDFProject = {
  id: 'a11y-pdf',
  title: 'Accessibility for PDF',
  slug: 'accessibility-for-pdf',
  categories: ['A11Y', 'Web Application'],
  subcategories: ['Accessibility Tools'],
  thumbnail: '/projects/a11y-pdf/thumbnail.png',
  description: 'A free tool that can effectively evaluate the accessibility of PDFs and provide users with practical reports to help authors make their content more accessible.',
  // Add links to GitHub repo and live demo
  links: {
    github: 'https://github.com/wajdialjedaani/A11yPDF',
    demo: 'https://a11y-pdf.aetherlabs.io'
  },
  authors: [
    { 
      name: 'Wajdi Aljeddani', 
      avatar: '/authors/wajdi.jpg',
      role: 'Team Lead'
    },
    { 
      name: 'Akhila Chintham', 
      avatar: '/authors/akhilachintham.jpeg',
      role: 'Developer'
    },
    { 
      name: 'Sandeep Kumar Rudhravaraj', 
      avatar: '/authors/sandeep.jpeg',
      role: 'Developer'
    },
    { 
      name: 'Prakash Mariappan', 
      avatar: '/authors/prakashmariappan.jpg',
      role: 'Developer'
    }
  ],
  media: {
    images: [
      {
        src: '/projects/a11y-pdf/image1.png',
        alt: 'A11yPDF Dashboard',
        caption: 'Dashboard view of the A11yPDF application'
      },
      {
        src: '/projects/a11y-pdf/image2.png',
        alt: 'Accessibility Recommendations',
        caption: 'Detailed accessibility recommendations'
      },
      {
        src: '/projects/a11y-pdf/image3.png',
        alt: 'Overall Score',
        caption: 'Accessibility evaluation score overview'
      },
      {
        src: '/projects/a11y-pdf/image4.png',
        alt: 'Statistical Analysis',
        caption: 'Statistical analysis of accessibility metrics'
      }
    ],
    videos: [
      {
        embedUrl: 'https://www.youtube.com/embed/QMz1Gp6Clv8',
        title: 'A11yPDF Demo',
        caption: 'Overview and demonstration of the A11yPDF tool'
      }
    ]
  },
  content: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Portable Document Format PDF files are platform independent thus they are commonly used for sharing documents that need to be viewed or printed exactly as intended by the author. As any other content format, they can present accessibility issues that hinder people with disabilities to fully perceive or understand the information provided.',
        'There are many accessibility evaluation tools for PDF files that can help content creators to make them more accessible, but they have some limitations: lack of evaluation of certain elements of the document, cost-prohibitive paid licenses, and complex usage and reports.',
        'In this context, this paper presents A11yPDF, a free tool that can effectively evaluate the accessibility of PDFs and provide users with practical reports to help authors to make their content more accessible.'
      ]
    },
    {
      title: 'Key Features',
      list: [
        'Platform-independent accessibility evaluation',
        'Comprehensive assessment of PDF structure and content',
        'Detailed recommendations for improving accessibility',
        'Visual representation of accessibility metrics',
        'Free and open-source access',
        'User-friendly interface with minimal learning curve'
      ]
    },
    {
      title: 'Technical Implementation',
      paragraphs: [
        'A11yPDF is built using a modern web application stack to ensure broad compatibility and ease of use. The frontend is developed with React, utilizing advanced accessibility-first components to ensure that the tool itself is fully accessible to all users.',
        'The backend processing leverages specialized PDF parsing libraries that can analyze document structure, text properties, image alternatives, form field attributes, and other key accessibility factors defined in the PDF/UA (Universal Accessibility) standard and WCAG 2.1 guidelines.',
        'Analysis results are processed through a comprehensive evaluation algorithm that identifies issues, suggests fixes, and calculates an overall accessibility score that helps authors track their progress as they implement improvements.'
      ]
    }
  ]
};