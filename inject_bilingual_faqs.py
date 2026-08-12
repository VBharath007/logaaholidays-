import re

FILE_PATH = r"d:\HexaVisionTech\logaa holiday\src\pages\PackageDetails.tsx"

FAQS = {
    "karnataka_honeymoon": [
        {
            "question": "Is this Karnataka honeymoon package ideal for couples?",
            "questionTamil": "இந்த கர்நாடகா ஹனிமூன் பேக்கேஜ் தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. The Karnataka honeymoon itinerary is designed for romance, featuring coffee-estate resorts, scenic waterfalls, and heritage stays. We include special honeymoon arrangements (flower decoration, candlelight dinner) and provide a private car so couples can travel at their own pace.",
            "answerTamil": "ஆம். இந்த கர்நாடகா ஹனிமூன் பயணத் திட்டம் காதல் நிறைந்த அனுபவத்திற்காக வடிவமைக்கப்பட்டுள்ளது. காபி தோட்ட ரிசார்ட்கள், அழகிய நீர்வீழ்ச்சிகள் மற்றும் பாரம்பரிய தங்குமிடங்கள் இதில் அடங்கும். சிறப்பு ஹனிமூன் ஏற்பாடுகளை (மலர் அலங்காரம், மெழுகுவர்த்தி இரவு உணவு) உள்ளடக்கியதுடன், தம்பதிகள் நிதானமாகப் பயணிக்க ஒரு தனியார் காரையும் வழங்குகிறோம்."
        },
        {
            "question": "Can we start the Karnataka honeymoon tour from Bangalore or Mysore?",
            "questionTamil": "பெங்களூரு அல்லது மைசூரிலிருந்து கர்நாடகா ஹனிமூன் சுற்றுலாவைத் தொடங்க முடியுமா?",
            "answer": "Absolutely. Bangalore and Mysore are the primary pickup points. If you arrive by flight or train from Chennai or another city, we will meet you at the Bangalore airport or Mysore railway station and begin the tour from there.",
            "answerTamil": "நிச்சயமாக. பெங்களூரு மற்றும் மைசூர் ஆகியவை முக்கிய பிக்கப் இடங்கள். நீங்கள் சென்னை அல்லது பிற நகரங்களிலிருந்து விமானம் அல்லது ரயில் மூலம் வந்தால், பெங்களூரு விமான நிலையம் அல்லது மைசூர் ரயில் நிலையத்தில் உங்களைச் சந்தித்து அங்கிருந்து சுற்றுலாவைத் தொடங்குவோம்."
        }
    ],

    "karnataka_normal": [
        {
            "question": "Is this Karnataka tour package suitable for families with seniors?",
            "questionTamil": "இந்த கர்நாடகா சுற்றுலா பேக்கேஜ் மூத்த குடிமக்கள் உள்ள குடும்பத்திற்கு ஏற்றதா?",
            "answer": "Yes. The itinerary includes short drives, moderate temple visits (e.g. Mysore Palace), and nature spots (Coorg), all at a gentle pace. We choose hotels with lifts and easy access, and our guide assists senior travelers at each stop.",
            "answerTamil": "ஆம். இந்த பயணத் திட்டத்தில் குறுகிய பயணங்கள், மிதமான கோயில் சுற்றுலாக்கள் (உதாரணமாக, மைசூர் அரண்மனை) மற்றும் இயற்கை நிறைந்த இடங்கள் (கூர்க்) ஆகியவை நிதானமான வேகத்தில் இடம்பெறுகின்றன. லிப்ட் மற்றும் எளிதான அணுகல் வசதி கொண்ட ஹோட்டல்களைத் தேர்வு செய்கிறோம், மேலும் ஒவ்வொரு இடத்திலும் எங்கள் வழிகாட்டி மூத்த பயணிகளுக்கு உதவுகிறார்."
        },
        {
            "question": "Can we start the Karnataka tour from Bangalore or Chennai?",
            "questionTamil": "பெங்களூரு அல்லது சென்னையிலிருந்து கர்நாடகா சுற்றுலாவைத் தொடங்க முடியுமா?",
            "answer": "Yes. Bangalore is the primary hub for this tour. You can join in Bangalore directly, and we can also arrange to meet you if you arrive by flight or train from Chennai or other cities. We will pick you up at Bangalore airport or railway station to begin the tour.",
            "answerTamil": "ஆம். இந்த சுற்றுலாவிற்கான முக்கிய தொடக்க மையம் பெங்களூரு ஆகும். நீங்கள் நேரடியாக பெங்களூருவில் இணையலாம். மேலும் சென்னை அல்லது பிற நகரங்களிலிருந்து விமானம் அல்லது ரயில் மூலம் வந்தால், உங்களைச் சந்திப்பதற்கான ஏற்பாடுகளையும் செய்யலாம். சுற்றுலாவைத் தொடங்குவதற்காக பெங்களூரு விமான நிலையம் அல்லது ரயில் நிலையத்திலிருந்து உங்களை பிக்கப் செய்து கொள்வோம்."
        }
    ],

    "goa_honeymoon": [
        {
            "question": "Is this Goa honeymoon package romantic for couples?",
            "questionTamil": "இந்த கோவா பேக்கேஜ் ஹனிமூன் தம்பதிகளுக்கு காதல் நிறைந்ததாக இருக்குமா?",
            "answer": "Yes. The Goa itinerary focuses on the best beaches and resorts. We pick quieter beach stays (e.g. South Goa) with sunset views, ideal for couples. You can also enjoy dinner cruises or scenic coastal drives. We provide a private guide and car, so you travel at leisure.",
            "answerTamil": "ஆம். கோவா பயணத் திட்டம் சிறந்த கடற்கரைகள் மற்றும் ரிசார்ட்களில் கவனம் செலுத்துகிறது. தம்பதிகளுக்கு ஏற்ற சூரிய அஸ்தமனக் காட்சிகளுடன் அமைதியான கடற்கரை தங்குமிடங்களை (உதாரணமாக, தெற்கு கோவா) தேர்வு செய்கிறோம். டின்னர் க்ரூஸ் அல்லது அழகிய கடலோர சாலைப் பயணங்களையும் அனுபவிக்கலாம். தனிப்பட்ட வழிகாட்டி/கார் வசதியை வழங்குவதால், நீங்கள் நிதானமாகப் பயணம் செய்யலாம்."
        },
        {
            "question": "Can we join the Goa honeymoon tour from Mumbai or Delhi?",
            "questionTamil": "மும்பை அல்லது டெல்லியிலிருந்து கோவா பேக்கேஜில் இணைய முடியுமா?",
            "answer": "Yes. You can fly into Goa's Dabolim Airport (GOI) from Mumbai or Delhi. If convenient, we can pick you up at Goa airport. Alternatively, a popular option is to fly into Mumbai and take a connecting flight or train to Goa. Once you arrive, we handle all inter-city transfers to your beach hotel.",
            "answerTamil": "ஆம். மும்பை அல்லது டெல்லியிலிருந்து கோவாவின் டபோலிம் விமான நிலையத்திற்கு (GOI) விமானத்தில் வரலாம். உங்களுக்கு வசதியாக இருந்தால், கோவா விமான நிலையத்திலிருந்து உங்களை பிக்கப் செய்து கொள்ளலாம். மாற்றாக, மும்பிக்கு விமானத்தில் வந்து அங்கிருந்து இணைப்பு விமானம் அல்லது ரயில் மூலம் கோவாவுக்குச் செல்வதும் ஒரு பிரபலமான வழியாகும். நீங்கள் கோவாவை அடைந்ததும், உங்கள் கடற்கரை ஹோட்டலுக்கான போக்குவரத்து ஏற்பாடுகளை நாங்கள் கவனித்துக்கொள்வோம்."
        }
    ],

    "kerala_normal": [
        {
            "question": "Is this Kerala tour package family-friendly and romantic?",
            "questionTamil": "இந்த கேரளா சுற்றுலா பேக்கேஜ் குடும்பங்களுக்கு ஏற்றதா மற்றும் காதல் பயணத்திற்கு பொருத்தமானதா?",
            "answer": "Yes. Kerala's gentle backwater cruises and tea gardens are ideal for families and honeymooners alike. The itinerary features a calm houseboat stay in Alleppey and a nature walk in Munnar, enjoyable for kids and seniors. We ensure cozy stays and optional activities (boat rides, spice farm visits) so everyone has a memorable experience.",
            "answerTamil": "ஆம். கேரளாவின் அமைதியான பேக்க்வாட்டர் க்ரூஸ் பயணங்களும் தேயிலைத் தோட்டங்களும் குடும்பங்கள் மற்றும் ஹனிமூன் தம்பதிகளுக்கு ஏற்றவை. இந்த பயணத் திட்டத்தில் ஆலப்புழாவில் அமைதியான ஹவுஸ்போட் தங்குமிடமும், மூணாறில் இயற்கை நடைப்பயணமும் இடம்பெறுகின்றன; இவை குழந்தைகள் மற்றும் மூத்த குடிமக்களுக்கும் மகிழ்ச்சியான அனுபவமாக இருக்கும். படகு சவாரி, மசாலா பண்ணை சுற்றுலா போன்ற விருப்பத்திற்கேற்ப செயல்பாடுகளுடன் வசதியான தங்குமிடங்களை நாங்கள் உறுதி செய்கிறோம்."
        },
        {
            "question": "Can I join the Kerala tour from Kochi or Trivandrum?",
            "questionTamil": "கொச்சி அல்லது திருவனந்தபுரத்திலிருந்து கேரளா சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Certainly. Most itineraries start in Kochi (Cochin) or Trivandrum (Thiruvananthapuram). We offer pickup from Kochi airport and railway station, or meet you in Trivandrum if more convenient. You can fly into either city and we will handle all local transfers.",
            "answerTamil": "நிச்சயமாக. பெரும்பாலான பயணத் திட்டங்கள் கொச்சி (கொச்சின்) அல்லது திருவனந்தபுரத்தில் தொடங்குகின்றன. கொச்சி விமான நிலையம்/ரயில் நிலையத்திலிருந்து பிக்கப் வசதியை வழங்குகிறோம் அல்லது உங்களுக்கு வசதியாக இருந்தால் திருவனந்தபுரத்தில் உங்களைச் சந்திக்கலாம். இந்த நகரங்களுக்கு நீங்கள் விமானத்தில் வரலாம், மேலும் உள்ளூர் போக்குவரத்து ஏற்பாடுகளை நாங்கள் கவனித்துக்கொள்வோம்."
        }
    ],

    "tamilnadu_normal": [
        {
            "question": "Is this Tamil Nadu tour package suitable for families and couples?",
            "questionTamil": "இந்த தமிழ்நாடு சுற்றுலா பேக்கேஜ் குடும்பங்கள் மற்றும் தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. The tour covers heritage temples and coastal beaches with comfortable hotels and a relaxed pace, making it great for family groups and honeymooners alike. We tailor activities for kids, adults, and seniors (e.g. easy walks, optional temple tours) so travelers of all ages enjoy it.",
            "answerTamil": "ஆம். இந்த சுற்றுலா பேக்கேஜில் பாரம்பரிய கோயில்கள் மற்றும் கடலோர கடற்கரைகள் இடம்பெறுவதுடன், வசதியான ஹோட்டல்கள் மற்றும் நிதானமான பயணத் திட்டமும் உள்ளது. எனவே இது குடும்பக் குழுக்கள் மற்றும் ஹனிமூன் தம்பதிகளுக்கும் சிறந்ததாக இருக்கும். குழந்தைகள், பெரியவர்கள் மற்றும் மூத்த குடிமக்கள் என அனைத்து வயதினரும் மகிழ்ச்சியாகப் பயணம் செய்யும் வகையில், எளிதான நடைப்பயணங்கள் மற்றும் விருப்பத்திற்கேற்ப கோயில் சுற்றுலா போன்ற செயல்பாடுகளை நாங்கள் ஏற்பாடு செய்கிறோம்."
        },
        {
            "question": "Can we join the Tamil Nadu tour from Madurai or Chennai?",
            "questionTamil": "மதுரை அல்லது சென்னையிலிருந்து தமிழ்நாடு சுற்றுலாவில் நாங்கள் இணைய முடியுமா?",
            "answer": "Absolutely. We offer pickup from Madurai or Chennai and coordinate train and flight arrivals into those cities. Our driver and guide will meet you at the station or airport and begin the tour, so you can easily join from any major city in Tamil Nadu.",
            "answerTamil": "நிச்சயமாக. மதுரை அல்லது சென்னையிலிருந்து பிக்கப் வசதியை வழங்குகிறோம், மேலும் அந்த நகரங்களுக்கு வரும் ரயில்/விமான வருகைகளையும் ஒருங்கிணைக்கிறோம். எங்கள் ஓட்டுநர்/வழிகாட்டி உங்களை ரயில் நிலையம்/விமான நிலையத்தில் சந்தித்து சுற்றுலாவைத் தொடங்குவார். எனவே தமிழ்நாட்டின் எந்த முக்கிய நகரத்திலிருந்தும் நீங்கள் எளிதாக இந்த சுற்றுலாவில் இணையலாம்."
        }
    ],
    
    "tamilnadu_honeymoon": [
        {
            "question": "Is this Tamil Nadu honeymoon package ideal for couples?",
            "questionTamil": "இந்த தமிழ்நாடு ஹனிமூன் பேக்கேஜ் தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. The itinerary is designed for romance, combining scenic hill stations, coastal beaches, and heritage sites. We include cozy accommodations, scenic viewpoints, and can arrange special couple experiences like candlelight dinners and private excursions.",
            "answerTamil": "ஆம். இந்த பயணத் திட்டம் காதல் நிறைந்த அனுபவத்திற்காக வடிவமைக்கப்பட்டுள்ளது, அழகிய மலை வாசஸ்தலங்கள், கடலோர கடற்கரைகள் மற்றும் பாரம்பரிய தளங்களை ஒருங்கிணைக்கிறது. வசதியான தங்குமிடங்கள், அழகிய காட்சி முனைகள் ஆகியவற்றை உள்ளடக்கியுள்ளோம், மேலும் மெழுகுவர்த்தி இரவு உணவுகள் மற்றும் தனிப்பட்ட சுற்றுலாக்கள் போன்ற சிறப்பு ஜோடி அனுபவங்களை ஏற்பாடு செய்யலாம்."
        },
        {
            "question": "Can we join the Tamil Nadu honeymoon tour from Madurai or Chennai?",
            "questionTamil": "மதுரை அல்லது சென்னையிலிருந்து தமிழ்நாடு ஹனிமூன் சுற்றுலாவில் நாங்கள் இணைய முடியுமா?",
            "answer": "Absolutely. We offer pickup from Madurai or Chennai. Our driver and guide will meet you at the station or airport and begin the tour, so you can easily join from any major city in Tamil Nadu.",
            "answerTamil": "நிச்சயமாக. மதுரை அல்லது சென்னையிலிருந்து பிக்கப் வசதியை வழங்குகிறோம். எங்கள் ஓட்டுநர்/வழிகாட்டி உங்களை ரயில் நிலையம்/விமான நிலையத்தில் சந்தித்து சுற்றுலாவைத் தொடங்குவார். எனவே தமிழ்நாட்டின் எந்த முக்கிய நகரத்திலிருந்தும் நீங்கள் எளிதாக இந்த சுற்றுலாவில் இணையலாம்."
        }
    ],

    "delhi_golden_triangle": [
        {
            "question": "Is the Delhi–Agra–Jaipur (Golden Triangle) tour suitable for seniors and families?",
            "questionTamil": "கோல்டன் டிரையாங்கிள் சுற்றுலா மூத்த குடிமக்கள் மற்றும் குடும்பங்களுக்கு ஏற்றதா?",
            "answer": "Yes. We design the itinerary with plenty of breaks between sightseeing. Major stops (Taj Mahal, Amber Fort, Qutub Minar) have wheelchair access or easy paths. We book comfortable 3–4-star hotels and can adjust the pace for elderly members. Families enjoy the cultural highlights while seniors can rest as needed.",
            "answerTamil": "ஆம். சுற்றுலா இடங்களைப் பார்வையிடுவதற்கிடையில் போதுமான ஓய்வு நேரங்களுடன் 7–8 நாட்கள் கொண்ட பயணத் திட்டத்தை வடிவமைக்கிறோம். முக்கியமான இடங்களான தாஜ்மஹால், ஆம்பர் கோட்டை மற்றும் குதுப் மினார் ஆகியவற்றில் சக்கர நாற்காலி அணுகல் அல்லது எளிதான பாதைகள் உள்ளன. வசதியான 3–4★ ஹோட்டல்களை முன்பதிவு செய்கிறோம், மேலும் வயதான உறுப்பினர்களுக்காக கூடுதல் ஓய்வு மற்றும் குறைந்த சிரமம் கொண்ட செயல்பாடுகளுக்கு ஏற்ப பயண வேகத்தை மாற்றியமைக்கலாம்."
        },
        {
            "question": "Can I join the Delhi–Agra–Jaipur tour from Madurai, Pune, or Ahmedabad?",
            "questionTamil": "மதுரை, புனே அல்லது அகமதாபாத்திலிருந்து டெல்லி–ஆக்ரா–ஜெய்ப்பூர் சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Yes. Many travelers fly or take a train to New Delhi first and we start the tour there. Alternatively, we can arrange private transfers or connecting flight options from Mumbai or Bengaluru to reach Delhi conveniently.",
            "answerTamil": "ஆம். பல பயணிகள் முதலில் டெல்லிக்கு சர்வதேச அல்லது உள்நாட்டு விமானங்களை முன்பதிவு செய்கிறார்கள். நீங்கள் மதுரை, புனே அல்லது அகமதாபாத்திலிருந்து வருகிறீர்கள் என்றால், விமானம் அல்லது ரயில் மூலம் புதுடெல்லிக்கு வந்து, அங்கிருந்து சுற்றுலாவைத் தொடங்கலாம். மாற்றாக, மும்பை/பெங்களூருவிலிருந்து டெல்லியை அடைய தனியார் போக்குவரத்து அல்லது உள்ளூர் விமான இணைப்புகளையும் ஏற்பாடு செய்யலாம்."
        }
    ],

    "varanasi_kasi": [
        {
            "question": "Is the Varanasi tour safe and manageable for families and seniors?",
            "questionTamil": "வாரணாசி சுற்றுலா குடும்பங்கள் மற்றும் மூத்த குடிமக்களுக்கு பாதுகாப்பாகவும் எளிதாகவும் இருக்குமா?",
            "answer": "Yes. Varanasi is compact, and we plan hotel stays near the main sites. Travel between ghats and temples is short, via rickshaws or short walks. We avoid chaotic evening crowds when possible. For seniors, we focus on sunrise boat rides on the Ganges and easy temple visits. Local guides ensure a secure, well-paced experience for all age groups.",
            "answerTamil": "ஆம். வாரணாசி நகரம் குறுகிய பரப்பில் அமைந்துள்ளதால், முக்கிய இடங்களுக்கு அருகில் ஹோட்டல் தங்குமிடங்களைத் திட்டமிடுகிறோம். காட்கள் மற்றும் கோயில்களுக்கு இடையிலான பயணம் குறுகியதாக இருக்கும் (ஆட்டோ ரிக்ஷா அல்லது குறுகிய நடைப்பயணம்). முடிந்தவரை அதிக நெரிசல் கொண்ட மாலை நேரங்களைத் தவிர்க்கிறோம். மூத்த குடிமக்களுக்காக கங்கை நதியில் சூரிய உதய நேர படகு சவாரி மற்றும் எளிதான கோயில் சுற்றுலாவை முன்னிலைப்படுத்துகிறோம்."
        },
        {
            "question": "Can I join the Varanasi tour from Chennai or Delhi?",
            "questionTamil": "டெல்லி அல்லது சென்னையிலிருந்து வாரணாசி சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Absolutely. Varanasi has an international airport (Lal Bahadur Shastri Airport) and multiple railway stations. You can catch a direct flight from Delhi or Chennai to Varanasi. We will pick you up at the airport or station to start the tour. We can also arrange a train from Delhi or Chennai if you prefer.",
            "answerTamil": "நிச்சயமாக. வாரணாசியில் சர்வதேச விமான நிலையம் (லால் பகதூர் சாஸ்திரி விமான நிலையம்) மற்றும் பல ரயில் நிலையங்கள் உள்ளன. டெல்லி அல்லது சென்னையிலிருந்து வாரணாசிக்கு நேரடி விமானத்தில் வரலாம். சுற்றுலாவைத் தொடங்குவதற்காக விமான நிலையம் அல்லது ரயில் நிலையத்தில் உங்களை பிக்கப் செய்து கொள்வோம். நீங்கள் விரும்பினால், டெல்லி/சென்னையிலிருந்து வாரணாசிக்கு ரயில் பயணத்தையும் ஏற்பாடு செய்யலாம்."
        }
    ],

    "shirdi": [
        {
            "question": "Is the Shirdi pilgrimage tour suitable for families and elderly travelers?",
            "questionTamil": "ஷீரடி சுற்றுலா பேக்கேஜ் குடும்பங்களுக்கு ஏற்றதா?",
            "answer": "Yes. The Shirdi itinerary is typically 2–3 days, focused on visiting the Sai Baba temple and nearby shrines. We choose comfortable, family-friendly hotels in Shirdi. The schedule includes short transfers, making it easy for seniors and kids. We also cover Shani Shingnapur temple if interested, and our guides provide assistance during temple darshan.",
            "answerTamil": "ஆம். ஷீரடி பயணத் திட்டம் பொதுவாக 2–3 நாட்கள் கொண்டது மற்றும் சாய் பாபா கோயில் மற்றும் அருகிலுள்ள கோயில்களைப் பார்வையிடுவதில் கவனம் செலுத்துகிறது. ஷீரடியில் வசதியான, குடும்பங்களுக்கு ஏற்ற ஹோட்டல்களைத் தேர்வு செய்கிறோம். பயணத் திட்டத்தில் குறுகிய போக்குவரத்து பயணங்கள் இடம்பெறுவதால், மூத்த குடிமக்கள் மற்றும் குழந்தைகளுக்கும் இது எளிதாக இருக்கும். விருப்பம் இருந்தால் ஷனி சிங்னாப்பூர் கோயிலையும் சுற்றுலாவில் சேர்க்கிறோம்."
        },
        {
            "question": "Can we join the Shirdi tour from Chennai, Pune, or Mumbai?",
            "questionTamil": "சென்னை அல்லது புனேயிலிருந்து ஷீரடி யாத்திரையில் இணைய முடியுமா?",
            "answer": "Yes. You can join from Chennai, Pune, or Mumbai. Flights to Aurangabad or Mumbai and trains to Kopargaon and Shirdi are common routes. We arrange pickups at these points. For example, one option is a flight to Pune, a drive (3–4 hours) to Shirdi, and a return flight from Mumbai. We will coordinate whichever city is easiest for your travel.",
            "answerTamil": "ஆம். நீங்கள் சென்னை, புனே அல்லது மும்பையிலிருந்து இணையலாம். அவுரங்காபாத் அல்லது மும்பிக்கு விமானம் மற்றும் கோபர்காவ்/ஷீரடிக்கு ரயில் ஆகியவை பொதுவான பயண வழிகளாகும். இந்த இடங்களில் பிக்கப் வசதியை ஏற்பாடு செய்கிறோம். உதாரணமாக, புனேக்கு விமானத்தில் வந்து, அங்கிருந்து ஷீரடிக்கு 3–4 மணி நேரம் சாலைப் பயணம் செய்து, திரும்பும் போது மும்பையிலிருந்து விமானத்தில் செல்லலாம்."
        }
    ],

    "kashmir_honeymoon": [
        {
            "question": "Is this Kashmir honeymoon package ideal for couples?",
            "questionTamil": "இந்த காஷ்மீர் ஹனிமூன் சுற்றுலா தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. The Kashmir honeymoon itinerary features romantic houseboat stays on Dal Lake, scenic shikara rides, and visits to Mughal gardens. We include special couple arrangements and a private car throughout, ensuring a private and memorable experience for newlyweds.",
            "answerTamil": "ஆம். இந்த பயணத் திட்டம் தால் ஏரியில் ரொமாண்டிக் ஹவுஸ்போட் தங்குமிடம், அழகிய சிகாரா சவாரிகள் மற்றும் முகலாய தோட்டங்களுக்குச் செல்வதைக் கொண்டுள்ளது. சிறப்பு ஜோடி ஏற்பாடுகள் மற்றும் முழுவதும் ஒரு தனியார் காரை நாங்கள் சேர்த்துள்ளோம், இது புதுமணத் தம்பதிகளுக்கு ஒரு மறக்கமுடியாத அனுபவத்தை உறுதி செய்கிறது."
        },
        {
            "question": "Can we start the Kashmir honeymoon tour from Delhi or Srinagar?",
            "questionTamil": "டெல்லி அல்லது ஸ்ரீநகரிலிருந்து காஷ்மீர் ஹனிமூன் சுற்றுலாவைத் தொடங்க முடியுமா?",
            "answer": "You should fly into Srinagar (SXR airport) to start the tour. Delhi–Srinagar flights are frequent. We will meet you at Srinagar airport. If you prefer, you can also fly into Jammu and transfer by road (8 hours) to Srinagar. Our package begins once you arrive and we handle all local transport from there.",
            "answerTamil": "சுற்றுலாவைத் தொடங்க ஸ்ரீநகருக்கு (SXR விமான நிலையம்) விமானம் மூலம் வர வேண்டும். டெல்லி–ஸ்ரீநகர் விமானங்கள் அடிக்கடி இயக்கப்படுகின்றன. ஸ்ரீநகர் விமான நிலையத்தில் உங்களைச் சந்திப்போம். நீங்கள் விரும்பினால், ஜம்முவுக்கு விமானத்தில் வந்து அங்கிருந்து சாலை வழியாக (8 மணி நேரம்) ஸ்ரீநகருக்கு செல்லலாம். நீங்கள் காஷ்மீரை அடைந்ததும் எங்கள் பேக்கேஜ் தொடங்கும், உள்ளூர் போக்குவரத்து அனைத்தையும் நாங்கள் கவனித்துக்கொள்வோம்."
        }
    ],

    "kashmir_normal": [
        {
            "question": "Is this Kashmir tour suitable for families and honeymooners?",
            "questionTamil": "இந்த காஷ்மீர் சுற்றுலா குடும்பங்கள் மற்றும் ஹனிமூன் தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. Kashmir's scenic valleys and Dal Lake houseboat are enjoyable for all ages. The itinerary includes easy sightseeing (e.g. Mughal gardens, gentle walks) and avoids high-altitude passes unless requested. Accommodations include mid-range hotels and a houseboat stay. The pleasant weather (especially April–June) makes it comfortable for seniors and romantic for couples.",
            "answerTamil": "ஆம். காஷ்மீரின் அழகிய பள்ளத்தாக்குகளும் தால் ஏரியின் ஹவுஸ்போட் அனுபவமும் அனைத்து வயதினருக்கும் மகிழ்ச்சியானவை. பயணத் திட்டத்தில் எளிதான சுற்றுலா நடவடிக்கைகள் (உதாரணமாக, முகலாய தோட்டங்கள் மற்றும் நிதானமான நடைப்பயணங்கள்) இடம்பெறுகின்றன, மேலும் அதிக உயரமுள்ள மலைப்பாதைகள் தவிர்க்கப்படுகின்றன. நடுத்தர தர ஹோட்டல்கள் மற்றும் ஹவுஸ்போட் தங்குமிடம் வழங்கப்படுவதால் புதுமையானதுடன் வசதியான அனுபவமும் கிடைக்கும்."
        },
        {
            "question": "Can we start the Kashmir tour from Delhi or Srinagar?",
            "questionTamil": "டெல்லி அல்லது ஸ்ரீநகரிலிருந்து காஷ்மீர் சுற்றுலாவைத் தொடங்க முடியுமா?",
            "answer": "You should fly or travel into Srinagar (SXR airport) to start the tour. Delhi–Srinagar flights are frequent and we will meet you at the airport. Alternatively, you can fly into Jammu and transfer by road (8 hours) to Srinagar. Either way, our package begins once you arrive in Kashmir and we handle all local transport.",
            "answerTamil": "சுற்றுலாவைத் தொடங்க ஸ்ரீநகருக்கு (SXR விமான நிலையம்) விமானம் அல்லது ரயில் மூலம் வர வேண்டும். டெல்லி–ஸ்ரீநகர் விமானங்கள் அடிக்கடி இயக்கப்படுகின்றன. ஸ்ரீநகர் விமான நிலையம்/ரயில் நிலையத்தில் உங்களைச் சந்திப்போம். நீங்கள் விரும்பினால், ஜம்முவுக்கு விமானத்தில் வந்து அங்கிருந்து சாலை வழியாக (8 மணி நேரம்) ஸ்ரீநகருக்கு செல்லலாம். எந்த வழியாக வந்தாலும், நீங்கள் காஷ்மீரை அடைந்ததும் எங்கள் பேக்கேஜ் தொடங்கும்."
        }
    ],

    "sikkim_honeymoon": [
        {
            "question": "Is the Sikkim tour ideal for honeymoon couples?",
            "questionTamil": "சிக்கிம் சுற்றுலா ஹனிமூன் தம்பதிகளுக்கு பாதுகாப்பாகவும் வசதியாகவும் இருக்குமா?",
            "answer": "Yes. Sikkim is perfect for romance and relaxation. It offers beautiful mountain views, peaceful monastery visits, and serene lakes, making it an excellent choice for a honeymoon. We arrange comfortable hotels and a relaxed itinerary so couples can enjoy the journey stress-free.",
            "answerTamil": "ஆம். சிக்கிமின் காலநிலை மிதமானது மற்றும் முக்கிய இடங்களான கேங்டாக், பெல்லிங் ஆகியவை 1,800 மீட்டருக்கு கீழ் அமைந்துள்ளன. அழகிய இடங்களுக்கு இடையில் குறுகிய பயணங்களை (லாச்சுங், ஏரிகள்) ஏற்பாடு செய்கிறோம். வசதியான ஹோட்டல்களுடன், புதுமணத் தம்பதிகள் ரசிக்கும் வகையில் நிதானமான பயணத் திட்டத்தையும் வழங்குகிறோம்."
        },
        {
            "question": "Can we join the Sikkim tour from Delhi or Kolkata?",
            "questionTamil": "டெல்லி அல்லது கொல்கத்தாவிலிருந்து சிக்கிம் சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Yes. The common route is to fly to Bagdogra (near Siliguri) via Delhi or Kolkata. We will pick you up at Bagdogra airport. Alternatively, you can take a direct flight to Kolkata and connect by a short flight to Bagdogra or by train to Siliguri. From there we drive approximately 5 hours to Gangtok to start the tour.",
            "answerTamil": "ஆம். டெல்லி அல்லது கொல்கத்தா வழியாக சிலிகுரிக்கு அருகிலுள்ள பக்டோக்ராவுக்கு விமானத்தில் செல்வது பொதுவான வழியாகும். பக்டோக்ரா விமான நிலையத்தில் உங்களை பிக்கப் செய்து கொள்வோம். மாற்றாக, கொல்கத்தாவுக்கு நேரடி விமானத்தில் வந்து, அங்கிருந்து குறுகிய விமானப் பயணம் மூலம் பக்டோக்ராவுக்கோ அல்லது லக்சுரி கோச்/ரயில் மூலம் சிலிகுரிக்கோ செல்லலாம். அங்கிருந்து சுமார் 5 மணி நேரம் பயணம் செய்து கேங்டாக்கை அடைந்து சுற்றுலாவைத் தொடங்குவோம்."
        }
    ],

    "maldives_honeymoon": [
        {
            "question": "Is this Maldives package ideal for honeymoon couples?",
            "questionTamil": "இந்த மாலத்தீவு பேக்கேஜ் ஹனிமூன் தம்பதிகளுக்கு சிறந்ததா?",
            "answer": "Absolutely. The itinerary is built for privacy and romance: you stay in a water villa or beach bungalow, enjoy private beach dinners, and have plenty of relaxation time. Snorkeling and lagoon tours are included to add adventure. Every detail (seaplane transfers, resort check-in) is arranged so you only focus on each other.",
            "answerTamil": "நிச்சயமாக. இந்த பயணத் திட்டம் தனிமை மற்றும் காதல் நிறைந்த அனுபவத்திற்காக வடிவமைக்கப்பட்டுள்ளது: நீர்மேல் வில்லா அல்லது கடற்கரை பங்களாவில் தங்கி, தனிப்பட்ட கடற்கரை இரவு உணவை அனுபவித்து, போதுமான ஓய்வு நேரத்தையும் பெறலாம். சாகச அனுபவத்திற்காக ஸ்நோர்கெல்லிங் மற்றும் லகூன் சுற்றுலாக்களும் சேர்க்கப்பட்டுள்ளன. சீப்ளேன் போக்குவரத்து மற்றும் ரிசார்ட் செக்-இன் உள்ளிட்ட அனைத்து ஏற்பாடுகளும் செய்யப்படுவதால், நீங்கள் ஒருவருக்கொருவர் நேரத்தை மட்டுமே அனுபவிக்கலாம்."
        },
        {
            "question": "Can I start the Maldives trip from Chennai or Bangalore?",
            "questionTamil": "சென்னை அல்லது பெங்களூரிலிருந்து மாலத்தீவு பயணத்தைத் தொடங்க முடியுமா?",
            "answer": "Typically, you will fly to Malé (Maldives) via a direct or one-stop flight, which is common from Chennai, Bangalore, or Mumbai. Once you arrive at Velana International Airport (Malé), we include your speedboat or seaplane transfer to the resort island. We will coordinate the entire Maldives side so you just need to book your international flight to Malé.",
            "answerTamil": "பொதுவாக, சென்னை, பெங்களூரு அல்லது மும்பையிலிருந்து நேரடி அல்லது ஒரு இடைநிலையுடன் கூடிய விமானத்தில் மாலே (மாலத்தீவு) செல்லலாம். நீங்கள் வேலனா சர்வதேச விமான நிலையத்தை (மாலே) அடைந்ததும், ரிசார்ட் தீவுக்கான ஸ்பீட்போட் அல்லது சீப்ளேன் போக்குவரத்து இதில் சேர்க்கப்பட்டுள்ளது. மாலத்தீவு பகுதியில் உள்ள உள்ளூர் போக்குவரத்து ஏற்பாடுகளை முழுமையாக நாங்கள் ஒருங்கிணைப்போம்; எனவே நீங்கள் மாலே செல்லும் சர்வதேச விமானத்தை மட்டும் முன்பதிவு செய்ய வேண்டும்."
        }
    ],

    "shimla_honeymoon": [
        {
            "question": "Is the Shimla (Himachal Pradesh) honeymoon tour romantic for couples?",
            "questionTamil": "ஹிமாச்சல் (ஷிம்லா/குஃப்ரி) சுற்றுலா ஹனிமூன் தம்பதிகளுக்கு காதல் நிறைந்ததாக இருக்குமா?",
            "answer": "Yes. Shimla's quaint colonial charm and Kufri's pine forests are very romantic. We include scenic viewpoints and cozy meals at hilltop restaurants. Hotels are chosen for charm and views (many have fireplaces). The cool climate and privacy make it ideal for couples. We can also arrange special experiences like a private picnic or bonfire on request.",
            "answerTamil": "ஆம். ஷிம்லாவின் அழகான காலனித்துவ தோற்றமும் குஃப்ரியின் பைன் காடுகளும் மிகவும் காதல் நிறைந்தவை. அழகிய காட்சிகள் கிடைக்கும் இடங்களும் மலை உச்சியில் உள்ள உணவகங்களில் வசதியான உணவு அனுபவங்களும் சேர்க்கப்பட்டுள்ளன. அழகு மற்றும் காட்சிகளை அடிப்படையாகக் கொண்டு ஹோட்டல்கள் தேர்வு செய்யப்படுகின்றன (பல ஹோட்டல்களில் நெருப்பிடம் உள்ளது). குளிர்ச்சியான காலநிலையும் தனிமையான சூழலும் தம்பதிகளுக்கு சிறந்ததாக அமைகின்றன."
        },
        {
            "question": "Are travel arrangements comfortable for a honeymoon couple joining from Delhi or Chandigarh?",
            "questionTamil": "ஹனிமூன் தம்பதிகளுக்கு பயண ஏற்பாடுகள் வசதியாக இருக்குமா?",
            "answer": "Certainly. We provide a private car for your group, with a friendly driver-guide who assists you throughout. We schedule moderate sightseeing so you can relax (for example, a toy train ride or brief nature walks). Pickup is from Delhi or Chandigarh, and we ensure the journey itself is pleasant so you start your honeymoon stress-free.",
            "answerTamil": "நிச்சயமாக. உங்கள் குழுவிற்கு ஒரு தனியார் காரை வழங்குகிறோம், மேலும் முழுப் பயணத்திலும் உதவும் நட்பான ஓட்டுநர்-வழிகாட்டி இருப்பார். நீங்கள் நிதானமாக இருக்கும்படி மிதமான அளவிலான சுற்றுலா நடவடிக்கைகளைத் திட்டமிடுகிறோம் (உதாரணமாக, டாய் ரயில் பயணம் அல்லது குறுகிய இயற்கை நடைப்பயணம்). டெல்லி அல்லது சண்டிகரிலிருந்து பிக்கப் வசதி உள்ளது, மேலும் பயணமே (கார் அல்லது வோல்வோ) வசதியாகவும் இனிமையாகவும் இருக்கும் வகையில் ஏற்பாடு செய்வதால், மனஅழுத்தமின்றி உங்கள் ஹனிமூனைத் தொடங்கலாம்."
        }
    ],

    "manali_honeymoon": [
        {
            "question": "Is this Manali honeymoon package suitable for couples?",
            "questionTamil": "இந்த மணாலி ஹனிமூன் சுற்றுலா தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. The Manali honeymoon itinerary is designed for romance in the mountains. We include scenic viewpoints, cozy mountain resorts, and optional activities like snow walks and valley excursions. Special honeymoon arrangements (room decoration, candlelight dinner) can be added on request.",
            "answerTamil": "ஆம். இந்த மணாலி ஹனிமூன் பயணத் திட்டம் காதல் நிறைந்த அனுபவத்திற்காக வடிவமைக்கப்பட்டுள்ளது. அழகிய மலை ரிசார்ட்கள், பனி நடைப்பயணங்கள் மற்றும் பள்ளத்தாக்கு சுற்றுப்பயணங்கள் போன்ற விருப்ப நடவடிக்கைகள் இதில் அடங்கும். சிறப்பு ஹனிமூன் ஏற்பாடுகளை (மலர் அலங்காரம், மெழுகுவர்த்தி இரவு உணவு) கோரிக்கையின் பேரில் சேர்க்கலாம்."
        },
        {
            "question": "Can we join the Manali honeymoon tour from Delhi or Chandigarh?",
            "questionTamil": "டெல்லி அல்லது சண்டிகரிலிருந்து மணாலி சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Yes. The tour usually starts in Delhi or Chandigarh. You can reach Manali by road from either city and we will arrange pickups from the nearest airports or railway stations. We handle all transfers so you can begin your romantic getaway right from the pickup point.",
            "answerTamil": "ஆம். மணாலி சுற்றுலாக்கள் பெரும்பாலும் டெல்லி அல்லது சண்டிகரில் இருந்து தொடங்குகின்றன. நீங்கள் டெல்லிக்கு விமானத்தில் வந்தால், விமான நிலையம் அல்லது ரயில் நிலையத்தில் உங்களை பிக்கப் செய்து சுற்றுலா அழைத்துச் செல்வோம்."
        }
    ],

    "shimla_manali_honeymoon": [
        {
            "question": "Is the Shimla–Manali honeymoon package suitable for couples?",
            "questionTamil": "இந்த ஷிம்லா–மணாலி ஹனிமூன் சுற்றுலா தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. This combined package offers the best of both hill stations for couples. Shimla offers colonial-era charm and Manali offers scenic mountain landscapes. We arrange cozy hotels, special honeymoon setups, and a private car throughout, making it a perfect romantic getaway.",
            "answerTamil": "ஆம். இந்த ஒருங்கிணைந்த பேக்கேஜ் தம்பதிகளுக்கு இரண்டு மலை வாசஸ்தலங்களிலும் சிறந்த அனுபவத்தை வழங்குகிறது. ஷிம்லாவின் காலனித்துவ தோற்றமும் மணாலியின் அழகிய மலைப்பகுதிகளும் இதில் அடங்கும். வசதியான ஹோட்டல்கள், சிறப்பு ஹனிமூன் ஏற்பாடுகள் மற்றும் ஒரு தனியார் கார் முழுவதும் வழங்கப்படுகிறது."
        },
        {
            "question": "Can we join the Shimla–Manali honeymoon tour from Delhi or Chandigarh?",
            "questionTamil": "டெல்லி அல்லது சண்டிகரிலிருந்து ஷிம்லா–மணாலி சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Certainly. The tour starts from Delhi or Chandigarh. If you fly into Delhi, we can pick you up at the airport or railway station and drive to Shimla (8–9 hours). Alternatively, you can fly into Chandigarh (closer) and we will begin from there. We coordinate all airport and train pickups.",
            "answerTamil": "நிச்சயமாக. சுற்றுலாக்கள் பெரும்பாலும் டெல்லி அல்லது சண்டிகரில் இருந்து தொடங்குகின்றன. நீங்கள் டெல்லிக்கு விமானத்தில் வந்தால், விமான நிலையம் அல்லது ரயில் நிலையத்தில் உங்களை பிக்கப் செய்து ஒன்றாக ஷிம்லாவுக்கு பயணம் செய்யலாம். மாற்றாக, அருகிலுள்ள சண்டிகருக்கு விமானத்தில் வந்து அங்கிருந்து சுற்றுலாவைத் தொடங்கலாம்."
        }
    ],

    "andaman_honeymoon": [
        {
            "question": "Is this Andaman honeymoon package ideal for couples?",
            "questionTamil": "இந்த அந்தமான் ஹனிமூன் பேக்கேஜ் தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. The Andaman honeymoon itinerary features romantic beach resorts, sunset cruises, and serene island getaways. We include private beach experiences and couple-friendly activities like glass-bottom boat rides and snorkeling. Resorts on Havelock and Neil Island offer couples' cottages for a truly private experience.",
            "answerTamil": "ஆம். இந்த அந்தமான் ஹனிமூன் பயணத் திட்டத்தில் ரொமாண்டிக் கடற்கரை ரிசார்ட்கள் மற்றும் அமைதியான தீவு பயணங்கள் அடங்கும். பவளப்பாறைகளைப் பார்வையிடும் கண்ணாடித் தள படகு சவாரி போன்ற தம்பதிகளுக்கு ஏற்ற செயல்பாடுகள் சேர்க்கப்பட்டுள்ளன. ஹேவ்லாக்/நீல் தீவுகளில் உள்ள ரிசார்ட்களில் தம்பதிகளுக்கான குடில்கள் இருப்பதால் சிறந்த அனுபவம் கிடைக்கும்."
        },
        {
            "question": "Can I join the Andaman honeymoon tour from Chennai or Kolkata?",
            "questionTamil": "சென்னை அல்லது கொல்கத்தாவிலிருந்து அந்தமான் சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Certainly. You will fly into Port Blair (IXZ airport) since it is the archipelago hub. Port Blair has direct flights from Chennai, Kolkata, and Delhi. We will meet you at Port Blair airport to begin the tour. All island transfers (ferries and boats) are arranged, so after arrival you just relax and let us handle the logistics.",
            "answerTamil": "நிச்சயமாக. தீவுக்கூட்டத்தின் முக்கிய மையமாக போர்ட் பிளேர் இருப்பதால், நீங்கள் போர்ட் பிளேர் (IXZ விமான நிலையம்) செல்ல விமானத்தில் வர வேண்டும். போர்ட் பிளேருக்கு சென்னை, கொல்கத்தா மற்றும் டெல்லியிலிருந்து நேரடி விமானங்கள் உள்ளன. சுற்றுலாவைத் தொடங்க போர்ட் பிளேர் விமான நிலையத்தில் உங்களைச் சந்திப்போம். அனைத்து தீவு இடமாற்றங்களும் (படகு/பெர்ரி) ஏற்பாடு செய்யப்படுவதால், நீங்கள் வந்த பிறகு ஓய்வெடுத்துக்கொள்ளலாம்."
        }
    ],

    "andaman_normal": [
        {
            "question": "Is the Andaman tour suitable for families and couples?",
            "questionTamil": "அந்தமான் சுற்றுலா குடும்பங்கள் மற்றும் தம்பதிகளுக்கு ஏற்றதா?",
            "answer": "Yes. The itinerary blends beach relaxation and easy nature activities. We include calm attractions like Radhanagar Beach (ranked among the world's best) and a glass-bottom boat ride for coral viewing, which appeal to children and couples alike. Family-friendly beaches and simple sightseeing mean even seniors can participate comfortably.",
            "answerTamil": "ஆம். இந்த பயணத் திட்டத்தில் கடற்கரை ஓய்வு மற்றும் எளிதான இயற்கை சார்ந்த செயல்பாடுகள் இணைக்கப்பட்டுள்ளன. உலகின் சிறந்த கடற்கரைகளில் ஒன்றாகக் கருதப்படும் ராதாநகர் கடற்கரை மற்றும் பவளப்பாறைகளைப் பார்வையிடும் கண்ணாடித் தள படகு சவாரி போன்ற அமைதியான அனுபவங்கள் இடம்பெறுகின்றன; இவை குழந்தைகள் மற்றும் தம்பதிகள் இருவருக்கும் பிடிக்கும். குடும்பங்களுக்கு ஏற்ற கடற்கரைகள் மற்றும் எளிய சுற்றுலா நடவடிக்கைகள் இருப்பதால் மூத்த குடிமக்களும் பங்கேற்கலாம்."
        },
        {
            "question": "Can I join the Andaman tour from Chennai or Kolkata?",
            "questionTamil": "சென்னை அல்லது கொல்கத்தாவிலிருந்து அந்தமான் சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Certainly. You will fly into Port Blair (IXZ airport) since it is the archipelago hub. Port Blair has direct flights from Chennai, Kolkata, and Delhi. We will meet you at Port Blair airport to begin the tour. All island transfers (ferries and boats) are arranged, so after arrival you just relax and let us handle the logistics.",
            "answerTamil": "நிச்சயமாக. தீவுக்கூட்டத்தின் முக்கிய மையமாக போர்ட் பிளேர் இருப்பதால், நீங்கள் போர்ட் பிளேர் (IXZ விமான நிலையம்) செல்ல விமானத்தில் வர வேண்டும். போர்ட் பிளேருக்கு சென்னை, கொல்கத்தா மற்றும் டெல்லியிலிருந்து நேரடி விமானங்கள் உள்ளன. சுற்றுலாவைத் தொடங்க போர்ட் பிளேர் விமான நிலையத்தில் உங்களைச் சந்திப்போம். அனைத்து தீவு இடமாற்றங்களும் (படகு/பெர்ரி) ஏற்பாடு செய்யப்படுவதால், நீங்கள் வந்த பிறகு ஓய்வெடுத்து, மீதமுள்ள பயண ஏற்பாடுகளை நாங்கள் கவனித்துக்கொள்வோம்."
        }
    ],

    "madurai_local": [
        {
            "question": "Is this Madurai tour suitable for families and seniors?",
            "questionTamil": "இந்த மதுரை சுற்றுலா குடும்பங்கள் மற்றும் மூத்த குடிமக்களுக்கு ஏற்றதா?",
            "answer": "Yes. The Madurai tour is designed for comfort and convenience. It includes easy-paced sightseeing at famous temples and cultural landmarks. Our guide assists elderly travelers at each stop, and the itinerary allows sufficient time for rest breaks, making it ideal for families and senior pilgrims.",
            "answerTamil": "ஆம். மதுரை சுற்றுலா வசதியாகவும் சௌகரியமாகவும் வடிவமைக்கப்பட்டுள்ளது. புகழ்பெற்ற கோயில்கள் மற்றும் கலாச்சார அடையாளங்களில் எளிதான சுற்றுலா இதில் அடங்கும். எங்கள் வழிகாட்டி ஒவ்வொரு இடத்திலும் மூத்த பயணிகளுக்கு உதவுகிறார், மேலும் பயணத்திட்டம் ஓய்வு இடைவேளைக்கு போதுமான நேரத்தை அனுமதிக்கிறது."
        },
        {
            "question": "From where does the Madurai tour depart?",
            "questionTamil": "மதுரை சுற்றுலா எங்கிருந்து புறப்படுகிறது?",
            "answer": "The tour departs from Madurai city, typically from your hotel, railway station, or airport. We arrange pickup at a convenient time and can also accommodate travelers coming from nearby cities or towns.",
            "answerTamil": "இந்த சுற்றுப்பயணம் மதுரை நகரத்திலிருந்து புறப்படுகிறது, பொதுவாக உங்கள் ஹோட்டல், ரயில் நிலையம் அல்லது விமான நிலையத்திலிருந்து. வசதியான நேரத்தில் பிக்கப் ஏற்பாடு செய்கிறோம்."
        }
    ],

    "manali_normal": [
        {
            "question": "Is this Manali tour suitable for senior citizens and families?",
            "questionTamil": "இந்த மணாலி சுற்றுலா மூத்த குடிமக்களுக்கு ஏற்றதா?",
            "answer": "Yes. Manali is at a moderate altitude of around 2,000 metres. We ensure the tour has rest stops (e.g. in Kullu) to help travelers acclimatize. Vehicles are spacious and stops are frequent. Hotels are selected for easy access, and the itinerary includes light sightseeing (temples, parks, and easy nature walks) so seniors can enjoy the Himalayas without strenuous activity.",
            "answerTamil": "ஆம். மணாலி சுமார் 2,000 மீட்டர் உயரத்தில் அமைந்துள்ளது, இது மிதமான உயரமாகும். உயரத்திற்கு உடல் பழகுவதற்காக பயணத்தில் ஓய்வு இடங்களை (உதாரணமாக, குல்லுவில்) ஏற்பாடு செய்கிறோம். வாகனங்கள் விசாலமானவை மற்றும் அடிக்கடி ஓய்வு இடங்கள் இருக்கும். தேவையானபோது குறைந்த படிக்கட்டுகள் கொண்ட ஹோட்டல்களைத் தேர்வு செய்கிறோம். பயணத் திட்டத்தில் கோயில்கள், பூங்காக்கள் போன்ற எளிதான சுற்றுலா மற்றும் இயற்கை நடைப்பயணங்கள் இடம்பெறுவதால், கடினமான செயல்பாடுகள் இல்லாமல் மூத்த குடிமக்கள் இமயமலையை ரசிக்கலாம்."
        },
        {
            "question": "Does this Manali tour include Volvo bus travel from Delhi?",
            "questionTamil": "மணாலி சுற்றுலாவில் வோல்வோ பேருந்து பயணம் இடம்பெறுமா?",
            "answer": "Yes. Our Volvo package option means we travel overnight from Delhi to Manali in an AC Volvo sleeper bus. You board in Delhi in the evening, rest in a comfortable reclining seat, and wake up in the mountains. The package includes round-trip Volvo bus tickets, hotel stay in Manali, daily meals, and sightseeing at Solang Valley and temples.",
            "answerTamil": "ஆம். எங்களின் \"Volvo package\" விருப்பத்தில் டெல்லியிலிருந்து மணாலிக்கு இரவு நேரத்தில் AC வோல்வோ பேருந்தில் பயணம் செய்கிறோம். இரவு முழுவதும் பயணம் செய்யும் போது நீங்கள் வசதியான ஸ்லீப்பர் இருக்கையில் ஓய்வெடுக்கலாம். இந்த பேக்கேஜில் இருவழி வோல்வோ பேருந்து டிக்கெட்டுகள், மணாலியில் 3 இரவுகள் ஹோட்டல் தங்குமிடம், தினசரி காலை உணவு/இரவு உணவு மற்றும் உள்ளூர் சுற்றுலா (சோலாங் பள்ளத்தாக்கு, கோயில்கள்) ஆகியவை அடங்கும்."
        }
    ],

    "shimla_normal": [
        {
            "question": "Is the Shimla tour package family-friendly and accessible for seniors?",
            "questionTamil": "ஷிம்லா சுற்றுலா பேக்கேஜ் குடும்பங்களுக்கு ஏற்றதா மற்றும் மூத்த குடிமக்களுக்கு எளிதாக அணுகக்கூடியதா?",
            "answer": "Yes. Shimla's town is mostly flat along Mall Road and we stay in hotels with lifts. The drive from Chandigarh or Delhi is scenic but smooth. Daily sightseeing is limited (toy train ride, local markets) so the pace is gentle and easy for senior travelers. Families and couples both enjoy the cool weather and heritage sites.",
            "answerTamil": "ஆம். ஷிம்லா நகரம் மால் ரோடு பகுதியில் பெரும்பாலும் சமதளமாக உள்ளது; லிப்ட் வசதி கொண்ட ஹோட்டல்களில் தங்குகிறோம். சண்டிகர் அல்லது டெல்லியிலிருந்து செல்லும் சாலைப் பயணம் அழகான காட்சிகளுடன் சீராக இருக்கும். தினசரி சுற்றுலா நடவடிக்கைகள் (டாய் ரயில் பயணம், உள்ளூர் சந்தைகள்) குறைவாக இருப்பதால் பயண வேகம் நிதானமாக இருக்கும். இதனால் மூத்த பயணிகளுக்கும் இது எளிதாக இருக்கும். கடினமான மலை நடைப்பயணம் இல்லாமல் குடும்பங்களும் தம்பதிகளும் குளிர்ச்சியான காலநிலை மற்றும் பாரம்பரிய இடங்களை ரசிக்கலாம்."
        },
        {
            "question": "Can we join the Shimla tour from Delhi or Chandigarh?",
            "questionTamil": "டெல்லி அல்லது சண்டிகரிலிருந்து ஷிம்லா சுற்றுலாவில் இணைய முடியுமா?",
            "answer": "Certainly. Shimla tours often start from Delhi or Chandigarh. If you fly into Delhi, we can pick you up at the airport or railway station and drive together to Shimla (8–9 hours). Alternatively, you can fly into Chandigarh (closer) and we will begin the tour there. We coordinate all airport and train pickups.",
            "answerTamil": "நிச்சயமாக. ஷிம்லா சுற்றுலாக்கள் பெரும்பாலும் டெல்லி அல்லது சண்டிகரில் இருந்து தொடங்குகின்றன. நீங்கள் டெல்லிக்கு விமானத்தில் வந்தால், விமான நிலையம் அல்லது ரயில் நிலையத்தில் உங்களை பிக்கப் செய்து ஒன்றாக ஷிம்லாவுக்கு (8–9 மணி நேரம்) பயணம் செய்யலாம். மாற்றாக, அருகிலுள்ள சண்டிகருக்கு விமானத்தில் வந்து அங்கிருந்து சுற்றுலாவைத் தொடங்கலாம். இரு நகரங்களிலும் விமான நிலையம்/ரயில் நிலைய பிக்கப் ஏற்பாடுகளை நாங்கள் ஒருங்கிணைப்போம்."
        }
    ],
}


