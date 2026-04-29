import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        plans: "Plans",
        how_it_works: "How it Works",
        success_stories: "Success Stories",
        login: "Log in",
        get_started: "Get Started"
      },
      hero: {
        title: "Everything your health needs.",
        highlight: "One simple app.",
        subtitle: "Track, eat, move, improve, and stay motivated—all in one place.\nNo switching apps. No scattered data. Just real results.",
        cta_start: "Start Your Plan",
        cta_explore: "Explore Plans",
        pricing_tailored: "Plans and pricing tailored for"
      },
      scattered: {
        title: "Your health is scattered across too many apps",
        diet: "Diet",
        reports: "Reports",
        motivation: "Motivation",
        workouts: "Workouts",
        problem_desc1: "One app for workouts.",
        problem_desc2: "One for diet.",
        problem_desc3: "One for reports.",
        problem_desc4: "One for motivation.",
        problem_footer: "Nothing works together. Progress gets lost.",
        solution_title: "GOQii brings it all together",
        solution_desc1: "Everything works as one—so your health finally makes sense.",
        solution_desc2: "No switching. No confusion. Just one app that does it all.",
        before_title: "Before",
        before_item1: "Multiple apps",
        before_item2: "Disconnected data",
        before_item3: "No clear progress",
        after_title: "After",
        after_item1: "One app",
        after_item2: "Everything connected",
        after_item3: "Clear improvement"
      },
      features: {
        title: "Everything you need.\nWorking together.",
        subtitle: "Not separate tools—one connected experience.",
        activity_title: "Activity Tracking",
        activity_copy: "Steps, sleep, and daily movement—all tracked automatically.",
        activity_micro: "Your activity shapes your daily plan.",
        nutrition_title: "Personalized Nutrition",
        nutrition_copy: "Meal plans and guidance tailored to you.",
        nutrition_micro: "Your meals adapt to your activity.",
        fitness_title: "Workouts & Fitness",
        fitness_copy: "Guided workouts designed for your goals.",
        fitness_micro: "Your workouts adjust as you improve.",
        expert_title: "Expert Coaching",
        expert_copy: "Real humans guiding and motivating you.",
        expert_micro: "Your coach tracks your progress.",
        chronic_title: "Chronic Care Support",
        chronic_copy: "Structured support for long-term conditions.",
        chronic_micro: "Your plan adapts to your health needs.",
        rewards_title: "Wellness Rewards",
        rewards_copy: "Earn rewards for staying consistent.",
        rewards_micro: "Your effort gets rewarded.",
        summary_title: "It all works together",
        summary_copy: "Your activity, meals, sleep, and coaching are all connected. So every step you take moves you forward.",
        summary_footer: "No gaps. No guesswork. Just steady progress."
      },
      how_it_works: {
        section_title: "Simple. Connected. Effective.",
        step1_title: "Track your daily habits",
        step1_desc: "Connect your devices or log manually.",
        step2_title: "Get personalized insights",
        step2_desc: "Understand how your habits connect.",
        step3_title: "Follow your plan",
        step3_desc: "Complete daily tasks curated for you.",
        step4_title: "Improve continuously",
        step4_desc: "See real progress over time."
      },
      plans: {
        title: "Choose Your Health System",
        subtitle: "Programs designed for your goals and lifestyle",
        all: "All Plans",
        lifestyle: "Lifestyle",
        mental: "Mental Well-being",
        chronic: "Chronic Care",
        monthly: "Monthly",
        annual: "Annual",
        save: "Save 20%",
        per_mo: "/ mo",
        billed_yearly: "Billed yearly",
        byod: "Works with your device (BYOD)",
        view_details: "View Details",
        coming_soon: "Plans Coming Soon in Your Region",
        coming_soon_desc: "We're expanding globally. Please check back soon or switch your location.",
        change_country: "Change Country",
        not_sure: "Not sure which plan is right for you?",
        find_my_plan: "Find My Plan",
        explore_all: "Explore All Plans"
      },
      connected: {
        hub_title: "Your Health,\nFully Connected",
        hub_desc: "Your activity, meals, sleep, and coaching all work together—so every step you take leads to real progress.",
        central_hub: "Central Hub",
        byod_badge: "Bring Your Own Device (BYOD)",
        byod_title: "Works With Your\nExisting Devices",
        byod_desc: "No mandatory hardware required. All your data, unified in one place.",
        apple: "Apple Health",
        google: "Google Fit",
        wearables: "Wearables",
        manual: "Manual tracking",
        btn_integrations: "View Compatible Integrations",
        synced: "Synced",
        just_now: "Just now"
      },
      compare: {
        title: "Compare and Secure Your Health",
        desc: "Structured systems designed to help you reach your goals.",
        btn_secure: "Secure Your Plan",
        trusted_title: "Trusted by millions worldwide",
        trusted_desc: "Your health data is private, secure, and encrypted.",
        secure_badge: "Secure Checkout",
        encrypted: "256-bit Encryption",
        iso: "ISO 27001 Certified",
        hipaa: "HIPAA Compliant",
        table_title: "Compare Plans",
        table_desc: "All plans include the same app experience.\nThe difference is how much support and guidance you get.",
        feature: "Feature",
        plan1: "Care & Control",
        plan2: "Fitness & Weight",
        plan3: "Stress & Sleep",
        sec1: "Included in all plans",
        sec2: "Level of support",
        sec3: "Best suited for",
        sec4: "Experience",
        f1: "Activity Tracking",
        f2: "Sleep Tracking",
        f3: "Basic Insights",
        f4: "App Access",
        f5: "Device Support",
        f6: "Coach Guidance",
        f7: "Doctor Support",
        f8: "Personalized Plans",
        f9: "Priority Support",
        f10: "Chronic Conditions",
        f11: "Weight & Fitness",
        f12: "Stress & Sleep",
        f13: "Type of Support",
        f14: "Check-ins",
        f15: "Progress Tracking",
        v1: "BYOD",
        v2: "Full Care",
        v3: "Guided",
        v4: "Self-paced",
        v5: "Frequent",
        v6: "Regular",
        v7: "Light",
        v8: "Advanced",
        v9: "Standard",
        v10: "Basic",
        footer_promo: "No matter which plan you choose, everything stays connected—\nyour activity, meals, sleep, and progress all work together in one app.",
        protection_title: "Your data stays protected",
        protection_footer: "Security and privacy based on your region."
      },
      results: {
        title: "Not just tracking. Real progress.",
        subtitle: "When everything works together, you don’t just track your health—you improve it.",
        metric1: "Better habits",
        metric2: "More consistency",
        metric3: "Visible results",
        metric4: "Long-term improvement",
        people_title: "Real people. Real results.",
        result1: "Improved fitness",
        result2: "Better nutrition",
        result3: "Reduced stress",
        result4: "More consistency",
        cta_success: "See Success Stories"
      },
      cta: {
        footer_title: "Start your journey today",
        footer_subtitle: "One app. Everything connected. Real results.",
        footer_btn: "Start Your Plan"
      },
      footer: {
        rights: "All rights reserved.",
        terms: "Terms",
        privacy: "Privacy",
        support: "Support",
        submit: "Change Country"
      },
      chronic_page: {
        avail_title: "Plans not available in your region yet",
        avail_desc: "We’re expanding globally. Try another location.",
        btn_change: "Change Country"
      },
      chronic_hero: {
        badge: "Specialized Care",
        title: "Total Control Over\nYour Health Journey",
        desc: "Structured systems designed for chronic condition management, connecting your clinical needs with daily lifestyle tracking.",
        btn: "Start Your Care Plan"
      },
      chronic_features: {
        title: "What You Get with Chronic Care",
        subtitle: "Care that stays with you, every day",
        desc: "Everything you need to manage your condition—guided, monitored, and supported in one place.",
        feature1_title: "Personal Health Coach",
        feature1_desc: "A dedicated expert who understands your condition and guides you daily.",
        feature1_list: "• Daily check-ins and habit tracking\n• Personalized lifestyle and nutrition guidance\n• Ongoing motivation and accountability",
        feature2_title: "Doctor Support",
        feature2_desc: "Medical care when you need it.",
        feature2_list: "• Regular consultations with specialists\n• Data-driven treatment adjustments\n• Continuous monitoring of your progress",
        feature3_title: "Continuous Health Tracking",
        feature3_desc: "Your health, tracked beyond just steps.",
        feature3_list: "• Monitor key vitals and trends\n• Smart insights from your daily data\n• Early alerts for any irregularities",
        feature4_title: "Diagnostic & Lab Tests",
        feature4_desc: "Stay informed with regular health checks.",
        feature4_list: "• Periodic blood tests and reports\n• At-home sample collection\n• Easy-to-understand reports",
        feature5_title: "Smart Health App",
        feature5_desc: "Everything connected in one simple app.",
        feature5_list: "• Track meals, activity, sleep, and vails\n• View reports and progress in one place\n• Stay connected with your coach anytime",
        feature6_title: "Structured Care Program",
        feature6_desc: "A plan built for long-term condition management.",
        feature6_list: "• Designed for diabetes, hypertension, and more\n• Step-by-step guided journey\n• Adapts as your health improves",
        summary_line1: "Your coach tracks your progress",
        summary_line2: "Your plan adapts to your data",
        summary_line3: "Your care evolves with you",
        final_tagline: "Not just care when you need it. Care that stays with you."
      },
      success_stories: {
        badge: "Real People. Real Results.",
        title: "Real outcomes from real lives",
        subtitle: "People don’t just track their health—they improve it. See how consistent habits, guided support, and connected care lead to real change.",
        section1_title: "Outcomes that matter",
        fitness_title: "Improved Fitness",
        fitness_desc: "Build strength, increase energy, and stay active every day.",
        nutrition_title: "Better Nutrition",
        nutrition_desc: "Eat smarter with guidance that fits your lifestyle.",
        stress_title: "Reduced Stress",
        stress_desc: "Feel calmer, sleep better, and stay mentally balanced.",
        consistency_title: "More Consistency",
        consistency_desc: "Stay on track with daily support and motivation.",
        why_title: "Why it works",
        why_subtitle: "Everything works together.",
        why_line1: "Your activity shapes your plan",
        why_line2: "Your coach tracks your progress",
        why_line3: "Your habits drive your results",
        why_tagline: "No guesswork. Just progress.",
        stories_title: "Success Stories",
        story1_name: "Samay Sharma",
        story1_role: "Member, Chronic Care Program",
        story1_quote: "“I finally found something that keeps me consistent.”",
        story1_desc: "In GOQii, your coach guides you on diet, exercise, and helps you build the right mindset to become a healthier version of yourself.",
        story1_results: "• Improved consistency in daily habits\n• Better control over health and routine\n• Stronger mindset towards long-term wellness",
        story1_result: "Chronic Care Success",
        story2_name: "Col. Ravi Minocha",
        story2_role: "Chronic Care Member",
        story2_quote: "“My coach never discouraged me—only supported and motivated me to build healthier habits.”",
        story2_desc: "She helped me move away from unhealthy eating and stay consistent with better choices.",
        story2_results: "Better eating habits • Consistency • Positive mindset",
        story2_result: "Chronic Care Success",
        story3_name: "Abhay Marathe",
        story3_role: "Member",
        story3_quote: "“With the right coaching, I went from getting started to running a half marathon.”",
        story3_desc: "GOQii helped me reset my routine, stay consistent, and build endurance step by step.",
        story3_results: "Improved fitness • Increased endurance • Real performance gains",
        story3_result: "Fitness Success",
        footer_title: "See your story here",
        footer_desc1: "You don’t need multiple apps.",
        footer_desc2: "You don’t need complicated plans.",
        footer_tagline: "You just need one place where everything works together.",
        cta_start: "Start Your Plan",
        cta_explore: "Explore Plans"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    }
  });

i18n.on('languageChanged', (lng) => {
  const baseLng = lng.split('-')[0];
  document.documentElement.dir = baseLng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = baseLng;
});

// Set initial direction and lang
const initialLng = i18n.language || 'en';
const baseInitialLng = initialLng.split('-')[0];
document.documentElement.dir = baseInitialLng === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = baseInitialLng;

export default i18n;
