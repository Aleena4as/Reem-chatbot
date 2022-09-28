import React, { useState, createContext } from 'react';

export const TranslateContext = createContext();

const TranslateProvider = ({ children }) => {
    const [language, setLanguge] = useState('en');

    const translatedLanguage = {
        main_menu: language === 'en' ? 'Main Menu' : 'القائمة الرئيسية',
        restart_bot: language === 'en' ? 'Restart Bot' : 'البدء من جديد',
        live_agent: language === 'en' ? 'Live Agent' : 'وكيل مباشر',
        change_language: language === 'en' ? 'Change Language' : 'تغيير اللغة',
        arabic: language === 'en' ? 'Arabic' : 'الإنجليزية',
        inputPlaceholder: language === 'en' ? 'Ask a question...' : '...اطرح سؤال',
        avatar_name: language === 'en' ? 'Myriam' : 'مريم',
        sliderText1: language === 'en' ? 'Patient Testimonials ' : 'آراء المرضى',
        sliderText2: language === 'en' ? 'Healthcare Blogs ' : 'المدونة الصحية',
        sliderText3: language === 'en' ? 'Our Specialities & Medical Team ' : 'تخصصاتنا وفريقنا الطبي',

        available_time_slot: language === 'en' ? 'Available Time Slots' : 'الأوقات المتاحة',
        Numerics_are_not_allowed: language === 'en' ? 'Numerics are not allowed' : 'الأرقام غير مسموحة',
        Special_characters_are_not_allowed: language === 'en' ? 'Special characters are not allowed' : ' الرموز غير مسموحة',
        This_field_is_mandatory: language === 'en' ? 'This field is mandatory' : 'هذا الحقل إلزامي',
        Emirates_ID_is_not_valid: language === 'en' ? 'Emirates ID is not valid' : 'الهوية الإماراتية غير صالحة',
        Phone_number_must_be_valid: language === 'en' ? 'Phone number must be valid' : 'يجب أن يكون رقم الهاتف صالحاً',
        OTP_VERIFICATION: language === 'en' ? 'OTP VERIFICATION' : 'التحقق من OTP',
        Verify: language === 'en' ? 'Verify' : 'تأكيد',
        Emirates_ID: language === 'en' ? 'Emirates ID' : 'الهوية الإماراتية',
        Date_of_Birth: language === 'en' ? 'Date of Birth' : 'تاريخ الميلاد',
        Submit: language === 'en' ? 'Submit' : 'إرسال',
        Phone_number_must_be_numeric: language === 'en' ? 'Phone number must be numeric' : 'يجب أن يكون رقم الهاتف رقمياً',
        Invalid_Email: language === 'en' ? 'Invalid Email' : 'البريد الإلكتروني خاطئ',
        Please_wait_for_the_live_agent_to_respond: language === 'en' ? 'Please wait for the live agent to respond' : 'يُرجى انتظار رد وكيل خدمة العملاء ',
        Leave_Agent: language === 'en' ? 'Leave Agent' : 'انهاء المحادثة مع وكيل خدمة العملاء',
        Designation: language === 'en' ? 'Designation:' : ':المسمى',
        Speciality: language === 'en' ? 'Speciality:' : ':التخصص',

    };

    const switchLanguage = langProps => {
        setLanguge(langProps);
    };

    return (
        <TranslateContext.Provider value={{ language, translatedLanguage, switchLanguage }}>
            {children}
        </TranslateContext.Provider>
    );
};

export default TranslateProvider;