def classify_package(title: str, pkg_id: str) -> str | None:
    t = title.lower()
    pid = pkg_id.strip()

    # Manual ID overrides (from fix_skipped_faqs)
    SKIPPED_ID_MAP = {
        "9803": "maldives_honeymoon",
        "9603": "andaman_honeymoon",
        "9201": "tamilnadu_honeymoon",
        "9202": "tamilnadu_honeymoon",
        "9203": "tamilnadu_honeymoon",
        "5001": "karnataka_normal",
        "5002": "karnataka_normal",
        "5003": "karnataka_normal",
        "5004": "karnataka_normal",
        "5005": "karnataka_normal",
        "5006": "karnataka_normal",
        "8101": "shimla_normal",
        "8102": "shimla_normal",
        "8103": "shimla_normal",
        "8105": "shimla_normal",
    }
    if pid in SKIPPED_ID_MAP:
        return SKIPPED_ID_MAP[pid]

    if pid in {"9301", "9302", "9303", "9304"}: return "karnataka_honeymoon"
    if pid == "9109" or "goa honeymoon" in t: return "goa_honeymoon"
    if pid in {"3090","3091","3092","3093","3094","3095","3096"} or ("karnataka" in t and "honeymoon" not in t): return "karnataka_normal"
    if "kerala" in t: return "kerala_normal"
    if "tamil nadu" in t or "tamilnadu" in t or "thanjavur" in t or "trichy" in t or "kumbakonam" in t: return "tamilnadu_normal"
    if any(x in t for x in ["delhi", "golden triangle", "agra", "jaipur"]): return "delhi_golden_triangle"
    if any(x in t for x in ["varanasi", "kasi", "kashi", "ayodhya", "gaya", "prayagraj"]): return "varanasi_kasi"
    if "shirdi" in t: return "shirdi"
    if "kashmir" in t and "honeymoon" in t: return "kashmir_honeymoon"
    if "kashmir" in t: return "kashmir_normal"
    if "sikkim" in t or "gangtok" in t or "pelling" in t: return "sikkim_honeymoon"
    if "maldive" in t: return "maldives_honeymoon"
    if "shimla and manali" in t or "shimla & manali" in t: return "shimla_manali_honeymoon"
    if "shimla" in t and "honeymoon" in t: return "shimla_honeymoon"
    if "manali" in t and "honeymoon" in t: return "manali_honeymoon"
    if "manali" in t: return "manali_normal"
    if "andaman" in t and "honeymoon" in t: return "andaman_honeymoon"
    if "andaman" in t or "port blair" in t: return "andaman_normal"
    if "madurai" in t: return "madurai_local"

    return None

