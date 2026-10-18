/* EDIT THIS FILE ONLY: every piece of text on the site comes from here. */
window.PORTFOLIO = {
  name: "Sanskar",
  role: "Python Backend Developer",
  tagline: "I build dependable Python backend features, REST APIs, and integrations with FastAPI, Redis, PostgreSQL, and Odoo.",
  email: "sanskarsijariya80@gmail.com",
  location: "Hyderabad, India",
  resume: "assets/Sanskar_Resume.pdf",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sanskar-sijariya-7544b2242" },
    { label: "GitHub", url: "https://github.com/DevSijariy" }
  ],
  about: [
    "I'm a Python backend developer who turns product requirements into reliable services, integrations, and APIs. I work across the backend lifecycle, from data modeling and implementation to documentation and delivery.",
    "My toolkit includes FastAPI, REST API design, Redis, PostgreSQL, and Odoo. I enjoy building clear, maintainable systems that connect smoothly with the tools and workflows people already use."
  ],
  facts: [
    ["Focus", "Python backend and API development"],
    ["Location", "Hyderabad, India"],
    ["Availability", "Open to freelance work"],
    ["Languages", "English, Hindi"]
  ],
  manifest: {
    name: "FastAPI Service", version: "v1", category: "Backend API",
    depends: ["FastAPI", "Redis", "PostgreSQL"], license: "Python", application: true
  },
  skills: [
    { group: "Backend", items: ["Python", "FastAPI", "REST API design", "PostgreSQL", "Redis"] },
    { group: "Backend patterns", items: ["API integrations", "Authentication", "Data modeling", "Caching", "Automation"] },
    { group: "Platforms", items: ["Odoo", "HR", "Attendance", "Manufacturing", "Inventory"] },
    { group: "Tools", items: ["Git", "Docker", "Linux", "JavaScript", "OWL"] }
  ],
  projects: [
    { title: "Saned - Hospital Management System", tags: ["Healthcare", "Odoo"], version: "Healthcare ERP | Saudi Arabia Client",
      text: "A customized Odoo hospital management solution supporting healthcare workflows, business operations, and integrations through tailored modules and backend functionality.",
      overview: "Saned is a hospital management project developed for a client in Saudi Arabia. The work involved customizing Odoo functionality, developing backend features, implementing custom workflows, integrating APIs, and maintaining the system to meet client requirements.",
      contributions: [
        "Developed and customized backend functionality for project-specific business requirements.",
        "Implemented business logic and workflows within the Odoo framework.",
        "Worked on REST API integrations between Odoo and external systems.",
        "Implemented scheduled operations using automated actions and cron jobs.",
        "Created and maintained QWeb reports for business documents.",
        "Used PostgreSQL and the Odoo ORM for data operations and backend logic.",
        "Resolved bugs, enhanced existing features, and supported deployments and ongoing maintenance."
      ], stack: ["Python", "Odoo", "PostgreSQL", "XML", "REST APIs"], link: "#", image: "" },
    { title: "Manufacturing Rework Management", tags: ["Manufacturing", "Odoo"], version: "Odoo 19 | MRP | Quality Control",
      text: "A custom Odoo module for managing products that fail quality inspection, with structured rework workflows integrated with manufacturing and inventory operations.",
      overview: "The module extends standard Odoo manufacturing functionality to support products that fail quality checks and need additional processing. It manages rework workflows and coordinates manufacturing and inventory operations to maintain production and stock consistency.",
      features: [
        "Handles products that fail quality inspections and tracks rework status.",
        "Connects rework workflows with Manufacturing Orders (MOs).",
        "Supports serial-tracked products and rework for individual units.",
        "Handles backorders and splitting quantities across manufacturing orders.",
        "Supports rework in two-step and three-step manufacturing and inventory routes.",
        "Connects rework processing with stock movements and material tracking."
      ],
      implementation: [
        ["Backend development", "Python models, business logic, Odoo ORM, and workflow implementation."],
        ["Manufacturing workflow customization", "Integration with MRP operations, manufacturing orders, and rework flows."],
        ["Inventory and traceability", "Stock operations, serial-tracked products, and multi-step inventory routes."],
        ["Testing and validation", "Validated rework scenarios involving serial-based production and backorders."]
      ], stack: ["Python", "Odoo ORM", "MRP", "Quality Control", "Stock Management", "XML"], link: "#", image: "" },
    { title: "WooCommerce Integration with Odoo", tags: ["E-commerce", "Integration"], version: "E-commerce Integration | REST API",
      text: "Connects WooCommerce store operations with Odoo ERP workflows, synchronizing e-commerce data with backend business processes.",
      overview: "The integration connects a WooCommerce online store with Odoo, helping businesses manage e-commerce operations alongside ERP processes. API communication and the Odoo ORM process and synchronize relevant data between the platforms.",
      features: [
        "Synchronizes product information between WooCommerce and Odoo.",
        "Fetches and processes e-commerce orders in Odoo.",
        "Manages customer information received from the online store.",
        "Connects WooCommerce REST API endpoints with Odoo backend logic.",
        "Processes synchronized information through Odoo business workflows.",
        "Uses Odoo ORM and PostgreSQL-backed records for integrated data."
      ],
      implementation: [
        ["REST API communication", "Connects WooCommerce endpoints with custom Odoo Python logic."],
        ["Data mapping and processing", "Maps external e-commerce data to relevant Odoo models and records."],
        ["Synchronization workflows", "Manages data exchange between the online store and ERP system."]
      ], stack: ["Odoo", "Python", "WooCommerce REST API", "PostgreSQL", "XML"], link: "#", image: "" },
    { title: "Salesforce Integration with Odoo", tags: ["CRM", "Integration"], version: "CRM Integration | ERP Automation",
      text: "An integration solution connecting Salesforce CRM with Odoo ERP to enable data exchange between customer relationship management and enterprise operations.",
      overview: "The project involved integrating Salesforce with Odoo to enable communication between CRM data and ERP workflows. API-based communication and custom backend logic process data between the two systems.",
      features: [
        "Connects Salesforce APIs with the Odoo backend.",
        "Facilitates exchange of relevant business records between Salesforce and Odoo.",
        "Processes API responses and manages Odoo records with Python logic.",
        "Connects external CRM operations with Odoo business workflows.",
        "Maps external data structures to corresponding Odoo models and fields."
      ],
      implementation: [
        ["Salesforce CRM", "CRM platform and API connectivity."],
        ["Odoo ERP", "Custom modules, ORM, and business logic."],
        ["Python and REST APIs", "Integration logic and data exchange using PostgreSQL-backed records."]
      ], stack: ["Python", "Odoo", "Salesforce", "REST APIs", "PostgreSQL"], link: "#", image: "" },
    { title: "LaCasa - Catering Management System", tags: ["Catering", "Odoo"], version: "Odoo ERP | Catering Operations",
      text: "A customized Odoo solution supporting catering operations, business workflows, and day-to-day processes through tailored ERP functionality.",
      overview: "LaCasa adapts Odoo ERP to the operational requirements of a catering business. Custom development aligns business processes with company requirements while keeping relevant data and workflows within the ERP system.",
      features: [
        "Customized Odoo functionality for catering-specific business requirements.",
        "Implemented backend logic to simplify operational workflows.",
        "Used Odoo ORM to manage business records and related information.",
        "Customized Odoo views and forms for operational needs.",
        "Connected custom functionality with relevant Odoo business workflows."
      ], stack: ["Python", "Odoo", "PostgreSQL", "XML", "Odoo ORM"], link: "#", image: "" },
    { title: "Creative Showcase", tags: ["Web Development", "Django"], version: "Django | Portfolio Application",
      text: "A Django web application for presenting creative work through a structured interface, combining backend features with frontend technologies.",
      overview: "Creative Showcase is a Django-based web project demonstrating Python application development, Django's request-response architecture, database integration, and frontend implementation.",
      features: [
        "Built server-side functionality using Python and Django.",
        "Used SQLite to store and manage application data.",
        "Created web pages with HTML and CSS.",
        "Added client-side interactions with JavaScript.",
        "Connected Django backend logic with frontend templates and database operations."
      ], stack: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"], link: "#", image: "" }
  ],
  experience: [
    { role: "Software Developer Trainee", org: "CodeTrade Pvt Ltd", period: "1 Jan 2025 - Present",
      points: [
        "Develop and customize Odoo modules using Python, including models, business logic, and workflows.",
        "Build and maintain XML views, actions, and security rules, connecting backend behavior with clear user interfaces.",
        "Customize existing features to meet client requirements and work directly with clients to understand needs and propose solutions.",
        "Integrate backend functionality with REST APIs and external platforms, including Salesforce and WooCommerce connectors.",
        "Work with PostgreSQL for data handling and queries; troubleshoot bugs and improve application performance.",
        "Collaborate with the team on client projects and support deployment across staging, pre-production, and production environments."
      ] }
  ],
  education: ["B.Tech in Computer Science, Rajasthan Technical University (2021-2025)"],
  contactText: "You can reach me by email or connect with me on LinkedIn and GitHub."
};
