export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      projects: 'الأعمال',
      academic: 'الشهادات',
      about: 'عني',
      contact: 'تواصل',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'عبد الرحمن عمرو',
      title: 'متخصص في وكلاء الذكاء الاصطناعي وتدريب النماذج',
      subtitle:
        'أبني وكلاء ذكاء اصطناعي أذكياء وأنظمة وكلاء متعددة | متخصص في السحابة والبنية التحتية | متخصص في إعادة تدريب النماذج وبيانات اللغة العربية',
      cta: 'تواصل معي',
    },
    services: {
      title: 'خدماتي',
      subtitle: 'حلول متكاملة للوكلاء والبنية التحتية وتدريب النماذج',
      items: {
        agents: {
          title: 'تطوير حلول الذكاء الاصطناعي والوكلاء المتعددين',
          description:
            'تصميم أنظمة وكلاء منفردة ومتعددة لأتمتة العمليات، وتنفيذ أنظمة RAG للاسترجاع الذكي للمستندات وإدارة المعرفة المؤسسية.',
        },
        servers: {
          title: 'إدارة الخوادم والبنية التحتية Ubuntu',
          description:
            'إعداد خوادم Ubuntu وتحصينها وتحسينها لاستضافة نماذج الذكاء الاصطناعي وسير عمل الأتمتة بسلاسة.',
        },
        training: {
          title: 'تدريب النماذج وإعادة تدريبها ومعالجة البيانات العربية',
          description:
            'إعادة تدريب نماذج الذكاء الاصطناعي وضبطها ثم تقييم مخرجاتها، وتعليق مجموعات بيانات عربية متخصصة عالية الجودة، مع تخصص في الخط العربي ومعالجة النصوص.',
        },
      },
    },
    projects: {
      title: 'أعمالي',
      subtitle: 'وكلاء وأنظمة ذكية بنيتها',
      items: {
        argus: {
          title: 'Argus AI',
          description:
            'وكيل عام يستطيع التحكم في الكمبيوتر والبحث عبر الويب وإنشاء الملفات بصيغ مختلفة.',
        },
        vira: {
          title: 'Vira AI',
          description:
            'وكيل إداري متخصص في العقارات، يتولى كامل الأعمال العقارية الإدارية من الحجز إلى التقارير.',
        },
        yaqut: {
          title: 'Yaqut AI',
          description:
            'وكيل متعدد الوكلاء متخصص في الخط العربي: التعليم والتصحيح والنقد الفني والبحث العلمي الأكاديمي.',
        },
        stok: {
          title: 'Stok AI',
          description:
            'بوت واتساب عربي ذكي يتابع المخزون ويقدم تقارير المبيعات والأرباح والنقص لحظياً.',
        },
        nlp: {
          title: 'NLP AI',
          description:
            'تطبيق سطح مكتب يستقبل النص بنافذة سياق تبلغ 250,000 حرف، لتنظيف النصوص العربية ومعالجتها وتقطيعها، صُنع ليقدم لطلاب معالجة اللغة تعلماً عملياً.',
        },
        pharm: {
          title: 'Pharm AI',
          description:
            'مساعد صيدلي يراقب المبيعات وحركة المخزون ويقدم تقارير دورية، مدعوم بقاعدة بيانات واسعة للأدوية وموادها واستخداماتها.',
        },
      },
    },
    academic: {
      title: 'الشهادات والشارات المهنية',
      subtitle: 'شارات معتمدة',
      description:
        '8 شارات مهارية معتمدة من Google Cloud، و12 شارة موثقة من Microsoft Azure متخصصة في وكلاء AI ومعمارية الوكلاء المتعددين، و3 شهادات من Amazon AWS، إضافة إلى شهادة Azure AI Foundry في تحليل النصوص وتطبيقات معالجة اللغة الطبيعية، وتدريب معتمد في أساسيات الأمن السيبراني والاختراق الأخلاقي.',
      stats: {
        google: 'شارات Google Cloud',
        microsoft: 'شارات Microsoft Azure',
        aws: 'شهادات Amazon AWS',
      },
    },
    about: {
      title: 'من أنا',
      subtitle: 'بناء وكلاء ذكاء اصطناعي يعملون في الواقع',
      description1:
        'أنا متخصص في الذكاء الاصطناعي، أجتهد في بناء حلول ذكية قابلة للتوسع، وتركيزي الأساسي على وكلاء الذكاء الاصطناعي وأنظمة الوكلاء المتعددة. تمتد خبرتي إلى أنظمة RAG، وتكامل API، وإعداد بيئات Ubuntu Server لتشغيل أعباء عمل الذكاء الاصطناعي ونشرها.',
      description2:
        'إلى جانب معمارية الأنظمة، أعمل على إعادة تدريب النماذج الذكية وضبطها، وأستكمل ذلك بتخصصي في البيانات العربية، مع تركيز خاص على تحسين معالجة اللغة العربية وإثراء مجموعات بيانات الخط والنصوص العربية.',
      mission: 'المهمة',
      vision: 'الرؤية',
      missionText:
        'بناء وكلاء ذكاء اصطناعي وأنظمة ذكية تؤتمت العمليات وترفع كفاءة المؤسسات',
      visionText:
        'ذكاء اصطناعي يعمل بالعربية، مدعوم ببيانات عالية الجودة ويخدم المستخدم العربي بصورة أصيلة',
    },
    footer: {
      title: 'تواصل معي',
      subtitle:
        'جاهز للتعاون في وكلاء الذكاء الاصطناعي وإعادة تدريب النماذج ومعالجة البيانات العربية',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        send: 'إرسال',
        sending: 'جارٍ الإرسال...',
        success: 'تم إرسال رسالتك بنجاح!',
        error: 'حدث خطأ أثناء الإرسال، حاول مرة أخرى أو تواصل معي عبر القنوات المباشرة.',
      },
      social: 'تابعني',
      rights: 'جميع الحقوق محفوظة',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      academic: 'Certificates',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Abd El Rahman Amr',
      title: 'AI Agents Specialist & AI Model Trainer',
      subtitle:
        'Building Intelligent AI Agents & Multi-Agent Systems | Cloud & Infrastructure Specialist | AI Model Trainer & Arabic Data Specialist',
      cta: 'Contact Me',
    },
    services: {
      title: 'My Services',
      subtitle: 'Integrated agents, infrastructure and model training solutions',
      items: {
        agents: {
          title: 'AI & Multi-Agent Development',
          description:
            'Architecting custom single and multi agent workflows to automate business processes, and implementing RAG systems for intelligent document retrieval and enterprise knowledge management.',
        },
        servers: {
          title: 'Server Administration & Infrastructure',
          description:
            'Setting up, hardening, and optimizing Ubuntu servers to host AI models and automation workflows smoothly.',
        },
        training: {
          title: 'AI Model Training & Arabic Data Processing',
          description:
            'Retraining and fine-tuning AI models, evaluating their outputs, and annotating specialized high quality Arabic datasets, with a specialty in Arabic calligraphy and text processing.',
        },
      },
    },
    projects: {
      title: 'My Work',
      subtitle: 'Agents and intelligent systems I have built',
      items: {
        argus: {
          title: 'Argus AI',
          description:
            'A general-purpose agent that can control the computer, search the web, and create files in different formats.',
        },
        vira: {
          title: 'Vira AI',
          description:
            'A real-estate focused administrative agent that handles the full scope of property administrative work, from bookings to reports.',
        },
        yaqut: {
          title: 'Yaqut AI',
          description:
            'A multi-agent system specialized in Arabic calligraphy: teaching, correction, artistic critique, and academic research.',
        },
        stok: {
          title: 'Stok AI',
          description:
            'A smart Arabic WhatsApp bot that tracks inventory and delivers real-time sales, profit, and shortage reports.',
        },
        nlp: {
          title: 'NLP AI',
          description:
            'A desktop app that ingests text with a 250,000-character context window to clean, process, and split Arabic text, built to give NLP students hands-on practice.',
        },
        pharm: {
          title: 'Pharm AI',
          description:
            'A pharmacist assistant monitoring sales and stock movement with periodic reports, backed by an extensive database of drugs, their materials, and uses.',
        },
      },
    },
    academic: {
      title: 'Certifications & Badges',
      subtitle: 'Certified credentials',
      description:
        '8 certified skill badges from Google Cloud, 12 verified badges from Microsoft Azure specializing in AI Agents and Multi-Agent Architecture, and 3 certifications from Amazon AWS, plus an Azure AI Foundry badge in Text Analysis and NLP applications, and certified training in cybersecurity fundamentals and ethical hacking.',
      stats: {
        google: 'Google Cloud Badges',
        microsoft: 'Microsoft Azure Badges',
        aws: 'AWS Certifications',
      },
    },
    about: {
      title: 'Who I Am',
      subtitle: 'Building AI agents that work in the real world',
      description1:
        'I am an AI Specialist dedicated to building intelligent, scalable solutions with a primary focus on AI Agents and Multi-Agent Architectures. My expertise spans Retrieval-Augmented Generation (RAG) systems, seamless API integration, and configuring robust Ubuntu Server environments for running and deploying AI workloads.',
      description2:
        'In addition to system architecture, I retrain and fine-tune AI models and evaluate their outputs, and I remain focused on refining Arabic NLP by enhancing datasets for Arabic calligraphy and text processing.',
      mission: 'Mission',
      vision: 'Vision',
      missionText:
        'Building intelligent AI agents and multi agent systems that automate operations and boost enterprise efficiency',
      visionText:
        'AI that works natively in Arabic, powered by high quality datasets',
    },
    footer: {
      title: 'Get in Touch',
      subtitle:
        'Ready to collaborate on AI agents, model retraining, and Arabic data solutions',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'Something went wrong while sending. Please try again or reach me through a direct channel.',
      },
      social: 'Follow Me',
      rights: 'All rights reserved',
    },
  },
};