def build_faq_snippet(category: str) -> str:
    faqs = FAQS[category]
    lines = ['        "faq": [']
    for i, faq in enumerate(faqs):
        comma = "," if i < len(faqs) - 1 else ""
        lines.append('            {')
        q = faq["question"].replace('"', '\\"')
        qt = faq["questionTamil"].replace('"', '\\"')
        a = faq["answer"].replace('"', '\\"')
        at = faq["answerTamil"].replace('"', '\\"')
        lines.append(f'                "question": "{q}",')
        lines.append(f'                "questionTamil": "{qt}",')
        lines.append(f'                "answer": "{a}",')
        lines.append(f'                "answerTamil": "{at}"')
        lines.append(f'            }}{comma}')
    lines.append('        ],')
    return "\n".join(lines)


with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# We need to remove the existing "faq": [ ... ], blocks and re-insert them
# The existing block starts with `        "faq": [` and ends with `        ],`
# But it might be safer to just use regex to strip out the whole `"faq": [ ... ],` completely.
content = re.sub(r'\n\s+"faq": \[\s+(?:\{[^}]+\},?\s+)+\],\n', '\n', content)
content = re.sub(r'\n\s+"faq": \[\s+(?:\{[\s\S]*?\},?\s+)+\],\n', '\n', content)

lines = content.split("\n")
output_lines = []
current_title = ""
i = 0
inserted = 0

id_line_re = re.compile(r'^(\s+)"id":\s*"(\w+)"(\s*)$')
pkg_title_re = re.compile(r'^        "title":\s*"([^"]+)"')

while i < len(lines):
    line = lines[i]

    m = pkg_title_re.match(line)
    if m:
        current_title = m.group(1)

    m_id = id_line_re.match(line)
    if m_id:
        pkg_id = m_id.group(2)
        category = classify_package(current_title, pkg_id)

        if category:
            faq_snippet = build_faq_snippet(category)
            output_lines.append(faq_snippet)
            inserted += 1

    output_lines.append(line)
    i += 1

new_content = "\n".join(output_lines)

with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"\nDone! Updated bilingual FAQs for: {inserted} packages")
