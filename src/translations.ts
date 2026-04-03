export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      experience: 'Experience',
      testimonials: 'Testimonials',
      contact: 'Contact',
      hireMe: 'Hire Me',
      academic: "Academic & Master's",
    },
    academic: {
      hero: {
        badge: 'SCHOLARLY PURSUITS',
        title: 'Academic Journey & Research',
        subtitle: 'Exploring the intersection of advanced computation and human-centric design through rigorous academic inquiry.',
        backHome: 'BACK TO HOME',
      },
      postgrad: {
        title: 'Postgraduate Studies',
        degree: {
          label: 'DEGREE',
          value: 'M.Sc. in Human-Computer Interaction',
          uni: 'Stanford University · 2021—2023',
        },
        focus: {
          label: 'FOCUS AREA',
          value: 'Adaptive Interface Systems',
          gpa: 'GPA: 4.0 / 4.0 · Dean\'s List',
        },
      },
      publications: {
        title: 'RESEARCH PUBLICATIONS',
        items: [
          {
            tag: 'CHI 2023 · Full Paper',
            title: 'The Obsidian Mesh: A New Protocol for Latency-Free Distributed Rendering',
            desc: 'This paper proposes a decentralized mesh architecture for handling massive visual datasets in real-time across high-latency networks. We evaluated the system across 500 nodes...',
          },
          {
            tag: 'ACM SIGGRAPH 2022',
            title: 'Emotional Resonance in Minimalist Glassmorphism',
            desc: 'An empirical study on how transparency levels and blur radii in digital interfaces affect user cognitive load and trust levels in financial applications.',
          },
        ],
      },
      thesis: {
        badge: "MASTER'S THESIS DISTINCTION",
        title: 'Neuro-Visual Synthesis in VR Habitats',
        desc: '"Examining the correlation between biometric feedback and dynamic lighting shifts in virtual coworking environments."',
        grade: '98/100',
        gradeLabel: 'GRADE',
        rank: 'Top 1%',
        rankLabel: 'CLASS RANK',
      },
      teaching: {
        badge: 'EDUCATIONAL IMPACT',
        title: 'Teaching Portfolio',
        subtitle: 'Mentoring the next generation of researchers through hands-on labs and theoretical foundations.',
        courses: [
          {
            title: 'CS402: Adv. UI Systems',
            uni: 'STANFORD UNIVERSITY · 2022—23',
            items: ['Shader Programming', 'Accessibility Standards', 'Interaction Physics'],
          },
          {
            title: 'HCI Foundations',
            uni: 'MIT OPENCOURSEWARE · 2021',
            items: ['User Persona Research', 'Prototyping Workflows', 'Cognitive Load Theory'],
          },
        ],
        testimonial: {
          quote: '"One of the few instructors who bridge the gap between heavy academic theory and actual industry production standards."',
          author: 'Liam H. Chen',
          role: 'LEAD GRAD STUDENT \'23',
        },
      },
      achievements: {
        title: 'COMPETITIVE ACHIEVEMENTS',
        items: [
          { title: 'Global Hackathon', value: '1st Place', year: '2023' },
          { title: 'ACM Fellowship', value: 'Recipient', year: '2022' },
          { title: 'NASA Space Apps', value: 'Top 5 Finalist', year: '2021' },
          { title: 'Innovation Award', value: 'Grand Prix', year: '2020' },
        ],
      },
      speaking: {
        title: 'CONFERENCES & SPEAKING',
        items: [
          {
            tag: 'WEBSUMMIT 2023',
            title: 'The Ethics of AI in Design',
            desc: 'Keynote Speaker · Lisbon, Portugal',
            image: 'https://picsum.photos/seed/speak1/400/250',
          },
          {
            tag: 'UX LONDON 2022',
            title: 'Prototyping Motion Fluids',
            desc: 'Masterclass Lead · London, UK',
            image: 'https://picsum.photos/seed/speak2/400/250',
          },
          {
            tag: 'AWWWARDS CONF',
            title: 'Future of Spatial UI',
            desc: 'Panelist · Amsterdam',
            image: 'https://picsum.photos/seed/speak3/400/250',
          },
        ],
      },
      skills: {
        research: {
          title: 'Academic Research',
          items: ['Quantitative Analysis', 'Ethnographic Study', 'Eye-Tracking (Tobii)', 'Academic Writing', 'Statistical Modeling (R/SPSS)', 'Grant Writing'],
        },
        pedagogy: {
          title: 'Pedagogy & Teaching',
          items: ['Curriculum Design', 'Public Speaking', 'Workshop Facilitation', 'Student Mentorship', 'Learning Management Systems', 'Digital Instruction'],
        },
      },
    },
    hero: {
      badge: 'AVAILABLE FOR PROJECTS',
      title: 'Crafting Digital Haute Couture.',
      subtitle: 'Senior Full-Stack Architect specializing in high-end editorial interfaces and performant cloud ecosystems.',
      viewPortfolio: 'View Portfolio',
      theProcess: 'The Process',
    },
    philosophy: {
      title: 'The Philosophy',
      description1: "Design is not just what it looks like; it's how it feels in the hand. I approach every line of code as a stitch in a bespoke garment—intentional, durable, and precise.",
      description2: "With over 8 years in the industry, I have bridged the gap between raw technical infrastructure and pixel-perfect aesthetics for global brands.",
      architecture: {
        title: 'Architecture',
        desc: 'Scalable, modular systems built to evolve.',
      },
      curation: {
        title: 'Curation',
        desc: 'Visual storytelling that commands attention.',
      },
      coreArsenal: 'CORE ARSENAL',
    },
    portfolio: {
      badge: 'SELECTED WORKS',
      title: 'The Portfolio',
      subtitle: 'A collection of experiments, case studies, and digital flagship stores.',
      viewCase: 'CASE STUDY',
      liveDemo: 'LIVE DEMO',
      github: 'GITHUB',
    },
    experience: {
      title: 'Curated Experience',
      present: 'PRESENT',
      roles: [
        {
          title: 'Principal Architect',
          company: 'AETHER DIGITAL',
          period: '2021 — PRESENT',
          desc: 'Leading design system migration and micro-frontend orchestration for Fortune 500 fintech clients.',
        },
        {
          title: 'Senior UI Designer',
          company: 'VORTEX LABS',
          period: '2018 — 2021',
          desc: 'Pioneered a design-to-code workflow reducing production hand-off time by 45%.',
        },
        {
          title: 'Full Stack Developer',
          company: 'LAUNCHPAD STUDIOS',
          period: '2016 — 2018',
          desc: 'Full-cycle development of 15+ high-growth startup MVPs using React and Node.js.',
        },
      ],
    },
    contact: {
      title: 'Start a Conversation',
      subtitle: "Currently accepting select high-impact projects for Q3/Q4. Let's build something enduring.",
      name: 'NAME',
      email: 'EMAIL',
      projectVision: 'PROJECT VISION',
      send: 'SEND INQUIRY',
      location: 'Global / Remote',
    },
    footer: {
      rights: '© 2024 OBSIDIAN GALLERY. DIGITAL HAUTE COUTURE.',
    },
  },
  ar: {
    nav: {
      work: 'العمل',
      about: 'عني',
      experience: 'الخبرة',
      testimonials: 'التوصيات',
      contact: 'اتصل بنا',
      hireMe: 'وظفني',
      academic: 'الدراسات الأكاديمية والماجستير',
    },
    academic: {
      hero: {
        badge: 'المساعي العلمية',
        title: 'الرحلة الأكاديمية والبحثية',
        subtitle: 'استكشاف تقاطع الحوسبة المتقدمة والتصميم المتمحور حول الإنسان من خلال البحث الأكاديمي الصارم.',
        backHome: 'العودة للرئيسية',
      },
      postgrad: {
        title: 'الدراسات العليا',
        degree: {
          label: 'الدرجة العلمية',
          value: 'ماجستير العلوم في التفاعل بين الإنسان والحاسوب',
          uni: 'جامعة ستانفورد · 2021—2023',
        },
        focus: {
          label: 'مجال التركيز',
          value: 'أنظمة الواجهة التكيفية',
          gpa: 'المعدل: 4.0 / 4.0 · قائمة العميد',
        },
      },
      publications: {
        title: 'الأبحاث المنشورة',
        items: [
          {
            tag: 'CHI 2023 · ورقة بحثية كاملة',
            title: 'The Obsidian Mesh: بروتوكول جديد للرندرة الموزعة خالية من التأخير',
            desc: 'تقترح هذه الورقة بنية شبكية لامركزية للتعامل مع مجموعات البيانات المرئية الضخمة في الوقت الفعلي عبر شبكات ذات زمن انتقال عالٍ. قمنا بتقييم النظام عبر 500 عقدة...',
          },
          {
            tag: 'ACM SIGGRAPH 2022',
            title: 'الرنين العاطفي في بساطة تصميم "Glassmorphism"',
            desc: 'دراسة تجريبية حول كيفية تأثير مستويات الشفافية ونصف قطر الضبابية في الواجهات الرقمية على العبء المعرفي للمستخدم ومستويات الثقة في التطبيقات المالية.',
          },
        ],
      },
      thesis: {
        badge: "تميز أطروحة الماجستير",
        title: 'التخليق العصبي البصري في بيئات الواقع الافتراضي',
        desc: '"فحص الارتباط بين التعليقات الحيوية وتحولات الإضاءة الديناميكية في بيئات العمل المشتركة الافتراضية."',
        grade: '98/100',
        gradeLabel: 'الدرجة',
        rank: 'أعلى 1%',
        rankLabel: 'ترتيب الدفعة',
      },
      teaching: {
        badge: 'الأثر التعليمي',
        title: 'سجل التدريس',
        subtitle: 'توجيه الجيل القادم من الباحثين من خلال المختبرات العملية والأسس النظرية.',
        courses: [
          {
            title: 'CS402: أنظمة واجهة المستخدم المتقدمة',
            uni: 'جامعة ستانفورد · 2022—23',
            items: ['برمجة المظللات (Shader Programming)', 'معايير سهولة الوصول', 'فيزياء التفاعل'],
          },
          {
            title: 'أسس التفاعل بين الإنسان والحاسوب (HCI)',
            uni: 'MIT OPENCOURSEWARE · 2021',
            items: ['بحث شخصيات المستخدمين', 'سير عمل النماذج الأولية', 'نظرية العبء المعرفي'],
          },
        ],
        testimonial: {
          quote: '"أحد المدرسين القلائل الذين يسدون الفجوة بين النظرية الأكاديمية الثقيلة ومعايير الإنتاج الصناعي الفعلية."',
          author: 'ليام هـ. تشين',
          role: 'طالب دراسات عليا 23\'',
        },
      },
      achievements: {
        title: 'الإنجازات والجوائز التنافسية',
        items: [
          { title: 'الهاكاثون العالمي', value: 'المركز الأول', year: '2023' },
          { title: 'زمالة ACM', value: 'حاصل عليها', year: '2022' },
          { title: 'تطبيقات ناسا للفضاء', value: 'أفضل 5 مرشحين', year: '2021' },
          { title: 'جائزة الابتكار', value: 'الجائزة الكبرى', year: '2020' },
        ],
      },
      speaking: {
        title: 'المؤتمرات وورش العمل',
        items: [
          {
            tag: 'WEBSUMMIT 2023',
            title: 'أخلاقيات الذكاء الاصطناعي في التصميم',
            desc: 'متحدث رئيسي · لشبونة، البرتغال',
            image: 'https://picsum.photos/seed/speak1/400/250',
          },
          {
            tag: 'UX LONDON 2022',
            title: 'النماذج الأولية لسوائل الحركة',
            desc: 'مدير ماستر كلاس · لندن، المملكة المتحدة',
            image: 'https://picsum.photos/seed/speak2/400/250',
          },
          {
            tag: 'AWWWARDS CONF',
            title: 'مستقبل واجهة المستخدم المكانية',
            desc: 'عضو لجنة مناقشة · أمستردام',
            image: 'https://picsum.photos/seed/speak3/400/250',
          },
        ],
      },
      skills: {
        research: {
          title: 'البحث الأكاديمي',
          items: ['التحليل الكمي', 'الدراسة الإثنوغرافية', 'تتبع العين (Tobii)', 'الكتابة الأكاديمية', 'النمذجة الإحصائية (R/SPSS)', 'كتابة المنح البحثية'],
        },
        pedagogy: {
          title: 'البيداغوجيا والتدريس',
          items: ['تصميم المناهج الدراسية', 'التحدث أمام الجمهور', 'تيسير ورش العمل', 'إرشاد الطلاب', 'أنظمة إدارة التعلم', 'التعليم الرقمي'],
        },
      },
    },
    hero: {
      badge: 'متاح للمشاريع',
      title: 'صناعة الأزياء الرقمية الراقية.',
      subtitle: 'مهندس برمجيات خبير متخصص في الواجهات عالية الجودة والأنظمة السحابية عالية الأداء.',
      viewPortfolio: 'عرض المحفظة',
      theProcess: 'العملية',
    },
    philosophy: {
      title: 'الفلسفة',
      description1: "التصميم ليس فقط ما تراه أو تشعر به، بل هو كيف تعمل الأشياء بدقة. أتعامل مع كل سطر برمجي كغرزة في قطعة ملابس مفصلة—مقصودة، متينة ودقيقة.",
      description2: "مع أكثر من 8 سنوات في الصناعة، قمت بسد الفجوة بين البنية التحتية التقنية الخام والجماليات المثالية للبكسل للعلامات التجارية العالمية.",
      architecture: {
        title: 'المعمارية',
        desc: 'أنظمة معيارية قابلة للتوسع ومصممة للتطور.',
      },
      curation: {
        title: 'التقييم',
        desc: 'سرد قصصي بصري يستحوذ على الانتباه.',
      },
      coreArsenal: 'الترسانة الأساسية',
    },
    portfolio: {
      badge: 'أعمال مختارة',
      title: 'المعرض',
      subtitle: 'مجموعة من التجارب، ودراسات الحالة والمتاجر الرقمية الرائدة.',
      viewCase: 'دراسة حالة',
      liveDemo: 'تجربة مباشرة',
      github: 'جيت هاب',
    },
    experience: {
      title: 'الخبرة المنسقة',
      present: 'الآن',
      roles: [
        {
          title: 'مهندس برمجيات رئيسي',
          company: 'AETHER DIGITAL',
          period: '2021 — الآن',
          desc: 'قيادة ترحيل نظام التصميم وتنظيم الواجهات المصغرة لعملاء التكنولوجيا المالية في قائمة Fortune 500.',
        },
        {
          title: 'مصمم واجهات أقدم',
          company: 'VORTEX LABS',
          period: '2018 — 2021',
          desc: 'ابتكار سير عمل من التصميم إلى الكود مما قلل من وقت تسليم الإنتاج بنسبة 45%.',
        },
        {
          title: 'مطور ويب شامل',
          company: 'LAUNCHPAD STUDIOS',
          period: '2016 — 2018',
          desc: 'تطوير شامل لأكثر من 15 نموذجاً أولياً لشركات ناشئة عالية النمو باستخدام React و Node.js.',
        },
      ],
    },
    contact: {
      title: 'ابدأ محادثة',
      subtitle: "أقبل حالياً مشاريع مختارة عالية التأثير للربع الثالث والرابع. دعنا نبني شيئاً باقياً.",
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      projectVision: 'رؤية المشروع',
      send: 'إرسال الاستفسار',
      location: 'عالمي / عن بعد',
    },
    footer: {
      rights: '© 2024 معرض أوبسيديان. صناعة الأزياء الرقمية الراقية.',
    },
  },
};
