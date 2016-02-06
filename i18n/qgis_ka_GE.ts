<!DOCTYPE TS><TS>
<context>
    <name>CoordinateCapture</name>
    <message>
        <source>Coordinate Capture</source>
        <translation>კოორდინატის აღება</translation>
    </message>
    <message>
        <source>Click on the map to view coordinates and capture to clipboard.</source>
        <translation>დააწკაპუნეთ რუკაზე კოორდინატების სანახავად და ბუფერში აღსაბეჭდად.</translation>
    </message>
    <message>
        <source>&amp;Coordinate Capture</source>
        <translation>&amp;კოორდინატის აღება</translation>
    </message>
    <message>
        <source>Click to select the CRS to use for coordinate display</source>
        <translation>დააწკაპუნეთ CRS -ის ამოსარჩევად, რომელიც გამოიყენება კოორდინატის გამოსახატად</translation>
    </message>
    <message>
        <source>Coordinate in your selected CRS</source>
        <translation>კოორდინატი თქვენს ამორჩეულ CRS -ში </translation>
    </message>
    <message>
        <source>Coordinate in map canvas coordinate reference system</source>
        <translation>კოორდინატი რუკის გამოსახულების კოორდინატთა სისტემაში </translation>
    </message>
    <message>
        <source>Copy to clipboard</source>
        <translation>ბუფერში კოპირება</translation>
    </message>
    <message>
        <source>Click to enable mouse tracking. Click the canvas to stop</source>
        <translation>დააწკაპუნეთ რათა ჩართოთ შესაძლებლობა მაუსით ნავიგაციის. დააწკაპუნეთ ნახატზე გასაჩერებლად</translation>
    </message>
</context>
<context>
    <name>CoordinateCaptureGui</name>
    <message>
        <source>Welcome to your automatically generated plugin!</source>
        <translation>კეთილი იყოს თქვენი მობრძანება ავტომატურად გენერირებად ჩანართში!</translation>
    </message>
    <message>
        <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
        <translation>ეს არის მხოლოდ საწყისი წერტილი. საჭიროა შეცვალოთ კოდი რათა ის გახდეს გამოსადეგი... გააგრძელეთ კითხვა მეტი ინფორმაციის მისაღებად.</translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation>დოკუმენტაცია:</translation>
    </message>
    <message>
        <source>You really need to read the QGIS API Documentation now at:</source>
        <translation>თქვენ ნამდვილად გესაჭიროებათ წაიკითხოთ QGIS API -ს დოკუმენტაცია ახლა:</translation>
    </message>
    <message>
        <source>In particular look at the following classes:</source>
        <translation> კონკრეტული განხილვა შემდეგი კლასების:</translation>
    </message>
    <message>
        <source>QgsPlugin is an ABC that defines required behaviour your plugin must provide. See below for more details.</source>
        <translation>QgsPlugin არის ABC რომელიც განსაზღვრავს მოთხოვნად ხასიათს რომელიც თქვენმა ჩანართმა უნდა უზრუნველყოს. მეტი დეტალისთვის იხილეთ ქვემოთ.</translation>
    </message>
    <message>
        <source>What are all the files in my generated plugin directory for?</source>
        <translation>რისთვის არის ყველა ფაილი ჩემს მიერ დაგენერირებული ჩანართის დირექტორიაში?</translation>
    </message>
    <message>
        <source>This is the generated CMake file that builds the plugin. You should add you application specific dependencies and source files to this file.</source>
        <translation>ეს არის გენერირებადი CMake ფაილი რომელსაც ქმნის ჩანართი. თქვენ თქვენი პროგრამის მიხედვით სპეციფიკური დამოკიდებულებები და წყაროს ფაილები უნდა დაუმატოთ ამ ფაილს.</translation>
    </message>
    <message>
        <source>This is the class that provides the &apos;glue&apos; between your custom application logic and the QGIS application. You will see that a number of methods are already implemented for you - including some examples of how to add a raster or vector layer to the main application map canvas. This class is a concrete instance of the QgisPlugin interface which defines required behaviour for a plugin. In particular, a plugin has a number of static methods and members so that the QgsPluginManager and plugin loader logic can identify each plugin, create an appropriate menu entry for it etc. Note there is nothing stopping you creating multiple toolbar icons and menu entries for a single plugin. By default though a single menu entry and toolbar button is created and its pre-configured to call the run() method in this class when selected. This default implementation provided for you by the plugin builder is well documented, so please refer to the code for further advice.</source>
        <translation>ეს არის კლასი რომელიც წარმოადგენს &quot;წებოს&quot; თქვენს მიერ შედგენილი პროგრამის ლოგიკასა და QGIS პროგრამას შორის. თქვენ დაინახავთ რომ რიგი მეთოდების უკვე რეალიზებულია თქვენთვის – რომელიც შეიცავს ზოგიერთ მაგალითს იმისა თუ როგორ დაემატოს რასტრული ან  ვექტორული შრე ძირითადი პროგრამის რუკის ნახატს. ეს კლასი არის კონკრეტული შემთხვევა QgisPlugin გარემოსი, რომელიც განსაზღვრავს მოთხოვნად მუშაობის რეჟიმს ჩანართისთვის. კონკრეტულად, ჩანართს აქვს სტატიკური მეთოდების  და წევრების გარკვეული რაოდენობა, ამგვარად  QgsPluginManager და ჩანართის ჩამტვირთავის ლოგიკას შეუძლიათ მოახდონონ თითოეული ჩანართის იდენტიფიკაცია, შესაბამისი მენიუს კომპონენტის შექმნა. შენიშნავთ რომ არ არსებობს წინააღმდეგობა რომ შექმნათ  მრავალრიცხოვანი ინსტრუმენტების პანელის ხატულებისა და მენიუს ელემენტების შესაქმნელად ერთი ჩანართისთვის. ამგვარად საწყისად ერთი მენიუს ელემენტი და  ინტსტრუმენტების პანელის ღილაკი იქმნება და ის არის წინასწარ დაკონფიგურირებული run() მეთოდის გამოსაძახებლად ამ კლასში როდესაც არჩეულია. ეს საწყისი რეალიზაცია წარმოგდგენილი თქვენთვის ჩანართის შემქმნელის მიერ არის კარგად დოკუმენტირებული, ასე რომ გთხოვთ მიყვეთ კოდს შემდეგი რჩევებისთვის.</translation>
    </message>
    <message>
        <source>This is a Qt designer &apos;ui&apos; file. It defines the look of the default plugin dialog without implementing any application logic. You can modify this form to suite your needs or completely remove it if your plugin does not need to display a user form (e.g. for custom MapTools).</source>
        <translation>ეს არის Qt დიზაინერის &apos;ui&apos; ფაილი. ის განსაზღვრავს საწყისი ჩანართის დიალოგის შესახედაობას პროგრამის ლოგიკის განხორციელების გარეშე. თქვენ შეგიძლიათ ამ ფორმის შეცვლა თქვენი მოთხოვნილებების შესაბამისად ან შეგიძლიათ მთლიანად წაშალოთ ის თუ თქვენ ჩანართს არ სჭირდება მომხმარებლის ფორმის ჩვენება (მაგალითად მორგებული MapTools).</translation>
    </message>
    <message>
        <source>This is the concrete class where application logic for the above mentioned dialog should go. The world is your oyster here really....</source>
        <translation>ეს არის კონკრეტული კლასი, სადაც პროგრამის ლოგიკა ზემოთ ხსენებული დიალოგისთვის უნდა განხორციელდეს. აქ ნამდვილად ყველაფერი თქვენს ხელთაა....</translation>
    </message>
    <message>
        <source>This is the Qt4 resources file for your plugin. The Makefile generated for your plugin is all set up to compile the resource file so all you need to do is add your additional icons etc using the simple xml file format. Note the namespace used for all your resources e.g. (&apos;:/Homann/&apos;). It is important to use this prefix for all your resources. We suggest you include any other images and run time data in this resurce file too.</source>
        <translation>ეს არის Qt4 ფაილი თქვენი ჩანართისთვის.  თქვენი ჩანართისთვის  დაგენერირებული Makefile ფაილში ყველაფერი არის დაყენებული რესურსის ფაილის შესაქმნელად, ასე რომ ყველაფერი რაც თქვენ გჭირდებათ რომ გააკეთოთ, არის ის რომ დაამატოთ თქვენი დამატებითი ხატულები და ა.შ. მარტივი xml ფაილის ფორმატის გამოყენებით. შევნიშნოთ სახელების სივრცე გამოყენებული თქვენი ყველა რესურსისთვის მაგალითად (&apos;:/Homann/&apos;). მნიშვნელოვანია თქვენი ყველა რესურსისთვის პრეფიქსის გამოყენება. ჩვენ გთავაზობთ რომ ჩართოთ ნებისმიერი სხვა სურათები და აგრეთვე გაუშვათ დროის მონაცემი  რესურსის ფაილში.</translation>
    </message>
    <message>
        <source>This is the icon that will be used for your plugin menu entry and toolbar icon. Simply replace this icon with your own icon to make your plugin disctinctive from the rest.</source>
        <translation>ეს არის ხატულა რომელიც გამოიყენება თქვენი ჩანართის მენიუს ელემენტად და ინსტრუმენტების პანელის ხატულად. მარტივად შეცვალეთ ეს ხატულა თქვენი ხატულით რათა თქვენი ჩანართი განსხვავდებოდეს დანარჩენებისგან.</translation>
    </message>
    <message>
        <source>This file contains the documentation you are reading now!</source>
        <translation>ფაილი შეიცავს იმ დოკუმენტაციას, რომელსაც თქვენ ახლა კითხულობთ!</translation>
    </message>
    <message>
        <source>Getting developer help:</source>
        <translation>დახმარების მიღება დამმუშავებლისთვის:</translation>
    </message>
    <message>
        <source>For Questions and Comments regarding the plugin builder template and creating your features in QGIS using the plugin interface please contact us via:</source>
        <translation>ჩანართის კონსტრუქტორის შაბლონთან და QGIS –ის ინტერფეისის გამოყენებით თქვენი ობიექტების შექმნასთან დაკავშირებულ კითხვებზე და კომენტარებზე გთხოვთ დაგვიკავშირდეთ:</translation>
    </message>
    <message>
        <source>&lt;li&gt; the QGIS developers mailing list, or &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</source>
        <translation>&lt;li&gt;QGIS დეველოპერების საფოსტო სია, ან &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</translation>
    </message>
    <message>
        <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
        <translation>QGIS არის გავრცელებული Gnu Public License –ის ქვეშ. თუ თქვენ შექმნით სასარგებლო ჩანართს გთხოვთ ის განიხილოთ როგორც წვილილის შეტანა მთლიან საქმეში.</translation>
    </message>
    <message>
        <source>Have fun and thank you for choosing QGIS.</source>
        <translation>იხალისეთ და მადლობას გიხდით QGIS-ის არჩევისთვის.</translation>
    </message>
</context>
<context>
    <name>CoordinateCaptureGuiBase</name>
    <message>
        <source>QGIS Plugin Template</source>
        <translation>QGIS-ის ჩანართის შაბლონი</translation>
    </message>
    <message>
        <source>Plugin Template</source>
        <translation>ჩანართის შაბლონი</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <source>Connect</source>
        <translation>შეერთება</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>დათვალიერება</translation>
    </message>
    <message>
        <source>OGR Converter</source>
        <translation>OGR გადამყვანი</translation>
    </message>
    <message>
        <source>Could not establish connection to: &apos;</source>
        <translation>კავშირის დამყარება ვერ ხერხდება: ’</translation>
    </message>
    <message>
        <source>Open OGR file</source>
        <translation>OGR ფაილის გახსნა</translation>
    </message>
    <message>
        <source>OGR File Data Source (*.*)</source>
        <translation>OGR ფაილის მონაცემთა წყარო (*.*)</translation>
    </message>
    <message>
        <source>Open Directory</source>
        <translation>დირექტორიის გახსნა</translation>
    </message>
    <message>
        <source>Input OGR dataset is missing!</source>
        <translation>აკლია შესატანი OGR მონაცემთა ნაკრები!</translation>
    </message>
    <message>
        <source>Input OGR layer name is missing!</source>
        <translation>აკლია შესატანი OGR შრის სახელი!</translation>
    </message>
    <message>
        <source>Target OGR format not selected!</source>
        <translation>სამიზნე OGR ფორმატი არაა ამორჩეული!</translation>
    </message>
    <message>
        <source>Output OGR dataset is missing!</source>
        <translation>აკლია გამოსატანი OGR მონაცემთა ნაკრები!</translation>
    </message>
    <message>
        <source>Output OGR layer name is missing!</source>
        <translation>აკლია გამოსატანი OGR შრის სახელი!</translation>
    </message>
    <message>
        <source>Successfully translated layer &apos;</source>
        <translation>წარმატებით გადათარგმნილი შრე &apos;</translation>
    </message>
    <message>
        <source>Failed to translate layer &apos;</source>
        <translation>შრის თარგმნის ოპერაცია ვერ შესრულდა ’</translation>
    </message>
    <message>
        <source>Successfully connected to: &apos;</source>
        <translation>წარმატებით დაუკავშირდა: ’</translation>
    </message>
    <message>
        <source>Choose a file name to save to</source>
        <translation>ამოირჩიეთ ფაილის სახელი შესანახად</translation>
    </message>
</context>
<context>
    <name>Gui</name>
    <message>
        <source>Welcome to your automatically generated plugin!</source>
        <translation>კეთილი იყოს თქვენი მობრძანება ავტომატურად გენერირებად ჩანართში!</translation>
    </message>
    <message>
        <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
        <translation>ეს არის მხოლოდ საწყისი წერტილი. საჭიროა შეცვალოთ კოდი რათა ის გახდეს გამოსადეგი... გააგრძელეთ კითხვა მეტი ინფორმაციის მისაღებად.</translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation>დოკუმენტაცია:</translation>
    </message>
    <message>
        <source>You really need to read the QGIS API Documentation now at:</source>
        <translation>თქვენ ნამდვილად გესაჭიროებათ წაიკითხოთ QGIS API -ს დოკუმენტაცია ახლა:</translation>
    </message>
    <message>
        <source>In particular look at the following classes:</source>
        <translation> კონკრეტული განხილვა შემდეგი კლასების:</translation>
    </message>
    <message>
        <source>QgsPlugin is an ABC that defines required behaviour your plugin must provide. See below for more details.</source>
        <translation>QgsPlugin არის ABC რომელიც განსაზღვრავს მოთხოვნად ხასიათს რომელიც თქვენმა ჩანართმა უნდა უზრუნველყოს. მეტი დეტალისთვის იხილეთ ქვემოთ.</translation>
    </message>
    <message>
        <source>What are all the files in my generated plugin directory for?</source>
        <translation>რისთვის არის ყველა ფაილი ჩემს მიერ დაგენერირებული ჩანართის დირექტორიაში?</translation>
    </message>
    <message>
        <source>This is the generated CMake file that builds the plugin. You should add you application specific dependencies and source files to this file.</source>
        <translation>ეს არის გენერირებადი CMake ფაილი რომელსაც ქმნის ჩანართი. თქვენ თქვენი პროგრამის მიხედვით სპეციფიკური დამოკიდებულებები და წყაროს ფაილები უნდა დაუმატოთ ამ ფაილს.</translation>
    </message>
    <message>
        <source>This is the class that provides the &apos;glue&apos; between your custom application logic and the QGIS application. You will see that a number of methods are already implemented for you - including some examples of how to add a raster or vector layer to the main application map canvas. This class is a concrete instance of the QgisPlugin interface which defines required behaviour for a plugin. In particular, a plugin has a number of static methods and members so that the QgsPluginManager and plugin loader logic can identify each plugin, create an appropriate menu entry for it etc. Note there is nothing stopping you creating multiple toolbar icons and menu entries for a single plugin. By default though a single menu entry and toolbar button is created and its pre-configured to call the run() method in this class when selected. This default implementation provided for you by the plugin builder is well documented, so please refer to the code for further advice.</source>
        <translation>ეს არის კლასი რომელიც წარმოადგენს &quot;წებოს&quot; თქვენს მიერ შედგენილი პროგრამის ლოგიკასა და QGIS პროგრამას შორის. თქვენ დაინახავთ რომ რიგი მეთოდების უკვე რეალიზებულია თქვენთვის – რომელიც შეიცავს ზოგიერთ მაგალითს იმისა თუ როგორ დაემატოს რასტრული ან  ვექტორული შრე ძირითადი პროგრამის რუკის ნახატს. ეს კლასი არის კონკრეტული შემთხვევა QgisPlugin გარემოსი, რომელიც განსაზღვრავს მოთხოვნად მუშაობის რეჟიმს ჩანართისთვის. კონკრეტულად, ჩანართს აქვს სტატიკური მეთოდების  და წევრების გარკვეული რაოდენობა, ამგვარად  QgsPluginManager და ჩანართის ჩამტვირთავის ლოგიკას შეუძლიათ მოახდონონ თითოეული ჩანართის იდენტიფიკაცია, შესაბამისი მენიუს კომპონენტის შექმნა. შენიშნავთ რომ არ არსებობს წინააღმდეგობა რომ შექმნათ  მრავალრიცხოვანი ინსტრუმენტების პანელის ხატულებისა და მენიუს ელემენტების შესაქმნელად ერთი ჩანართისთვის. ამგვარად საწყისად ერთი მენიუს ელემენტი და  ინტსტრუმენტების პანელის ღილაკი იქმნება და ის არის წინასწარ დაკონფიგურირებული run() მეთოდის გამოსაძახებლად ამ კლასში როდესაც არჩეულია. ეს საწყისი რეალიზაცია წარმოგდგენილი თქვენთვის ჩანართის შემქმნელის მიერ არის კარგად დოკუმენტირებული, ასე რომ გთხოვთ მიყვეთ კოდს შემდეგი რჩევებისთვის.</translation>
    </message>
    <message>
        <source>This is a Qt designer &apos;ui&apos; file. It defines the look of the default plugin dialog without implementing any application logic. You can modify this form to suite your needs or completely remove it if your plugin does not need to display a user form (e.g. for custom MapTools).</source>
        <translation>ეს არის Qt დიზაინერი &apos;ui&apos; ფაილი. ის განსაზღვრავს საწყისი ჩანართის დიალოგის შესახედაობას პროგრამის ლოგიკის განხორციელების გარეშე. თქვენ შეგიძლიათ ამ ფორმის შეცვლა თქვენი მოთხოვნილებების შესაბამისად ან შეგიძლიათ მთლიანად წაშალოთ ის თუ თქვენ ჩანართს არ სჭირდება მომხმარებლის ფორმის ჩვენება (მაგალითად შედგენილი MapTools).</translation>
    </message>
    <message>
        <source>This is the concrete class where application logic for the above mentioned dialog should go. The world is your oyster here really....</source>
        <translation>ეს არის კონკრეტული კლასი, სადაც პროგრამის ლოგიკა ზემოთ ხსენებული დიალოგისთვის უნდა განხორციელდეს. აქ ნამდვილად ყველაფერი თქვენს ხელთაა....</translation>
    </message>
    <message>
        <source>This is the Qt4 resources file for your plugin. The Makefile generated for your plugin is all set up to compile the resource file so all you need to do is add your additional icons etc using the simple xml file format. Note the namespace used for all your resources e.g. (&apos;:/Homann/&apos;). It is important to use this prefix for all your resources. We suggest you include any other images and run time data in this resurce file too.</source>
        <translation>ეს არის Qt4 ფაილი თქვენი ჩანართისთვის.  თქვენი ჩანართისთვის  დაგენერირებული Makefile ფაილში ყველაფერი არის დაყენებული რესურსის ფაილის შესაქმნელად, ასე რომ ყველაფერი რაც თქვენ გჭირდებათ რომ გააკეთოთ, არის ის რომ დაამატოთ თქვენი დამატებითი ხატულები და ა.შ. მარტივი xml ფაილის ფორმატის გამოყენებით. შევნიშნოთ სახელების სივრცე გამოყენებული თქვენი ყველა რესურსისთვის მაგალითად (&apos;:/Homann/&apos;). მნიშვნელოვანია თქვენი ყველა რესურსისთვის პრეფიქსის გამოყენება. ჩვენ გთავაზობთ რომ ჩართოთ ნებისმიერი სხვა სურათები და აგრეთვე გაუშვათ დროის მონაცემი  რესურსის ფაილში.</translation>
    </message>
    <message>
        <source>This is the icon that will be used for your plugin menu entry and toolbar icon. Simply replace this icon with your own icon to make your plugin disctinctive from the rest.</source>
        <translation>ეს არის ხატულა რომელიც გამოიყენება თქვენი ჩანართის მენიუს ელემენტად და ინსტრუმენტების პანელის ხატულად. მარტივად შეცვალეთ ეს ხატულა თქვენი ხატულით რათა თქვენი ჩანართი განსხვავდებოდეს დანარჩენებისგან.</translation>
    </message>
    <message>
        <source>This file contains the documentation you are reading now!</source>
        <translation>ფაილი შეიცავს იმ დოკუმენტაციას, რომელსაც თქვენ ახლა კითხულობთ!</translation>
    </message>
    <message>
        <source>Getting developer help:</source>
        <translation>დახმარების მიღება დამმუშავებლისთვის:</translation>
    </message>
    <message>
        <source>For Questions and Comments regarding the plugin builder template and creating your features in QGIS using the plugin interface please contact us via:</source>
        <translation>ჩანართის კონსტრუქტორის შაბლონთან და QGIS –ის ინტერფეისის გამოყენებით თქვენი ფუნქციების შექმნასთან დაკავშირებულ კითხვებზე და კომენტარებზე გთხოვთ დაგვიკავშირდეთ:</translation>
    </message>
    <message>
        <source>&lt;li&gt; the QGIS developers mailing list, or &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</source>
        <translation>&lt;li&gt;QGIS დეველოპერების საფოსტო სია, ან &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</translation>
    </message>
    <message>
        <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
        <translation>QGIS არის გავრცელებული Gnu Public License –ის ქვეშ. თუ თქვენ შექმნით სასარგებლო ჩანართს გთხოვთ ის განიხილოთ როგორც წვილილის შეტანა მთლიან საქმეში.</translation>
    </message>
    <message>
        <source>Have fun and thank you for choosing QGIS.</source>
        <translation>იხალისეთ და მადლობა QGIS არჩევისთვის.</translation>
    </message>
</context>
<context>
    <name>MapCoordsDialogBase</name>
    <message>
        <source>Enter map coordinates</source>
        <translation>შეიყვანეთ რუკის კოორდინატები</translation>
    </message>
    <message>
        <source>Enter X and Y coordinates which correspond with the selected point on the image. Alternatively, click the button with icon of a pencil and then click a corresponding point on map canvas of QGIS to fill in coordinates of that point.</source>
        <translation>შეიყვანეთ X და Y კოორდინატები რომლებიც შეესაბამება არჩეულ წერტილს გამოსახულებაზე. სხვაგვარად, დააწკაპუნეთ ფანქრის გამოსახულებიან ღილაკს და შემდეგ დააწკაპუნეთ შესაბამის წერტილზე რომელიც მდებარეობს QGIS -ის რუკის ნახატზე, რათა შეივსოს იმ წერტილის კოორდინატები.</translation>
    </message>
    <message>
        <source>X:</source>
        <translation>X:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <source> from map canvas</source>
        <translation>რუკის გამოსახულებიდან</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;უარყოფა</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;თანხმობა</translation>
    </message>
</context>
<context>
    <name>OgrConverterGuiBase</name>
    <message>
        <source>OGR Layer Converter</source>
        <translation>OGR შრის გადამყვანი</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>წყარო</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>ფორმატი</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ფაილი</translation>
    </message>
    <message>
        <source>Directory</source>
        <translation>დირექტორია</translation>
    </message>
    <message>
        <source>Remote source</source>
        <translation>მოშორებული წყარო</translation>
    </message>
    <message>
        <source>Dataset</source>
        <translation>მონაცემთა ნაკრები</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>დათვალიერება</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>შრე</translation>
    </message>
    <message>
        <source>Target</source>
        <translation>მიზანი</translation>
    </message>
</context>
<context>
    <name>OgrPlugin</name>
    <message>
        <source>Run OGR Layer Converter</source>
        <translation>OGR შრის გადამყვანის გაშვება</translation>
    </message>
    <message>
        <source>Translates vector layers between formats supported by OGR library</source>
        <translation>ვექტორული შრეების გადათარგმნა ფორმატებს შორის OGR ბიბლიოთეკის მხარდაჭერით</translation>
    </message>
    <message>
        <source>OG&amp;R Converter</source>
        <translation>OG&amp;R გადამყვანი</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Load layer properties from style file (.qml)</source>
        <translation>შრის მახასიათებლების ჩატვირთვა სტილის ფაილიდან (.qml)</translation>
    </message>
    <message>
        <source>Save layer properties as style file (.qml)</source>
        <translation>შრის მახასიათებლების შენახვა სტილის ფაილში (.qml)</translation>
    </message>
    <message>
        <source>Save experiment report to portable document format (.pdf)</source>
        <translation>ექსპერიმენტული ანგარიშგების შენახვა თავსებად დოკუმენტის ფორმატად (.pdf)</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Where is &apos;</source>
        <translation>სად არის ’</translation>
    </message>
    <message>
        <source>original location: </source>
        <translation>საწყისი მდებარეობა:</translation>
    </message>
    <message>
        <source>QGis files (*.qgs)</source>
        <translation>QGis-ის ფაილები (*.qgs)</translation>
    </message>
    <message>
        <source>Not a vector layer</source>
        <translation>არა-ვექტორული შრე</translation>
    </message>
    <message>
        <source>The current layer is not a vector layer</source>
        <translation>არსებული შრე არ არის ვექტორული შრე</translation>
    </message>
    <message>
        <source>2.5D shape type not supported</source>
        <translation>არ არსებობს 2.5D ფიგურის ტიპის მხარდაჭერა </translation>
    </message>
    <message>
        <source>Adding features to 2.5D shapetypes is not supported yet</source>
        <translation>ობიექტების  დამატება 2.5D ფორმის ტიპებისათვის არ არის ჯერ მხარდაჭერილი</translation>
    </message>
    <message>
        <source>Layer cannot be added to</source>
        <translation>შრის დამატება შეუძლებელია</translation>
    </message>
    <message>
        <source>The data provider for this layer does not support the addition of features.</source>
        <translation>მონაცემების წარმოდგენას ამ შრისთვის არ აქვს ობიექტების დამატების მხარდაჭერა.</translation>
    </message>
    <message>
        <source>Layer not editable</source>
        <translation>შრის შეცვლა შეუძლებელია</translation>
    </message>
    <message>
        <source>Cannot edit the vector layer. To make it editable, go to the file item of the layer, right click and check &apos;Allow Editing&apos;.</source>
        <translation>შეუძლებელია ვექტორული შრის რედაქტირება. რომ გახადოთ ის რედაქტირებადი, მიდით შრის ფაილურ კომპონენტთაბ, დააწკაპუნეთ მაუსის მარჯვენა ღილაკს და მონიშნეთ &quot;რედაქტირების ჩართვა&quot;.</translation>
    </message>
    <message>
        <source>Wrong editing tool</source>
        <translation>მცდარი რედაქტირების ინსტრუმენტი</translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture point&apos; tool on this vector layer</source>
        <translation>შეუძლებელია &apos;წერტილის ფიქსაციის&apos; ინსტრუმენტის ჩართვა ამ ვექტორულ შრეზე</translation>
    </message>
    <message>
        <source>Coordinate transform error</source>
        <translation>კოორდინატთა ტრანსფორმაციის შეცდომა</translation>
    </message>
    <message>
        <source>Cannot transform the point to the layers coordinate system</source>
        <translation>შეუძლებელია წერტილის გადაყვანა შრეების საკოორდინატო სისტემაში</translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture line&apos; tool on this vector layer</source>
        <translation>შეუძლებელია &apos;ხაზის ფიქსაციის&apos; ინსტრუმენტის ჩართვა ამ ვექტორულ შრეზე</translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture polygon&apos; tool on this vector layer</source>
        <translation>შეუძლებელია &apos;პოლიგონის ფიქსაციის&apos; ინსტრუმენტის ჩართვა ამ ვექტორულ შრეზე</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>Cannot add feature. Unknown WKB type</source>
        <translation>შეუძლებელია ობიექტის დამატება. უცნობი WKB ტიპი</translation>
    </message>
    <message>
        <source>Could not remove polygon intersection</source>
        <translation>შეუძლებელია პოლიგონის გადაკვეთის წაშლა</translation>
    </message>
    <message>
        <source>Error, could not add island</source>
        <translation>შეცდომა, შეუძლებელია კუნძულის დამატება</translation>
    </message>
    <message>
        <source>A problem with geometry type occured</source>
        <translation>პრობლემა წარმოიშვა გეომეტრიულ ტიპთან </translation>
    </message>
    <message>
        <source>The inserted Ring is not closed</source>
        <translation>ჩასმული რგოლი არ არის დახურული</translation>
    </message>
    <message>
        <source>The inserted Ring is not a valid geometry</source>
        <translation>ჩასმული რგოლი არ არის სწორი კონფიგურაციის</translation>
    </message>
    <message>
        <source>The inserted Ring crosses existing rings</source>
        <translation>ჩასმული რგოლი კვეთს არსებულ რგოლებს</translation>
    </message>
    <message>
        <source>The inserted Ring is not contained in a feature</source>
        <translation>ჩასმული რგოლი არ შედის ობიექტში</translation>
    </message>
    <message>
        <source>An unknown error occured</source>
        <translation>უცნობი შეცდომა წარმოიშვა</translation>
    </message>
    <message>
        <source>Error, could not add ring</source>
        <translation>შეცდომა, შეუძლებელია რგოლის დამატება</translation>
    </message>
    <message>
        <source>No active layer</source>
        <translation>არა-აქტიური შრე</translation>
    </message>
    <message>
        <source>To identify features, you must choose an active layer by clicking on its name in the legend</source>
        <translation>ობიექტიების იდენტიფიკაციისთვის, თქვენ უნდა აირჩიოთ აქტიური შრე ლეგენდაში მის სახელზე დაწკაპუნებით</translation>
    </message>
    <message>
        <source>Band</source>
        <translation>დიაპაზონი</translation>
    </message>
    <message>
        <source>Length</source>
        <translation>სიგრძე</translation>
    </message>
    <message>
        <source>Area</source>
        <translation>სივრცე</translation>
    </message>
    <message>
        <source>action</source>
        <translation>მოძრაობა</translation>
    </message>
    <message>
        <source> features found</source>
        <translation>მოიძებნა ობიექტები</translation>
    </message>
    <message>
        <source> 1 feature found</source>
        <translation>მოიძებნა 1 ობიექტი</translation>
    </message>
    <message>
        <source>No features found</source>
        <translation>ობიექტები ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>No features were found in the active layer at the point you clicked</source>
        <translation>ობიექტები ვერ მოიძებნა აქტიურ შრის იმ წერტილზე, რომელზეც დააწკაპუნეთ</translation>
    </message>
    <message>
        <source>Could not identify objects on</source>
        <translation>შეუძლებელია ობიექტების იდენტიფიკაცია </translation>
    </message>
    <message>
        <source>because</source>
        <translation>იმიტომ რომ</translation>
    </message>
    <message>
        <source>To select features, you must choose a vector layer by clicking on its name in the legend</source>
        <translation>ობიექტების ამოსარჩევად, თქვენ უნდა აირჩიოთ ვექტორული შრე ლეგენდაზე მის სახელზე დაწკაპუნებით</translation>
    </message>
    <message>
        <source>CRS Exception</source>
        <translation>CRS შეცდომა</translation>
    </message>
    <message>
        <source>Selection extends beyond layer&apos;s coordinate system.</source>
        <translation>მონიშვნა აფართოებს შრის საკოორდინატო სისტემას.</translation>
    </message>
    <message>
        <source>Legend</source>
        <translation>ლეგენდა</translation>
    </message>
    <message>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate line length.</source>
        <translation>საკოორდინატო სისტემის შეცდომის დაჭერა წერტილის გადაყვანისას. შეუძლებელია ხაზის სიგრძის გამოთვლა.</translation>
    </message>
    <message>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate polygon area.</source>
        <translation>საკოორდინატო სისტემის შეცდომის დაჭერა წერტილის გადაყვანისას. შეუძლებელია პოლიგონის ფართობის გამოთვლა.</translation>
    </message>
    <message>
        <source> km2</source>
        <translation>კმ2</translation>
    </message>
    <message>
        <source> ha</source>
        <translation> ჰა</translation>
    </message>
    <message>
        <source> m2</source>
        <translation>მ2</translation>
    </message>
    <message>
        <source> m</source>
        <translation>მ</translation>
    </message>
    <message>
        <source> km</source>
        <translation>კმ</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>მმ</translation>
    </message>
    <message>
        <source> cm</source>
        <translation>სმ</translation>
    </message>
    <message>
        <source> sq mile</source>
        <translation>კვ მილი</translation>
    </message>
    <message>
        <source> sq ft</source>
        <translation>კვ ფტ</translation>
    </message>
    <message>
        <source> mile</source>
        <translation>მილი</translation>
    </message>
    <message>
        <source> foot</source>
        <translation>ფუტი</translation>
    </message>
    <message>
        <source> feet</source>
        <translation>ფუტი</translation>
    </message>
    <message>
        <source> sq.deg.</source>
        <translation>კვ.გრად.</translation>
    </message>
    <message>
        <source> degree</source>
        <translation>გრადუსი</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation>გრადუსი</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation>უცნობი</translation>
    </message>
    <message>
        <source>Received %1 of %2 bytes</source>
        <translation>მიღებულია %2 ბაიტიდან  %1</translation>
    </message>
    <message>
        <source>Received %1 bytes (total unknown)</source>
        <translation>მიღებულია %1 ბაიტი (ჯამი უცნობია)</translation>
    </message>
    <message>
        <source>Not connected</source>
        <translation>არ არის დაკავშირებული</translation>
    </message>
    <message>
        <source>Looking up &apos;%1&apos;</source>
        <translation>ძიება &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Connecting to &apos;%1&apos;</source>
        <translation>დაკავშირება &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Sending request &apos;%1&apos;</source>
        <translation>მოთხოვნის გაგზავნა ’%1’</translation>
    </message>
    <message>
        <source>Receiving reply</source>
        <translation>პასუხის მიღება</translation>
    </message>
    <message>
        <source>Response is complete</source>
        <translation>პასუხი დასრულებულია</translation>
    </message>
    <message>
        <source>Closing down connection</source>
        <translation>კავშირის დასრულება</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>წარწერა</translation>
    </message>
    <message>
        <source>Loading style file </source>
        <translation>სტილის ფაილის ჩატვირთვა</translation>
    </message>
    <message>
        <source> failed because:</source>
        <translation>არ შესრულდა იმიტომ, რომ:</translation>
    </message>
    <message>
        <source>Could not save symbology because:</source>
        <translation>შეუძლებელია სიმბოლიკის შენახვა:</translation>
    </message>
    <message>
        <source>The directory containing your dataset needs to be writeable!</source>
        <translation>დირექტორია რომელიც შეიცავს თქვენს მონაცემთა ნაკრებს უნდა იყოს ჩაწერის შესაძლებლობის მქონე!</translation>
    </message>
    <message>
        <source>Created default style file as </source>
        <translation>შეიქმნა საწყისი სტილის ფაილი, როგორც</translation>
    </message>
    <message>
        <source>ERROR: Failed to created default style file as %1 Check file permissions and retry.</source>
        <translation>შეცდომა:  საწყისი სტილის შექმნისა როგორც %1 ვერ განხორციელდა შეამოწმეთ უფლებები და სცადეთ თავიდან.</translation>
    </message>
    <message>
        <source>Unable to open </source>
        <translation>შეუძლებელია გახსნა</translation>
    </message>
    <message>
        <source>Project file read error: </source>
        <translation>პროექტის ფაილის წაკითხვის შეცდომა:</translation>
    </message>
    <message>
        <source> at line </source>
        <translation>ხაზზე</translation>
    </message>
    <message>
        <source> column </source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source> for file </source>
        <translation>ფაილისთვის</translation>
    </message>
    <message>
        <source>Unable to save to file </source>
        <translation>შეუძლებელია ფაილში შენახვა</translation>
    </message>
    <message>
        <source> is not writeable.</source>
        <translation>შეუძლებელია ჩაწერა.</translation>
    </message>
    <message>
        <source>Please adjust permissions (if possible) and try again.</source>
        <translation>გთხოვთ შეცვალოთ უფლებები (თუ არის შესაძლებელი) და სცადეთ თავიდან.</translation>
    </message>
    <message>
        <source>Unable to save to file. Your project may be corrupted on disk. Try clearing some space on the volume and check file permissions before pressing save again.</source>
        <translation>შეუძლებელია ფაილის შენახვა. შესაძლოა თქვენი პროექტი დაზიანებულია დისკზე. შეეცადეთ მეხსიერების ბლოკში ცოტა ადგილის გასუფთავებას და შეამოწმეთ ფაილის უფლებები მის თავიდან შენახვამდე.</translation>
    </message>
    <message>
        <source>No Data Provider Plugins</source>
        <comment>No QGIS data provider plugins found in:</comment>
        <translation>არ არის Data Provider (მონაცემთა მომწოდებელის) ჩანართები</translation>
    </message>
    <message>
        <source>No vector layers can be loaded. Check your QGIS installation</source>
        <translation>ვექტორული შრეების ჩატვირთვა შეუძლებელია. შეამოწმეთ თქვენი QGIS ინსტალაცია</translation>
    </message>
    <message>
        <source>No Data Providers</source>
        <translation>არ არის Data Provider (მონაცემთა მომწოდებელი)</translation>
    </message>
    <message>
        <source>No data provider plugins are available. No vector layers can be loaded</source>
        <translation>Data Provider (მონაცემთა მომწოდებელი) ჩანართები მიუწვდომელია. შეუძლებელია ვექტორული შრეების ჩატვირთვა</translation>
    </message>
    <message>
        <source>Regular expressions on numeric values don&apos;t make sense. Use comparison instead.</source>
        <translation>რიცხვითი მნიშვნელობების წესიერ გამოსახულებებს არ აქვს აზრი. ამის ნაცვლად უმჯობესია გამოიყენოთ შედარება.</translation>
    </message>
    <message>
        <source>Referenced column wasn&apos;t found: </source>
        <translation>მითითებული სვეტი ვერ მოიძებნა:</translation>
    </message>
    <message>
        <source>Division by zero.</source>
        <translation>ნულზე გაყოფა.</translation>
    </message>
    <message>
        <source>Coordinate Capture</source>
        <translation>კოორდინატის აღება</translation>
    </message>
    <message>
        <source>Capture mouse coordinates in different CRS</source>
        <translation>მაუსის კოორდინატების აღება განსხვავებულ CRS–ში</translation>
    </message>
    <message>
        <source>Version 0.1</source>
        <translation>ვერსია 0.1</translation>
    </message>
    <message>
        <source>CopyrightLabel</source>
        <translation>საავტორო უფლების წარწერა</translation>
    </message>
    <message>
        <source>Draws copyright information</source>
        <translation>ხატავს საავტორო უფლებების ინფორმაციას</translation>
    </message>
    <message>
        <source>Version 0.2</source>
        <translation>ვერსია 0.2</translation>
    </message>
    <message>
        <source>Loads and displays delimited text files containing x,y coordinates</source>
        <translation>ტვირთავს და აჩვენებს დანაწევრებულ ტექსტურ ფაილს, რომელიც შეიცავს x,y კოორდინატებს</translation>
    </message>
    <message>
        <source>Add Delimited Text Layer</source>
        <translation>დანაწევრებული ტექსტური შრის დამატება</translation>
    </message>
    <message>
        <source>Dxf2Shp Converter</source>
        <translation>Dxf2Shp გადამყვანი</translation>
    </message>
    <message>
        <source>Converts from dxf to shp file format</source>
        <translation>გადაყავს dxf-დან  shp ფაილის ფორმატში</translation>
    </message>
    <message>
        <source>PostgreSQL Geoprocessing</source>
        <translation>PostgreSQL Geoprocessing</translation>
    </message>
    <message>
        <source>Geoprocessing functions for working with PostgreSQL/PostGIS layers</source>
        <translation>Geoprocessing ფუნქციები PostgreSQL/PostGIS შრეებთან სამუშაოდ</translation>
    </message>
    <message>
        <source>Georeferencer</source>
        <translation>Georeferencer (გეო-რეფერენსერი)</translation>
    </message>
    <message>
        <source>Adding projection info to rasters</source>
        <translation>პროექციის დამატება რასტრებზე</translation>
    </message>
    <message>
        <source>Fit to a linear transform requires at least 2 points.</source>
        <translation>წრფივ გარდაქმნასთან შესაბამისობა მოითხოვს 2 წერტილს მაინც.</translation>
    </message>
    <message>
        <source>Fit to a Helmert transform requires at least 2 points.</source>
        <translation>ჰელმერტის გარდაქმნასთან შესაბამისობა მოითხოვს 2 წერტილს მაინც.</translation>
    </message>
    <message>
        <source>Fit to an affine transform requires at least 4 points.</source>
        <translation>აფინურ გარდაქმნასთან შესაბამისობა მოითხოვს 4 წერტილს მაინც.</translation>
    </message>
    <message>
        <source>GPS Tools</source>
        <translation>GPS ინსტრუმენტები</translation>
    </message>
    <message>
        <source>Tools for loading and importing GPS data</source>
        <translation>ინსტრუმენტები GPS მონაცემის ჩატვირთვისა და იმპორტირებისთვის</translation>
    </message>
    <message>
        <source>New centroid</source>
        <translation>ახალი ცენტროიდი</translation>
    </message>
    <message>
        <source>New point</source>
        <translation>ახალი წერტილი</translation>
    </message>
    <message>
        <source>New vertex</source>
        <translation>ახალი წვერო</translation>
    </message>
    <message>
        <source>Undo last point</source>
        <translation>უკანასკნელი წერტილის დაბრუნება</translation>
    </message>
    <message>
        <source>Close line</source>
        <translation>წრფის დახურვა</translation>
    </message>
    <message>
        <source>Select vertex</source>
        <translation>წვეროს არჩევა</translation>
    </message>
    <message>
        <source>Select new position</source>
        <translation>ახალი ადგილმდებარეობის არჩევა</translation>
    </message>
    <message>
        <source>Select line segment</source>
        <translation>წრფის სეგმენტის არჩევა</translation>
    </message>
    <message>
        <source>New vertex position</source>
        <translation>ახალი წვეროს ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Release</source>
        <translation>განხორციელება</translation>
    </message>
    <message>
        <source>Delete vertex</source>
        <translation>წვეროს წაშლა</translation>
    </message>
    <message>
        <source>Release vertex</source>
        <translation>წვეროს განხორციელება</translation>
    </message>
    <message>
        <source>Select element</source>
        <translation>ელემენტის არჩევა</translation>
    </message>
    <message>
        <source>New location</source>
        <translation>ახალი ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Release selected</source>
        <translation>განხორციელება მონიშნულია</translation>
    </message>
    <message>
        <source>Delete selected / select next</source>
        <translation>არჩეულის წაშლა / შემდეგის არჩევა</translation>
    </message>
    <message>
        <source>Select position on line</source>
        <translation>ხაზზე ადგილმდებარეობის მონიშვნა</translation>
    </message>
    <message>
        <source>Split the line</source>
        <translation>წრფის დაყოფა</translation>
    </message>
    <message>
        <source>Release the line</source>
        <translation>ხაზის განხორციელება</translation>
    </message>
    <message>
        <source>Select point on line</source>
        <translation>ხაზზე წერტილის არჩევა</translation>
    </message>
    <message>
        <source>Location: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>ადგილმდებარეობა:</translation>
    </message>
    <message>
        <source>&lt;br&gt;Mapset: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>&lt;br&gt;მონაცემთა ნაკრები: </translation>
    </message>
    <message>
        <source>Location: </source>
        <translation>ადგილმდებარეობა:</translation>
    </message>
    <message>
        <source>&lt;br&gt;Mapset: </source>
        <translation>&lt;br&gt;მონაცემთა ნაკრები: </translation>
    </message>
    <message>
        <source>&lt;b&gt;Raster&lt;/b&gt;</source>
        <translation>&lt;b&gt;რასტრი&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Cannot open raster header</source>
        <translation>შეუძლებელია რასტრის ჰედერის გახსნა</translation>
    </message>
    <message>
        <source>Rows</source>
        <translation>სტრიქონები</translation>
    </message>
    <message>
        <source>Columns</source>
        <translation>სვეტები</translation>
    </message>
    <message>
        <source>N-S resolution</source>
        <translation>N-S რეზოლუცია</translation>
    </message>
    <message>
        <source>E-W resolution</source>
        <translation>E-W რეზოლუცია</translation>
    </message>
    <message>
        <source>North</source>
        <translation>ჩრდილოეთი</translation>
    </message>
    <message>
        <source>South</source>
        <translation>სამხრეთი</translation>
    </message>
    <message>
        <source>East</source>
        <translation>აღმოსავლეთი</translation>
    </message>
    <message>
        <source>West</source>
        <translation>დასავლეთი</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>ფორმატი</translation>
    </message>
    <message>
        <source>Minimum value</source>
        <translation>მინიმალური მნიშვნელობა</translation>
    </message>
    <message>
        <source>Maximum value</source>
        <translation>მაქსიმალური მნიშვნელობა</translation>
    </message>
    <message>
        <source>Data source</source>
        <translation>მონაცემთა წყარო</translation>
    </message>
    <message>
        <source>Data description</source>
        <translation>მონაცემების აღწერა</translation>
    </message>
    <message>
        <source>Comments</source>
        <translation>კომენტარები</translation>
    </message>
    <message>
        <source>Categories</source>
        <translation>კატეგორიები</translation>
    </message>
    <message>
        <source>&lt;b&gt;Vector&lt;/b&gt;</source>
        <translation>&lt;b&gt;ვექტორიr&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Points</source>
        <translation>წერტილები</translation>
    </message>
    <message>
        <source>Lines</source>
        <translation>ხაზები</translation>
    </message>
    <message>
        <source>Boundaries</source>
        <translation>საზღვრები</translation>
    </message>
    <message>
        <source>Centroids</source>
        <translation>ცენტროიდები</translation>
    </message>
    <message>
        <source>Faces</source>
        <translation>სახეები</translation>
    </message>
    <message>
        <source>Kernels</source>
        <translation>გულები</translation>
    </message>
    <message>
        <source>Areas</source>
        <translation>სივრცეები</translation>
    </message>
    <message>
        <source>Islands</source>
        <translation>კუნძულები</translation>
    </message>
    <message>
        <source>Top</source>
        <translation>ზედა</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation>ქვედა</translation>
    </message>
    <message>
        <source>yes</source>
        <translation>დიახ</translation>
    </message>
    <message>
        <source>no</source>
        <translation>არა</translation>
    </message>
    <message>
        <source>History&lt;br&gt;</source>
        <translation>ისტორია&lt;br&gt;</translation>
    </message>
    <message>
        <source>&lt;b&gt;Layer&lt;/b&gt;</source>
        <translation>&lt;b&gt;შრე&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Features</source>
        <translation>ობიექტები</translation>
    </message>
    <message>
        <source>Driver</source>
        <translation>წამყვანი</translation>
    </message>
    <message>
        <source>Database</source>
        <translation>მონაცემთა ბაზა</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>ცხრილი</translation>
    </message>
    <message>
        <source>Key column</source>
        <translation>გასაღები სვეტი</translation>
    </message>
    <message>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <source>GRASS layer</source>
        <translation>GRASS შრე</translation>
    </message>
    <message>
        <source>Graticule Creator</source>
        <translation>საკოორდინატო ბადის შემქმნელი</translation>
    </message>
    <message>
        <source>Builds a graticule</source>
        <translation>აგებს საკოორდინატო ბადეს</translation>
    </message>
    <message>
        <source>Interpolating...</source>
        <translation>ინტერპოლაცია...</translation>
    </message>
    <message>
        <source>Abort</source>
        <translation>შესახებ</translation>
    </message>
    <message>
        <source>Interpolation plugin</source>
        <translation>ინტერპოლაციის ჩანართი</translation>
    </message>
    <message>
        <source>A plugin for interpolation based on vertices of a vector layer</source>
        <translation>ინტერპოლაციის ჩანართი ვექტორული შრის წვეროებზე დაყრდნობით</translation>
    </message>
    <message>
        <source>Version 0.001</source>
        <translation>ვერსია 0.001</translation>
    </message>
    <message>
        <source>NorthArrow</source>
        <translation>ჩრდილოეთ ისარი</translation>
    </message>
    <message>
        <source>Displays a north arrow overlayed onto the map</source>
        <translation>აჩვენებს რუკაზე გადაფარული ჩრდილოეთ ისარს</translation>
    </message>
    <message>
        <source>OGR Layer Converter</source>
        <translation>OGR შრის გადამყვანი</translation>
    </message>
    <message>
        <source>Translates vector layers between formats supported by OGR library</source>
        <translation> გადაყავს ვექტორული შრეები ფორმატებს შორის რომელიც მხარდაჭერილია OGR ბიბლიოთეკის მიერ</translation>
    </message>
    <message>
        <source>[menuitemname]</source>
        <translation>[მენიუს სახელი]</translation>
    </message>
    <message>
        <source>[plugindescription]</source>
        <translation>[ჩანართის აღწერა]</translation>
    </message>
    <message>
        <source>Quick Print</source>
        <translation>სწრაფი ბეჭდვა (Quick Print)</translation>
    </message>
    <message>
        <source>Quick Print is a plugin to quickly print a map with minimal effort.</source>
        <translation>Quick Print არის ჩანართი რუკის სწრაფად დასაბეჭდად მინიმალური ძალისხმევით.</translation>
    </message>
    <message>
        <source>ScaleBar</source>
        <translation>სკალის ზოლი</translation>
    </message>
    <message>
        <source>Draws a scale bar</source>
        <translation>ხატავს სკალის ზოლს</translation>
    </message>
    <message>
        <source>SPIT</source>
        <translation>SPIT</translation>
    </message>
    <message>
        <source>Shapefile to PostgreSQL/PostGIS Import Tool</source>
        <translation>Shapefile to PostgreSQL/PostGIS Import Tool</translation>
    </message>
    <message>
        <source>WFS plugin</source>
        <translation>WFS ჩანართი</translation>
    </message>
    <message>
        <source>Adds WFS layers to the QGIS canvas</source>
        <translation>ამატებს WFS შრეებს QGIS ნახატებს</translation>
    </message>
    <message>
        <source>Couldn&apos;t open the data source: </source>
        <translation>შეუძლებელია მონაცემთა წყაროს გახსნა:</translation>
    </message>
    <message>
        <source>Parse error at line </source>
        <translation>შეცდომის დამუშავება ხაზზე</translation>
    </message>
    <message>
        <source>GPS eXchange format provider</source>
        <translation>GPS eXchange ფორმატის მწარმოებელი</translation>
    </message>
    <message>
        <source>GRASS plugin</source>
        <translation>GRASS ჩანართი</translation>
    </message>
    <message>
        <source>QGIS couldn&apos;t find your GRASS installation.
Would you like to specify path (GISBASE) to your GRASS installation?</source>
        <translation>QGIS შეუძლებელია თქვენი GRASS ინსტალაციის მოძებნა.
გსურთ გზის მითითება (GISBASE) თქვენს GRASS ინსტალაციაზე?</translation>
    </message>
    <message>
        <source>Choose GRASS installation path (GISBASE)</source>
        <translation>GRASS ინსტალაციის გზის არჩევა (GISBASE)</translation>
    </message>
    <message>
        <source>GRASS data won&apos;t be available if GISBASE is not specified.</source>
        <translation>GRASS მონაცემი არის მიუწვდომელი თუ GISBASE არ არის მითითებული.</translation>
    </message>
    <message>
        <source>Uncatched fatal GRASS error</source>
        <translation>დაუჭერელი ფატალური GRASS შეცდომა</translation>
    </message>
    <message>
        <source>GISBASE is not set.</source>
        <translation>GISBASE არ არის დაყენებული.</translation>
    </message>
    <message>
        <source> is not a GRASS mapset.</source>
        <translation>არ არის GRASS mapset.</translation>
    </message>
    <message>
        <source>Mapset is already in use.</source>
        <translation>Mapset უკვე გამოიყენება.</translation>
    </message>
    <message>
        <source>Cannot start </source>
        <translation>შეუძლებელია დაწყება</translation>
    </message>
    <message>
        <source>Temporary directory </source>
        <translation>დროებითი დირექტორია</translation>
    </message>
    <message>
        <source> exist but is not writable</source>
        <translation>არსებობს მაგრამ შეუძლებელია ჩაწერა</translation>
    </message>
    <message>
        <source>Cannot create temporary directory </source>
        <translation>შეუძლებელია დროებითი დირექტორიის შექმნა</translation>
    </message>
    <message>
        <source>Cannot create </source>
        <translation>შეუძლებელია შექმნა</translation>
    </message>
    <message>
        <source>Cannot remove mapset lock: </source>
        <translation>შეუძლებელია mapset ბლოკირების წაშლა:</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot read raster map region</source>
        <translation>შეუძლებელია რასტრული რუკის რეგიონის წაკითხვა</translation>
    </message>
    <message>
        <source>Cannot read vector map region</source>
        <translation>შეუძლებელია ვექტორული რუკის რეგიონის წაკითხვა </translation>
    </message>
    <message>
        <source>Cannot read region</source>
        <translation>შეუძლებელია რეგიონის წაკითხვა</translation>
    </message>
    <message>
        <source>Couldn&apos;t load SIP module.</source>
        <translation>შეუძლებელია SIP მოდულის ჩატვირთვა.</translation>
    </message>
    <message>
        <source>Python support will be disabled.</source>
        <translation>Python -ის მხარდაჭერა იქნება გათიშული.</translation>
    </message>
    <message>
        <source>Couldn&apos;t load PyQt4.</source>
        <translation>შეუძლებელია PyQt4 -ის ჩატვირთვა.</translation>
    </message>
    <message>
        <source>Couldn&apos;t load PyQGIS.</source>
        <translation>შეუძლებელია PyQGIS-ის ჩატვირთვა.</translation>
    </message>
    <message>
        <source>An error has occured while executing Python code:</source>
        <translation>Python -ის კოდის გაშვებისას წარმოიშვა შეცდომა:</translation>
    </message>
    <message>
        <source>Python version:</source>
        <translation>Python ვერსია:</translation>
    </message>
    <message>
        <source>Python path:</source>
        <translation>Python გზა:</translation>
    </message>
    <message>
        <source>Python error</source>
        <translation>Python შეცდომა</translation>
    </message>
    <message>
        <source>An error occured during execution of following code:</source>
        <translation>შეცდომა წარმოიშვა შემდეგი კოდის გაშვებისას:</translation>
    </message>
    <message>
        <source>Couldn&apos;t load plugin </source>
        <translation>შეუძლებელია ჩანართის ჩატვირთვა</translation>
    </message>
    <message>
        <source> due an error when calling its classFactory() method</source>
        <translation>classFactory() მეთოდის გამოძახების შეცდომის შესაბამისად</translation>
    </message>
    <message>
        <source> due an error when calling its initGui() method</source>
        <translation> initGui() მეთოდის გამოძახების შეცდომის შესაბამისად</translation>
    </message>
    <message>
        <source>Error while unloading plugin </source>
        <translation>შეცდომა ჩანართის ამოტვირთვისას</translation>
    </message>
    <message>
        <source>Error Loading Plugin</source>
        <translation type="unfinished">შეცდომაა ჩანართის ჩატვირთვისას</translation>
    </message>
    <message>
        <source>There was an error loading a plugin.The following diagnostic information may help the QGIS developers resolve the issue:
%1.</source>
        <translation type="unfinished">შეცდომა წარმოიქმნა ჩანართის ჩატვირთვისას. შემდეგი დიაგნოსტიკური მონაცემი შეიძლება დაეხმაროს QGIS დეველოპერებს შედეგის გადაწყვეტილების მიღებაში:
%1.</translation>
    </message>
    <message>
        <source>Error when reading metadata of plugin </source>
        <translation type="unfinished">შეცდომა ჩანართის metadata–ს წაკითხვისას</translation>
    </message>
</context>
<context>
    <name>QgisApp</name>
    <message>
        <source>Quantum GIS - </source>
        <translation>Quantum GIS - </translation>
    </message>
    <message>
        <source>Multiple Instances of QgisApp</source>
        <translation>QgisApp -ის მრავალი ასლი</translation>
    </message>
    <message>
        <source>Multiple instances of Quantum GIS application object detected.
Please contact the developers.
</source>
        <translation>დაფიქსირდა Quantum GIS–ის პროგრამის ობიექტის მრავალი ეგზემპლარი.
გთხოვთ დაუკავშირდეთ დეველოპერებს.
</translation>
    </message>
    <message>
        <source>Checking database</source>
        <translation>მონაცემთა ბაზის შემოწმება</translation>
    </message>
    <message>
        <source>Reading settings</source>
        <translation>მახასიათებლების წაკითხვა</translation>
    </message>
    <message>
        <source>Setting up the GUI</source>
        <translation>GUI-ს დაყენება</translation>
    </message>
    <message>
        <source>Checking provider plugins</source>
        <translation>მწარმოებლის ჩანართების შემოწმება</translation>
    </message>
    <message>
        <source>Starting Python</source>
        <translation>Python-ის გაშვება</translation>
    </message>
    <message>
        <source>Restoring loaded plugins</source>
        <translation>ჩატვირთული ჩანართების აღდგენა</translation>
    </message>
    <message>
        <source>Initializing file filters</source>
        <translation>ფაილის ფილტრების ინიციალიზაცია</translation>
    </message>
    <message>
        <source>Restoring window state</source>
        <translation>ფანჯრის მდგომარეობის აღდგენა</translation>
    </message>
    <message>
        <source>QGIS Ready!</source>
        <translation>QGIS მზადაა!</translation>
    </message>
    <message>
        <source>&amp;New Project</source>
        <translation>&amp;ახალი პროექტი</translation>
    </message>
    <message>
        <source>Ctrl+N</source>
        <comment>New Project</comment>
        <translation type="obsolete">Ctrl+N</translation>
    </message>
    <message>
        <source>New Project</source>
        <translation>ახალი პროექტი</translation>
    </message>
    <message>
        <source>&amp;Open Project...</source>
        <translation>&amp;პროექტის გახსნა...</translation>
    </message>
    <message>
        <source>Ctrl+O</source>
        <comment>Open a Project</comment>
        <translation type="obsolete">Ctrl+O</translation>
    </message>
    <message>
        <source>Open a Project</source>
        <translation>პროექტის გახსნა</translation>
    </message>
    <message>
        <source>&amp;Save Project</source>
        <translation>პროექტის &amp;შენახვა</translation>
    </message>
    <message>
        <source>Ctrl+S</source>
        <comment>Save Project</comment>
        <translation type="obsolete">Ctrl+S</translation>
    </message>
    <message>
        <source>Save Project</source>
        <translation>პროექტის შენახვა</translation>
    </message>
    <message>
        <source>Save Project &amp;As...</source>
        <translation>პროექტის შენახვა &amp;როგორც...</translation>
    </message>
    <message>
        <source>Shift+Ctrl+S</source>
        <comment>Save Project under a new name</comment>
        <translation type="obsolete">Shift+Ctrl+S</translation>
    </message>
    <message>
        <source>Save Project under a new name</source>
        <translation>პროექტის შენახვა ახალი სახელით</translation>
    </message>
    <message>
        <source>Save as Image...</source>
        <translation>ნახატად შენახვა...</translation>
    </message>
    <message>
        <source>Save map as image</source>
        <translation>რუკის ნახატად შენახვა</translation>
    </message>
    <message>
        <source>&amp;Print Composer</source>
        <translation> &amp;შემქმნელის დაბეჭდვა</translation>
    </message>
    <message>
        <source>Ctrl+P</source>
        <comment>Print Composer</comment>
        <translation type="obsolete">Ctrl+P</translation>
    </message>
    <message>
        <source>Print Composer</source>
        <translation>შემქმნელის დაბეჭდვა</translation>
    </message>
    <message>
        <source>Exit</source>
        <translation>გამოსვლა</translation>
    </message>
    <message>
        <source>Ctrl+Q</source>
        <comment>Exit QGIS</comment>
        <translation type="obsolete">Ctrl+Q</translation>
    </message>
    <message>
        <source>Exit QGIS</source>
        <translation>QGIS -ს დახურვა</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;უკან დაბრუნება</translation>
    </message>
    <message>
        <source>Ctrl+Z</source>
        <translation>Ctrl+Z</translation>
    </message>
    <message>
        <source>Undo the last operation</source>
        <translation>ბოლო ოპერაციის დაბრუნება</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>ამო&amp;ჭრა</translation>
    </message>
    <message>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <source>Cut the current selection&apos;s contents to the clipboard</source>
        <translation>არსებული არჩევანის შიგთავსის კოპირება ბუფერში</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;კოპირება</translation>
    </message>
    <message>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <source>Copy the current selection&apos;s contents to the clipboard</source>
        <translation>არსებული არჩევანის შიგთავსის კოპირება ბუფერში</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;ჩასმა</translation>
    </message>
    <message>
        <source>Ctrl+V</source>
        <translation>Ctrl+V</translation>
    </message>
    <message>
        <source>Paste the clipboard&apos;s contents into the current selection</source>
        <translation>არსებული არჩევანის შიგთავსის ჩასმა ბუფერში</translation>
    </message>
    <message>
        <source>Cut Features</source>
        <translation>ობიექტების ამოჭრა</translation>
    </message>
    <message>
        <source>Cut selected features</source>
        <translation>არჩეული ობიექტების  ამოჭრა</translation>
    </message>
    <message>
        <source>Copy Features</source>
        <translation>ობიექტების კოპირება</translation>
    </message>
    <message>
        <source>Copy selected features</source>
        <translation>არჩეული ობიექტების კოპირება</translation>
    </message>
    <message>
        <source>Paste Features</source>
        <translation>ობიექტების ჩასმა</translation>
    </message>
    <message>
        <source>Paste selected features</source>
        <translation>არჩეული ობიექტების ჩასმა</translation>
    </message>
    <message>
        <source>Capture Point</source>
        <translation>წერტილის ასახვა</translation>
    </message>
    <message>
        <source>.</source>
        <comment>Capture Points</comment>
        <translation type="obsolete">.</translation>
    </message>
    <message>
        <source>Capture Points</source>
        <translation>წერტილების ასახვა</translation>
    </message>
    <message>
        <source>Capture Line</source>
        <translation>ხაზის აღება</translation>
    </message>
    <message>
        <source>/</source>
        <comment>Capture Lines</comment>
        <translation type="obsolete">/</translation>
    </message>
    <message>
        <source>Capture Lines</source>
        <translation>ხაზების აღება</translation>
    </message>
    <message>
        <source>Capture Polygon</source>
        <translation>პოლიგონის ასახვა</translation>
    </message>
    <message>
        <source>Ctrl+/</source>
        <comment>Capture Polygons</comment>
        <translation type="obsolete">Ctrl+/</translation>
    </message>
    <message>
        <source>Capture Polygons</source>
        <translation>პოლიგონების ასახვა</translation>
    </message>
    <message>
        <source>Move Feature</source>
        <translation>ობიექტის გადატანა</translation>
    </message>
    <message>
        <source>Split Features</source>
        <translation>ობიექტების დაყოფა</translation>
    </message>
    <message>
        <source>Delete Selected</source>
        <translation>არჩეულის წაშლა</translation>
    </message>
    <message>
        <source>Add Vertex</source>
        <translation>წვეროს დამატება</translation>
    </message>
    <message>
        <source>Move Vertex</source>
        <translation>წვეროს გადატანა</translation>
    </message>
    <message>
        <source>Delete Vertex</source>
        <translation>წვეროს წაშლა</translation>
    </message>
    <message>
        <source>Add Ring</source>
        <translation>რგოლის დამატება</translation>
    </message>
    <message>
        <source>Add Island</source>
        <translation>კუნძულის დამატება</translation>
    </message>
    <message>
        <source>Add Island to multipolygon</source>
        <translation>კუნძულის დამატება მრავალ-პოლიგონზე</translation>
    </message>
    <message>
        <source>Pan Map</source>
        <translation>რუკის გადაადგილება</translation>
    </message>
    <message>
        <source>Pan the map</source>
        <translation>რუკის გადატანა</translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation>გადიდება</translation>
    </message>
    <message>
        <source>Ctrl++</source>
        <comment>Zoom In</comment>
        <translation type="obsolete">Ctrl++</translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>დაპატარავება</translation>
    </message>
    <message>
        <source>Ctrl+-</source>
        <comment>Zoom Out</comment>
        <translation type="obsolete">Ctrl+-</translation>
    </message>
    <message>
        <source>Select Features</source>
        <translation>ობიექტების ამორჩევა</translation>
    </message>
    <message>
        <source>Identify Features</source>
        <translation>ფუნქციების იდენთიფიცირება</translation>
    </message>
    <message>
        <source>I</source>
        <comment>Click on features to identify them</comment>
        <translation type="obsolete">I</translation>
    </message>
    <message>
        <source>Click on features to identify them</source>
        <translation>ობიექტებზე დაწკაპუნება მათი იდენთიფიკაციის მიზნით</translation>
    </message>
    <message>
        <source>Measure Line </source>
        <translation>ხაზის გაზომვა</translation>
    </message>
    <message>
        <source>M</source>
        <comment>Measure a Line</comment>
        <translation type="obsolete">M</translation>
    </message>
    <message>
        <source>Measure a Line</source>
        <translation>ხაზის გაზომვა</translation>
    </message>
    <message>
        <source>Measure Area</source>
        <translation>სიბრტყის გაზომვა</translation>
    </message>
    <message>
        <source>J</source>
        <comment>Measure an Area</comment>
        <translation type="obsolete">J</translation>
    </message>
    <message>
        <source>Measure an Area</source>
        <translation>სიბრტყის გაზომვა</translation>
    </message>
    <message>
        <source>Zoom Full</source>
        <translation>სრულად გადიდება</translation>
    </message>
    <message>
        <source>F</source>
        <comment>Zoom to Full Extents</comment>
        <translation type="obsolete">F</translation>
    </message>
    <message>
        <source>Zoom to Full Extents</source>
        <translation>მთლიან განშლამდე გადიდება</translation>
    </message>
    <message>
        <source>Zoom to Layer</source>
        <translation>შრის გადიდება</translation>
    </message>
    <message>
        <source>Zoom to Selection</source>
        <translation>მონიშნულის გადიდება</translation>
    </message>
    <message>
        <source>Ctrl+J</source>
        <comment>Zoom to Selection</comment>
        <translation type="obsolete">Ctrl+J</translation>
    </message>
    <message>
        <source>Zoom Last</source>
        <translation>უკანასკნელის გადიდება</translation>
    </message>
    <message>
        <source>Zoom to Last Extent</source>
        <translation>ბოლო განშლამდე გადიდება</translation>
    </message>
    <message>
        <source>Zoom Actual Size</source>
        <translation>ნამდვილ ზომამდე გადიდება</translation>
    </message>
    <message>
        <source>Zoom to Actual Size</source>
        <translation>ნამდვილ ზომამდე გადიდება</translation>
    </message>
    <message>
        <source>Map Tips</source>
        <translation>რუკის მინიშნებები</translation>
    </message>
    <message>
        <source>Show information about a feature when the mouse is hovered over it</source>
        <translation>ობიექტის შესახებ ინფორმაციის ჩვენება მაუსის მასზე მოძრაობისას</translation>
    </message>
    <message>
        <source>New Bookmark...</source>
        <translation>ახალი სანიშნე...</translation>
    </message>
    <message>
        <source>Ctrl+B</source>
        <comment>New Bookmark</comment>
        <translation type="obsolete">Ctrl+B</translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation>ახალი სანიშნე</translation>
    </message>
    <message>
        <source>Show Bookmarks</source>
        <translation>სანიშნეების ჩვენება</translation>
    </message>
    <message>
        <source>B</source>
        <comment>Show Bookmarks</comment>
        <translation type="obsolete">B</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>განახლება</translation>
    </message>
    <message>
        <source>Ctrl+R</source>
        <comment>Refresh Map</comment>
        <translation type="obsolete">Ctrl+R</translation>
    </message>
    <message>
        <source>Refresh Map</source>
        <translation>რუკის განახლება</translation>
    </message>
    <message>
        <source>New Vector Layer...</source>
        <translation>ახალი ვექტორული შრე...</translation>
    </message>
    <message>
        <source>N</source>
        <comment>Create a New Vector Layer</comment>
        <translation type="obsolete">N</translation>
    </message>
    <message>
        <source>Create a New Vector Layer</source>
        <translation>ახალი ვექტორული შრის შექმნა</translation>
    </message>
    <message>
        <source>Add Vector Layer...</source>
        <translation>ვექტორული შრის დამატება...</translation>
    </message>
    <message>
        <source>V</source>
        <comment>Add a Vector Layer</comment>
        <translation type="obsolete">V</translation>
    </message>
    <message>
        <source>Add a Vector Layer</source>
        <translation>ვექტორული შრის დამატება</translation>
    </message>
    <message>
        <source>Add Raster Layer...</source>
        <translation>რასტრული შრის დამატება...</translation>
    </message>
    <message>
        <source>R</source>
        <comment>Add a Raster Layer</comment>
        <translation type="obsolete">R</translation>
    </message>
    <message>
        <source>Add a Raster Layer</source>
        <translation>რასტრული შრის დამატება</translation>
    </message>
    <message>
        <source>Add PostGIS Layer...</source>
        <translation>PostGIS შრის დამატება...</translation>
    </message>
    <message>
        <source>D</source>
        <comment>Add a PostGIS Layer</comment>
        <translation type="obsolete">D</translation>
    </message>
    <message>
        <source>Add a PostGIS Layer</source>
        <translation>PostGIS შრის დამატება</translation>
    </message>
    <message>
        <source>Add WMS Layer...</source>
        <translation>WMS შრის დამატება...</translation>
    </message>
    <message>
        <source>W</source>
        <comment>Add a Web Mapping Server Layer</comment>
        <translation type="obsolete">W</translation>
    </message>
    <message>
        <source>Add a Web Mapping Server Layer</source>
        <translation>Web Mapping Server შრის დამატება</translation>
    </message>
    <message>
        <source>Open Attribute Table</source>
        <translation>ატრიბუტების ცხრილის გახსნა</translation>
    </message>
    <message>
        <source>Toggle editing</source>
        <translation>რედაქტირების ჩართვა/გამორთვა</translation>
    </message>
    <message>
        <source>Toggles the editing state of the current layer</source>
        <translation>ჩართავს/გამორთავს მიმდინარე შრის რედაქტირების მდგომარეობას</translation>
    </message>
    <message>
        <source>Save as Shapefile...</source>
        <translation>Shapefile -ად შენახვა...</translation>
    </message>
    <message>
        <source>Save the current layer as a shapefile</source>
        <translation>არსებული შრის შენახვა Shapefile-ად</translation>
    </message>
    <message>
        <source>Save Selection as Shapefile...</source>
        <translation>მონიშნულის შენახვა Shapefile-ად...</translation>
    </message>
    <message>
        <source>Save the selection as a shapefile</source>
        <translation>მონიშნულის შენახვა როგორც shapefile</translation>
    </message>
    <message>
        <source>Remove Layer</source>
        <translation>შრის ამოღება</translation>
    </message>
    <message>
        <source>Ctrl+D</source>
        <comment>Remove a Layer</comment>
        <translation type="obsolete">Ctrl+D</translation>
    </message>
    <message>
        <source>Remove a Layer</source>
        <translation>შრის ამოღება</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>მახასიათებლები...</translation>
    </message>
    <message>
        <source>Set properties of the current layer</source>
        <translation>მახასიათებლების დაყენება არსებული შრისათვის</translation>
    </message>
    <message>
        <source>Add to Overview</source>
        <translation>დათვალიერებაზე დამატებ</translation>
    </message>
    <message>
        <source>O</source>
        <comment>Add current layer to overview map</comment>
        <translation type="obsolete">O</translation>
    </message>
    <message>
        <source>Add current layer to overview map</source>
        <translation>მიმდინარე შრის დამატება რუკის დათვალიერებაზე</translation>
    </message>
    <message>
        <source>Add All to Overview</source>
        <translation>ყველაფრის დამატება დათვალიერებაზე</translation>
    </message>
    <message>
        <source>+</source>
        <comment>Show all layers in the overview map</comment>
        <translation type="obsolete">+</translation>
    </message>
    <message>
        <source>Show all layers in the overview map</source>
        <translation>ყველა შრის რუკის გადახედვაში ჩვენება</translation>
    </message>
    <message>
        <source>Remove All From Overview</source>
        <translation>ყველას დათვალიერებიდან წაშლა</translation>
    </message>
    <message>
        <source>-</source>
        <comment>Remove all layers from overview map</comment>
        <translation type="obsolete">-</translation>
    </message>
    <message>
        <source>Remove all layers from overview map</source>
        <translation>რუკის დათვალიერებიდან ყველა შრის წაშლა</translation>
    </message>
    <message>
        <source>Show All Layers</source>
        <translation>ყველა შრის ჩვენება</translation>
    </message>
    <message>
        <source>S</source>
        <comment>Show all layers</comment>
        <translation type="obsolete">S</translation>
    </message>
    <message>
        <source>Show all layers</source>
        <translation>ყველა შრის ჩვენება</translation>
    </message>
    <message>
        <source>Hide All Layers</source>
        <translation>ყველა შრის დამალვა</translation>
    </message>
    <message>
        <source>H</source>
        <comment>Hide all layers</comment>
        <translation type="obsolete">H</translation>
    </message>
    <message>
        <source>Hide all layers</source>
        <translation>ყველა შრის დამალვა</translation>
    </message>
    <message>
        <source>Manage Plugins...</source>
        <translation>ჩანართების მართვა...</translation>
    </message>
    <message>
        <source>Open the plugin manager</source>
        <translation>ჩანართის მართვის გახსნა</translation>
    </message>
    <message>
        <source>Toggle Full Screen Mode</source>
        <translation>მთელს ეკრანზე ჩვენების რეჟიმის ჩართვა/გამორთვა</translation>
    </message>
    <message>
        <source>Ctrl-F</source>
        <comment>Toggle fullscreen mode</comment>
        <translation type="obsolete">Ctrl-F</translation>
    </message>
    <message>
        <source>Toggle fullscreen mode</source>
        <translation>მთელს ეკრანზე ჩვენების რეჟიმის ჩართვა/გამორთვა</translation>
    </message>
    <message>
        <source>Project Properties...</source>
        <translation>პროექტის თვისებები...</translation>
    </message>
    <message>
        <source>P</source>
        <comment>Set project properties</comment>
        <translation type="obsolete">P</translation>
    </message>
    <message>
        <source>Set project properties</source>
        <translation>პროექტის თვისებების დაყენება</translation>
    </message>
    <message>
        <source>Options...</source>
        <translation>თვისებები...</translation>
    </message>
    <message>
        <source>Change various QGIS options</source>
        <translation>QGIS-ის სხვადასხვა თვისებების შეცვლა</translation>
    </message>
    <message>
        <source>Custom CRS...</source>
        <translation>შედგენილი CRS...</translation>
    </message>
    <message>
        <source>Manage custom coordinate reference systems</source>
        <translation>შედგენილი საკოორდინატო სისტემების მართვა</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>მინიმიზაცია</translation>
    </message>
    <message>
        <source>Ctrl+M</source>
        <comment>Minimize Window</comment>
        <translation type="obsolete">Ctrl+M</translation>
    </message>
    <message>
        <source>Minimizes the active window to the dock</source>
        <translation>აქტიური ფანჯრის მინიმიზაცია</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>გადიდება</translation>
    </message>
    <message>
        <source>Toggles between a predefined size and the window size set by the user</source>
        <translation>ჩართავს/გამორთავს წინასწარ განსაზღვრულ ზომას და მომხმარებლის მიერ დაყენებულ ფანჯრის ზომას</translation>
    </message>
    <message>
        <source>Bring All to Front</source>
        <translation>ყველაფრის წინ გადმოტანა</translation>
    </message>
    <message>
        <source>Bring forward all open windows</source>
        <translation>ყველა გახსნილი ფანჯრის წინ გადმოტანა</translation>
    </message>
    <message>
        <source>Help Contents</source>
        <translation>დახმარების შემცველობები</translation>
    </message>
    <message>
        <source>Ctrl+?</source>
        <comment>Help Documentation (Mac)</comment>
        <translation type="obsolete">Ctrl+?</translation>
    </message>
    <message>
        <source>F1</source>
        <comment>Help Documentation</comment>
        <translation type="obsolete">F1</translation>
    </message>
    <message>
        <source>Help Documentation</source>
        <translation>დამხმარე დოკუმენტაცია</translation>
    </message>
    <message>
        <source>QGIS Home Page</source>
        <translation>QGIS-ის საწყისი გვერდი</translation>
    </message>
    <message>
        <source>Ctrl+H</source>
        <comment>QGIS Home Page</comment>
        <translation type="obsolete">Ctrl+H</translation>
    </message>
    <message>
        <source>Check Qgis Version</source>
        <translation>Qgis-ის ვერსიის შემოწმება</translation>
    </message>
    <message>
        <source>Check if your QGIS version is up to date (requires internet access)</source>
        <translation>შეამოწმეთ თქვენი QGIS –ის ვერსია არის თუ არა ახალი (საჭიროებს ინტერნეტ კავშირს)</translation>
    </message>
    <message>
        <source>About</source>
        <translation>შესახებ</translation>
    </message>
    <message>
        <source>About QGIS</source>
        <translation>QGIS -ის შესახებ</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;ფაილი</translation>
    </message>
    <message>
        <source>&amp;Open Recent Projects</source>
        <translation>&amp;უკანასკნელი პროექტების გახსნა</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;რედაქტირება</translation>
    </message>
    <message>
        <source>Panels</source>
        <translation>პანელები</translation>
    </message>
    <message>
        <source>Toolbars</source>
        <translation>ინსტრუმენტების ზოლები</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;ხედი</translation>
    </message>
    <message>
        <source>&amp;Layer</source>
        <translation>&amp;შრე</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;პარამეტრები</translation>
    </message>
    <message>
        <source>&amp;Plugins</source>
        <translation>&amp;ჩანართები</translation>
    </message>
    <message>
        <source>&amp;Window</source>
        <translation>&amp;ფანჯარა</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;დახმარება</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ფაილი</translation>
    </message>
    <message>
        <source>Manage Layers</source>
        <translation>შრეების მართვა</translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation>აციფვრა</translation>
    </message>
    <message>
        <source>Map Navigation</source>
        <translation>რუკის ნავიგაცია</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>ატრიბუტები</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation>ჩანართები</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>დახმარება</translation>
    </message>
    <message>
        <source>Progress bar that displays the status of rendering layers and other time-intensive operations</source>
        <translation>შესრულების ინდიკატორი რომელიც გამოსახავს შრეების ვიზუალიზაციის სტატუსს და სხვა დროის დამაჩქარებელ  ოპერაციებს</translation>
    </message>
    <message>
        <source>Toggle extents and mouse position display</source>
        <translation>ჩართავს/გამორთავს განშლებს და მაუსის პოზიციის ჩვნებას</translation>
    </message>
    <message>
        <source>Shows the map coordinates at the current cursor position. The display is continuously updated as the mouse is moved.</source>
        <translation>რუკის კოორდინატების ჩვენება მიმდინარე კურსორის პოზიციაზე. ეკრანი გამუდმებით მაშინვე ახლდება როგორც კი მაუსი გადაადგილდება.</translation>
    </message>
    <message>
        <source>Scale </source>
        <translation>სკალა</translation>
    </message>
    <message>
        <source>Current map scale</source>
        <translation>არსებული რუკის სკალა</translation>
    </message>
    <message>
        <source>Displays the current map scale</source>
        <translation>გამოსახავს არსებული რუკის სკალას</translation>
    </message>
    <message>
        <source>Current map scale (formatted as x:y)</source>
        <translation>არსებული რუკის სკალა (ფორმატირებული როგორც x:y)</translation>
    </message>
    <message>
        <source>Stop map rendering</source>
        <translation>რუკის ვიზუალიზაციის შეჩერება</translation>
    </message>
    <message>
        <source>Render</source>
        <translation>ვიზუალიზაცია</translation>
    </message>
    <message>
        <source>When checked, the map layers are rendered in response to map navigation commands and other events. When not checked, no rendering is done. This allows you to add a large number of layers and symbolize them before rendering.</source>
        <translation>როდესაც დაწკაპუნებულია, რუკის შრეები შედეგად ვიზუალიზირდებიან რუკაზე სანავიგაციო ბრძანებებით და სხვა მოვლენებით. როდესაც არ არის დაწკაპუნებული ვიზუალიზაცია დასრულებულია. ეს გაძლევთ თქვენ საშუალებას დაამატოთ შრეების დიდი რაოდენობა და მოახდინოთ მათი სიმბოლირება ვიზუალიზაციამდე.</translation>
    </message>
    <message>
        <source>Toggle map rendering</source>
        <translation>რუკის ვიზუალიზაციის ჩართვა/გამორთვა</translation>
    </message>
    <message>
        <source>Resource Location Error</source>
        <translation>რესურსის ადგილმდებარეობის შეცდომა</translation>
    </message>
    <message>
        <source>Error reading icon resources from: 
 %1
 Quitting...</source>
        <translation>შეცდომა ხატულას რესურტების წაკითხვისას:
%1
გამოსვლა...</translation>
    </message>
    <message>
        <source>This icon shows whether on the fly coordinate reference system transformation is enabled or not. Click the icon to bring up the project properties dialog to alter this behaviour.</source>
        <translation>ეს ხატულა გამოსახავს მფრინავი საკოორდინატო სისტემის ტრანსფორმაცია შესაძლებელია თუ არა. დააწკაპუნეთ ხატულას.</translation>
    </message>
    <message>
        <source>CRS status - Click to open coordinate reference system dialog</source>
        <translation>CRS სტატუსი - დააწკაპუნეთ საკოორდინატო სისტემის დიალოგზე</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>მზადაა</translation>
    </message>
    <message>
        <source>Map canvas. This is where raster and vector layers are displayed when added to the map</source>
        <translation>რუკის ნახატი. ეს არის სადაც რასტრული და ვექტორული შრეები არიან გამოსახული რუკაზე დამატებისას</translation>
    </message>
    <message>
        <source>Map overview canvas. This canvas can be used to display a locator map that shows the current extent of the map canvas. The current extent is shown as a red rectangle. Any layer on the map can be added to the overview canvas.</source>
        <translation>რუკის დათვალიერების ნახატები. ეს ნახატები შეიძლება გამოყენებული იყოს საძიებო რუკის საჩვენებლად რომელიც გამოსახავს რუკის ნახატის მიმდინარე გაფართოებას. მიმდინარე გაფართოება ნაჩვენებია წითელი სამკუთხედით. ნებისმიერი შრე რიკაზე შეიძლება დაემატოს დათვალიერების ნახატს.</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>გადახედვა</translation>
    </message>
    <message>
        <source>Map legend that displays all the layers currently on the map canvas. Click on the check box to turn a layer on or off. Double click on a layer in the legend to customize its appearance and set other properties.</source>
        <translation>რუკის ლეგენდა რომელიც აჩვენებს ყველა იმ შრეს რომელიც ამჟამად არის რუკის ნახატზე. დააწკაპუნეთ თოლიას შრის ჩასართავად ან გამოსართავად. დააწკაპუნეთ ორჯერ ლეგენდაში შრეზე მისი გარეგნული მხარის შესაცველელად და სხვა თვისებების დასაყენებლად.</translation>
    </message>
    <message>
        <source>Legend</source>
        <translation>ლეგენდა</translation>
    </message>
    <message>
        <source>You are using QGIS version %1 built against code revision %2.</source>
        <translation>თქვენ იყენებთ QGIS ვერსიას %1  %2 კოდის გადახედვის წინააღმდეგ.</translation>
    </message>
    <message>
        <source> This copy of QGIS has been built with PostgreSQL support.</source>
        <translation>QGIS –ის ეს ასლი იყო შექმნილი PostgreSQL–ის მხარდაჭერით.</translation>
    </message>
    <message>
        <source> This copy of QGIS has been built without PostgreSQL support.</source>
        <translation>QGIS –ის ეს ასლი იყო შექმნილი PostgreSQL–ის მხარდაჭერის გარეშე.</translation>
    </message>
    <message>
        <source>
This binary was compiled against Qt %1,and is currently running against Qt %2</source>
        <translation>
ეს ორობითი დაკომპილირდა Qt %1 წინააღმდეგ, და ამჟამად გაშვებულია Qt %2 –ის წინააღმდეგ</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>ვერსია</translation>
    </message>
    <message>
        <source>New features</source>
        <translation>ახალი ობიექტები</translation>
    </message>
    <message>
        <source>This release candidate includes over 60 bug fixes and enchancements over the QGIS 0.10.0 release. In addition we have added the following new features:</source>
        <translation type="obsolete">ეს ვერსია შეიცავს 60–მდე შეცდომის გასწორებას და  QGIS 0.10.0 –ის მოდერნიზაციას. დამატებით ჩვენ დავამატეთ შემდეგი ფუნქციები:</translation>
    </message>
    <message>
        <source>Revision of all dialogs for user interface consistancy</source>
        <translation type="obsolete">ყველა დიალოგის გადახედვა მომხმარებლის ინტერფეისის შეთანხმებისთვის</translation>
    </message>
    <message>
        <source>Improvements to unique value renderer vector dialog</source>
        <translation type="obsolete">ვიზუალიზაციის ვექტორული დიალოგის უნიკალური მნიშვნელობების გაუმჯობესება</translation>
    </message>
    <message>
        <source>Symbol previews when defining vector classes</source>
        <translation type="obsolete">სიმბოლოების დათვალიერება ვექტორული კლასების განსაზღვრისას</translation>
    </message>
    <message>
        <source>Separation of python support into its own library</source>
        <translation type="obsolete">პითონის მხარდაჭერის გამოყოფა მისი საკუთარი ბიბლიოთეკისგან</translation>
    </message>
    <message>
        <source>List view and filter for GRASS toolbox to find tools more quickly</source>
        <translation type="obsolete">სიის ხედი და ფილტრი GRASS ინსტრუმენტების ყუთისთვის, რათა მოძებნოთ ინსტრუმენტები უფრო სწრაფად</translation>
    </message>
    <message>
        <source>List view and filter for Plugin Manager to find plugins more easily</source>
        <translation type="obsolete">სიის ხედი და ფილტრიPlugin Manager–სთვის, რათა მოძებნოთ ჩანართები უფრო მარტივად</translation>
    </message>
    <message>
        <source>Updated Spatial Reference System definitions</source>
        <translation type="obsolete">Spatial Reference System განსაზღვრებების განახლება</translation>
    </message>
    <message>
        <source>QML Style support for rasters and database layers</source>
        <translation type="obsolete">QML სტილი მხარდაჭერილი რასტრებისთვის და მონაცემთა ბაზის შრეებისთვის</translation>
    </message>
    <message>
        <source>Python error</source>
        <translation type="obsolete">Python-ის შეცდომა</translation>
    </message>
    <message>
        <source>Error when reading metadata of plugin </source>
        <translation type="obsolete">შეცდომა ჩანართის metadata–ს წაკითხვისას</translation>
    </message>
    <message>
        <source>Open an OGR Supported Vector Layer</source>
        <translation>OGR მხარდაჭერილი ვექტორული შრის გახსნა</translation>
    </message>
    <message>
        <source>is not a valid or recognized data source</source>
        <translation>მონაცემის წყარო არ არის სწორი ან შეუძლებელია მისი ამოცნობა</translation>
    </message>
    <message>
        <source>Invalid Data Source</source>
        <translation>არასწორი მონაცემთა წყარო</translation>
    </message>
    <message>
        <source>Invalid Layer</source>
        <translation>არასწორი შრე</translation>
    </message>
    <message>
        <source>%1 is an invalid layer and cannot be loaded.</source>
        <translation>%1 არის არასწორი შრე და შეუძლებელია მისი ჩატვირთვა.</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>შენახვა როგორც</translation>
    </message>
    <message>
        <source>Choose a QGIS project file to open</source>
        <translation>აირჩიეთ QGIS პროექტის ფაილი გასახსნელად</translation>
    </message>
    <message>
        <source>QGIS Project Read Error</source>
        <translation>QGIS პროექტის წაკითხვის შეცდომა</translation>
    </message>
    <message>
        <source>Try to find missing layers?</source>
        <translation>შეეცადეთ არარსებული შრეების პოვნა?</translation>
    </message>
    <message>
        <source>Unable to open project</source>
        <translation>შეუძლებელია პროექტის გახსნა</translation>
    </message>
    <message>
        <source>Choose a QGIS project file</source>
        <translation>აირჩიეთ QGIS პროექტის ფაილი</translation>
    </message>
    <message>
        <source>Saved project to:</source>
        <translation>შენახული პროექტი:</translation>
    </message>
    <message>
        <source>Unable to save project</source>
        <translation>შეუძლებელია პროექტის შენახვა</translation>
    </message>
    <message>
        <source>Unable to save project to </source>
        <translation>შეუძლებელია პროექტის შენახვა</translation>
    </message>
    <message>
        <source>Unable to save project </source>
        <translation>შეუძლებელია პროექტის შენახვა</translation>
    </message>
    <message>
        <source>Choose a file name to save the QGIS project file as</source>
        <translation>აირჩიეთ ფაილის სახელი, იმისათვის რომ შეინახოთ QGIS პროექტის ფაილი როგორც</translation>
    </message>
    <message>
        <source>QGIS: Unable to load project</source>
        <translation>QGIS: შეუძლებელია პროექტის ჩატვირთვა</translation>
    </message>
    <message>
        <source>Unable to load project </source>
        <translation>შეუძლებელია პროექტის ჩატვირთვა</translation>
    </message>
    <message>
        <source>Choose a file name to save the map image as</source>
        <translation>აირჩიეთ ფაილის სახელი, იმისათვის რომ შეინახოთ რუკა როგორც</translation>
    </message>
    <message>
        <source>Saved map image to</source>
        <translation>შენახული რუკის ნახატი</translation>
    </message>
    <message>
        <source>No Layer Selected</source>
        <translation>შრე არ არის მონიშნული</translation>
    </message>
    <message>
        <source>To delete features, you must select a vector layer in the legend</source>
        <translation>ობიექტების წასაშლელად თქვენ უნდა ამოირჩიოთ ლეგენდაზე ვექტორული შრე</translation>
    </message>
    <message>
        <source>No Vector Layer Selected</source>
        <translation>ვექტორული შრე არაა მონიშნული</translation>
    </message>
    <message>
        <source>Deleting features only works on vector layers</source>
        <translation>ობიექტების წაშლა მუშაობს მხოლოდ ვექტორულ შრეებზე</translation>
    </message>
    <message>
        <source>Provider does not support deletion</source>
        <translation>მწარმოებლის წაშლა შეუძლებელია</translation>
    </message>
    <message>
        <source>Data provider does not support deleting features</source>
        <translation>მონაცემის მწარმოებელს არ გააჩნია ობიექტების წაშლის მხარდაჭერა</translation>
    </message>
    <message>
        <source>Layer not editable</source>
        <translation>შრე არ არის რედაქტირებადი</translation>
    </message>
    <message>
        <source>The current layer is not editable. Choose &apos;Start editing&apos; in the digitizing toolbar.</source>
        <translation>მიმდინარე შრე არ არის რედაქტირებადი. აირჩიეთ &apos;რედაქტირების დაწყება&apos; აციფვრის ინსტრუმენტების ყუთში.</translation>
    </message>
    <message>
        <source>Problem deleting features</source>
        <translation>პრობლემებია ობიექტების წაშლისას</translation>
    </message>
    <message>
        <source>A problem occured during deletion of features</source>
        <translation>პრობლემა წარმოიშვა ობიექტების წაშლისას</translation>
    </message>
    <message>
        <source>Start editing failed</source>
        <translation>რედაქტირების დაწყება ჩაიშალა</translation>
    </message>
    <message>
        <source>Provider cannot be opened for editing</source>
        <translation>მწარმოებელის რედაქტირებისთვის გახსნა შეუძლებელია</translation>
    </message>
    <message>
        <source>Stop editing</source>
        <translation>რედაქტირების დასრულება</translation>
    </message>
    <message>
        <source>Do you want to save the changes to layer %1?</source>
        <translation>გინდათ თუ არა ცვლილებების შეტანა %1 შრეში?</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>Could not commit changes to layer %1

Errors:  %2
</source>
        <translation>შეუძლებელია  %1 შრეზე ცვლილებების განხორციელება

შეცდომები: %2
</translation>
    </message>
    <message>
        <source>Problems during roll back</source>
        <translation>პრობლემების დაბრუნებისას</translation>
    </message>
    <message>
        <source>Invalid scale</source>
        <translation>არასწორი სკალა</translation>
    </message>
    <message>
        <source>Python Console</source>
        <translation>Python კონსოლი</translation>
    </message>
    <message>
        <source>Error Loading Plugin</source>
        <translation type="obsolete">შეცდომაა ჩანართის ჩატვირთვისას</translation>
    </message>
    <message>
        <source>There was an error loading a plugin.The following diagnostic information may help the QGIS developers resolve the issue:
%1.</source>
        <translation type="obsolete">შეცდომა წარმოიქმნა ჩანართის ჩატვირთვისას. შემდეგი დიაგნოსტიკური მონაცემი შეიძლება დაეხმაროს QGIS დეველოპერებს შედეგის გადაწყვეტილების მიღებაში:
%1.</translation>
    </message>
    <message>
        <source>There is a new version of QGIS available</source>
        <translation>უკვე ხელმისაწვდომია QGIS -ის ახალი ვერია</translation>
    </message>
    <message>
        <source>You are running a development version of QGIS</source>
        <translation>თქვენ გაქვთ გაშვებული QGIS -ის დეველოპმენტ ვერსია</translation>
    </message>
    <message>
        <source>You are running the current version of QGIS</source>
        <translation>თქვენ გაქვთ გაშვებული QGIS-ის მიმდინარე ვერსია</translation>
    </message>
    <message>
        <source>Would you like more information?</source>
        <translation>გსურთ დამატებითი ინფორმაციია?</translation>
    </message>
    <message>
        <source>QGIS Version Information</source>
        <translation>QGIS ვერსიის ინფორმაცია</translation>
    </message>
    <message>
        <source>QGIS - Changes in SVN Since Last Release</source>
        <translation>QGIS - ცვლილებები SVN-ში ბოლო გამოსვლის შემდეგ</translation>
    </message>
    <message>
        <source>Unable to get current version information from server</source>
        <translation>შეუძლებელია მიმდინარე ვერსიაზე ინფორმაციის მიღება სერვერიდან</translation>
    </message>
    <message>
        <source>Connection refused - server may be down</source>
        <translation>კავშირი უარყოფილია – შეიძლება სერვერი გამორთულია</translation>
    </message>
    <message>
        <source>QGIS server was not found</source>
        <translation>QGIS სერვერი არ მოიძებნა</translation>
    </message>
    <message>
        <source>Network error while communicating with server</source>
        <translation>წარმოიქმნა ქსელის შეცდომა სერვერთან დაკავშირებისას</translation>
    </message>
    <message>
        <source>Unknown network socket error</source>
        <translation>უცნობი ქსელის სოკეტის შეცდომა</translation>
    </message>
    <message>
        <source>Unable to communicate with QGIS Version server</source>
        <translation>შეუძლებელია QGIS ვერსიის სერვერთან დაკავშირება</translation>
    </message>
    <message>
        <source>Layer is not valid</source>
        <translation>შრე არ არის სწორი</translation>
    </message>
    <message>
        <source>The layer is not a valid layer and can not be added to the map</source>
        <translation>შრე არ არის სწორი და შეუძლებელია მისი რუკაზე დამატება</translation>
    </message>
    <message>
        <source>Save?</source>
        <translation>შევინახო?</translation>
    </message>
    <message>
        <source>Do you want to save the current project?</source>
        <translation>გსურთ მიმდინარე პროექტის შენახვა?</translation>
    </message>
    <message>
        <source>Map coordinates for the current view extents</source>
        <translation>რუკის კოორდინატები მიმდინარე ხედის ჩარჩოებთან</translation>
    </message>
    <message>
        <source>Map coordinates at mouse cursor position</source>
        <translation>რუკის კოორდინატები მაუსის კურსორის პოზიციასთან</translation>
    </message>
    <message>
        <source>Extents: </source>
        <translation>მოცულობები:</translation>
    </message>
    <message>
        <source>Maptips require an active layer</source>
        <translation>რუკის მინიშნება მოითხოვს აქტიურ შრეს</translation>
    </message>
    <message>
        <source>Open a GDAL Supported Raster Data Source</source>
        <translation>GDAL Supported Raster Data Source გახსნა</translation>
    </message>
    <message>
        <source> is not a valid or recognized raster data source</source>
        <translation>რასტრული მონაცემის წყარო არ არის სწორი ან შეუძლებელია მისი ამოცნობა</translation>
    </message>
    <message>
        <source> is not a supported raster data source</source>
        <translation>არ არის მხარდაჭერილი რასტრული მონაცემთა წყაროს მიერ</translation>
    </message>
    <message>
        <source>Unsupported Data Source</source>
        <translation>მონაცემთა წყარო მხარდაჭერის გარეშე</translation>
    </message>
    <message>
        <source>Enter a name for the new bookmark:</source>
        <translation>შეიყვანეთ სახელი ახალი სანიშნისთვის:</translation>
    </message>
    <message>
        <source>Unable to create the bookmark. Your user database may be missing or corrupted</source>
        <translation>შეუძლებელია სანიშნეს შექმნა. თქვენი მომხმარებლის მონაცემთა ბაზა შესაძლოა იყოს მიუწვდომელი ან დაზიანებული</translation>
    </message>
    <message>
        <source>Project file is older</source>
        <translation>პროექტის ფაილი არის უფრო ძველი</translation>
    </message>
    <message>
        <source>&lt;p&gt;This project file was saved by an older version of QGIS.</source>
        <translation>&lt;p&gt;ეს პროექტის ფაილი იქნა შენახული QGIS -ის ძველ ვერსიაში.</translation>
    </message>
    <message>
        <source> When saving this project file, QGIS will update it to the latest version, possibly rendering it useless for older versions of QGIS.</source>
        <translation>პროექტის ფაილის შენახვისას, QGIS მოახდებს ფაილის განახლებას ბოლო ვერსიამდე, მისი ვიზუალიზაცია QGIS -ის უფრო ძველ ვერსიაში შესაძლოა იყოს გამოუსადეგი.  </translation>
    </message>
    <message>
        <source>&lt;p&gt;Even though QGIS developers try to maintain backwards compatibility, some of the information from the old project file might be lost.</source>
        <translation>&lt;p&gt;თუმცა QGIS დეველოპერები ცდილობდნენ რომ შეენახათ ძველი შესაბამისობა,ზოგიერთი ინფორმაცია ძველი პროექტიდან მაინც შეიძლება დაიკარგოს.</translation>
    </message>
    <message>
        <source> To improve the quality of QGIS, we appreciate if you file a bug report at %3.</source>
        <translation>QGIS-ის ხარისხის გასაუმჯობესებლად, ჩვენ მადლობელნი ვიქნებით თუ გამოგვიგზავნით პროგრამის ნაკლის რეპორტის ფაილს  %3 აქ.</translation>
    </message>
    <message>
        <source> Be sure to include the old project file, and state the version of QGIS you used to discover the error.</source>
        <translation>დარწმუნდით მასში ჩართოთ ძველი პროექტის ფაილი, და განაცხადოთ  QGIS ვერსია რომელსაც იყენებდით შეცდომის აღმოსაჩენად.</translation>
    </message>
    <message>
        <source>&lt;p&gt;To remove this warning when opening an older project file, uncheck the box &apos;%5&apos; in the %4 menu.</source>
        <translation>&lt;p&gt;უფრო ძველი პროექტის ფაილის გახსნისას ამ გაბრთხილების წასაშლელად, გამორთეთ &apos;%5&apos; ყუთი %4 მენიუში.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Version of the project file: %1&lt;br&gt;Current version of QGIS: %2</source>
        <translation>&lt;p&gt;პროექტის ფაილის ვერსია: %1&lt;br&gt;QGIS–ის მიმდინარე ვერსია: %2</translation>
    </message>
    <message>
        <source>&lt;tt&gt;Settings:Options:General&lt;/tt&gt;</source>
        <comment>Menu path to setting options</comment>
        <translation>&lt;tt&gt;პარამეტრები:თვისებები:ზოგადი&lt;/tt&gt;</translation>
    </message>
    <message>
        <source>Warn me when opening a project file saved with an older version of QGIS</source>
        <translation>გამაბრთხილე პროექტის ფაილის გახსნისას თუ ის შენახულია QGIS-ის უფრო ძველ ვერსიაში</translation>
    </message>
    <message>
        <source>This release candidate includes over 265 bug fixes and enchancements over the QGIS 0.11.0 release. In addition we have added the following new features:</source>
        <translation type="obsolete">ეს ვერსია შეიცავს 60–მდე შეცდომის გასწორებას და  QGIS 0.10.0 –ის მოდერნიზაციას. დამატებით ჩვენ დავამატეთ შემდეგი ფუნქციები: {265 ?} {0.11.0 ?}</translation>
    </message>
    <message>
        <source>HIG Compliance improvements for Windows / Mac OS X / KDE / Gnome</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saving a vector layer or subset of that layer to disk with a different Coordinate Reference System to the original.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advanced topological editing of vector data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single click selection of vector features.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Many improvements to raster rendering and support for building pyramids external to the raster file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overhaul of the map composer for much improved printing support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A new &apos;coordinate capture&apos; plugin was added that lets you click on the map and then cut &amp; paste the coordinates to and from the clipboard.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A new plugin for converting between OGR supported formats was added.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A new plugin for converting from DXF files to shapefiles was added.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A new plugin was added for interpolating point features into ASCII grid layers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin toolbar positions are now correctly saved when the application is closed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In the WMS client, WMS standards support has been improved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Complete API revision - we now have a stable API following well defined naming conventions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ported all GDAL/OGR and GEOS usage to use C APIs only.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS 1.0.2 is a bug fix release for the stable version of QGIS.A summary of the improvements can be found at https://trac.osgeo.org/qgis/query?status=closed&amp;milestone=Version+1.0.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS 1.0.1 is a bug fix release for the stable version of QGIS.A summary of the improvements can be found at https://trac.osgeo.org/qgis/query?status=closed&amp;milestone=Version+1.0.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The python plugin installer was completely overhauled, the new version having many improvements, including checking that the version of QGIS running will support a plugin that is being installed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vector editing overhaul - handling of geometry and attribute edit transactions is now handled transparently in one place.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The QGIS 1.0 release includes over 265 bug fixes and enhancements over the QGIS 0.11.0 release. In addition we have added the following new features:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+N</source>
        <translation type="unfinished">Ctrl+N</translation>
    </message>
    <message>
        <source>Ctrl+O</source>
        <translation type="unfinished">Ctrl+O</translation>
    </message>
    <message>
        <source>Ctrl+S</source>
        <translation type="unfinished">Ctrl+S</translation>
    </message>
    <message>
        <source>Shift+Ctrl+S</source>
        <translation type="unfinished">Shift+Ctrl+S</translation>
    </message>
    <message>
        <source>Ctrl+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+P</source>
        <translation type="unfinished">Ctrl+P</translation>
    </message>
    <message>
        <source>Ctrl+Q</source>
        <translation type="unfinished">Ctrl+Q</translation>
    </message>
    <message>
        <source>.</source>
        <translation type="unfinished">.</translation>
    </message>
    <message>
        <source>/</source>
        <translation type="unfinished">/</translation>
    </message>
    <message>
        <source>Ctrl+/</source>
        <translation type="unfinished">Ctrl+/</translation>
    </message>
    <message>
        <source>Ctrl++</source>
        <translation type="unfinished">Ctrl++</translation>
    </message>
    <message>
        <source>Ctrl+-</source>
        <translation type="unfinished">Ctrl+-</translation>
    </message>
    <message>
        <source>I</source>
        <translation type="unfinished">I</translation>
    </message>
    <message>
        <source>M</source>
        <translation type="unfinished">M</translation>
    </message>
    <message>
        <source>J</source>
        <translation type="unfinished">J</translation>
    </message>
    <message>
        <source>F</source>
        <translation type="unfinished">F</translation>
    </message>
    <message>
        <source>Ctrl+J</source>
        <translation type="unfinished">Ctrl+J</translation>
    </message>
    <message>
        <source>Ctrl+B</source>
        <translation type="unfinished">Ctrl+B</translation>
    </message>
    <message>
        <source>B</source>
        <translation type="unfinished">B</translation>
    </message>
    <message>
        <source>Ctrl+R</source>
        <translation type="unfinished">Ctrl+R</translation>
    </message>
    <message>
        <source>N</source>
        <translation type="unfinished">N</translation>
    </message>
    <message>
        <source>V</source>
        <translation type="unfinished">V</translation>
    </message>
    <message>
        <source>R</source>
        <translation type="unfinished">R</translation>
    </message>
    <message>
        <source>D</source>
        <translation type="unfinished">D</translation>
    </message>
    <message>
        <source>W</source>
        <translation type="unfinished">W</translation>
    </message>
    <message>
        <source>Ctrl+D</source>
        <translation type="unfinished">Ctrl+D</translation>
    </message>
    <message>
        <source>O</source>
        <translation type="unfinished">O</translation>
    </message>
    <message>
        <source>+</source>
        <translation type="unfinished">+</translation>
    </message>
    <message>
        <source>-</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S</source>
        <translation type="unfinished">S</translation>
    </message>
    <message>
        <source>H</source>
        <translation type="unfinished">H</translation>
    </message>
    <message>
        <source>Ctrl-F</source>
        <translation type="unfinished">Ctrl-F</translation>
    </message>
    <message>
        <source>P</source>
        <translation type="unfinished">P</translation>
    </message>
    <message>
        <source>Ctrl+M</source>
        <translation type="unfinished">Ctrl+M</translation>
    </message>
    <message>
        <source>Ctrl+?</source>
        <translation type="unfinished">Ctrl+?</translation>
    </message>
    <message>
        <source>F1</source>
        <translation type="unfinished">F1</translation>
    </message>
    <message>
        <source>Ctrl+H</source>
        <translation type="unfinished">Ctrl+H</translation>
    </message>
    <message>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgisAppBase</name>
    <message>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
</context>
<context>
    <name>QgsAbout</name>
    <message>
        <source>About Quantum GIS</source>
        <translation>Quantum GIS-ის შესახებ</translation>
    </message>
    <message>
        <source>About</source>
        <translation>შესახებ</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:x-large; font-weight:600;&quot;&gt;&lt;span style=&quot; font-size:x-large;&quot;&gt;Quantum GIS (QGIS)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:x-large; font-weight:600;&quot;&gt;&lt;span style=&quot; font-size:x-large;&quot;&gt;Quantum GIS (QGIS)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>ვერსია</translation>
    </message>
    <message>
        <source>Quantum GIS is licensed under the GNU General Public License</source>
        <translation>Quantum GIS არის ლიცენზირებული  GNU General Public License –ის ქვეშ</translation>
    </message>
    <message>
        <source>http://www.gnu.org/licenses</source>
        <translation>http://www.gnu.org/licenses</translation>
    </message>
    <message>
        <source>QGIS Home Page</source>
        <translation>QGIS-ის საწყისი გვერდი</translation>
    </message>
    <message>
        <source>Join our user mailing list</source>
        <translation>შემოუერთდით ჩვენს ელექტრონული წერილების დაგზანის სიას</translation>
    </message>
    <message>
        <source>What&apos;s New</source>
        <translation>რა არის ახალი</translation>
    </message>
    <message>
        <source>Developers</source>
        <translation>დეველოპერები</translation>
    </message>
    <message>
        <source>Providers</source>
        <translation>მწარმოებლები</translation>
    </message>
    <message>
        <source>Sponsors</source>
        <translation>სპონსორები</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>თანხმობა</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">სახელი</translation>
    </message>
</context>
<context>
    <name>QgsAddAttrDialogBase</name>
    <message>
        <source>Add Attribute</source>
        <translation>ატრიბუტის დამატება</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>სახელი:</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>ტიპი:</translation>
    </message>
</context>
<context>
    <name>QgsApplication</name>
    <message>
        <source>Exception</source>
        <translation>გამონაკლისი</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialog</name>
    <message>
        <source>Select an action</source>
        <comment>File dialog window title</comment>
        <translation>მოქმედების არჩევა</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialogBase</name>
    <message>
        <source>Attribute Actions</source>
        <translation> ატრიბუტის მოქმედებები</translation>
    </message>
    <message>
        <source>Action properties</source>
        <translation>ატრიბუტის თვისებები</translation>
    </message>
    <message>
        <source>Enter the name of an action here. The name should be unique (qgis will make it unique if necessary).</source>
        <translation>აქ შეიყვანეთ მოქმედების სახელი. სახელი უნდა იყოს უნიკალური (თუ საჭიროა qgis აქცევს მას უნიკალურად).</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Enter the action name here</source>
        <translation>აქ შეიყვანეთ მოქმედების სახელი</translation>
    </message>
    <message>
        <source>Enter the action here. This can be any program, script or command that is available on your system. When the action is invoked any set of characters that start with a % and then have the name of a field will be replaced by the value of that field. The special characters %% will be replaced by the value of the field that was selected. Double quote marks group text into single arguments to the program, script or command. Double quotes will be ignored if preceeded by a backslash</source>
        <translation>შეიყვანეთ მოქმედება აქ. ეს შესაძლოა იყოს პროგრამა, სკრიპტი ან ბრძანება რომელიც ხელმისაწვდომია თქვენ სისტემაზე. როდესაც მოქმედება გაეშვება სიმბოლოთა ნებისმიერი სიმრავლე, რომელიც იწყება %–თი და შემდეგ აქვთ ველის სახელი ჩანაცვლდებიან ამ ველის მნიშვნელობებით. სპეციალური სიმბოლოები  %% ჩანაცვლდებიან იმ ველის მნიშვნელობებით რომლებიც იყო მონიშნული. ორმაგი ბრჭყალები აჯგუფებენ ტექსტს ერთ არგუმენტად პროგრამისთვის, სკრიპტისთვის ან ბრძანებისთვის. ორმაგი ბრჭყალები იქნება იგნორირებული შებრუნებული დახრილი ხაზის მიერ </translation>
    </message>
    <message>
        <source>Action</source>
        <translation>მოქმედება</translation>
    </message>
    <message>
        <source>Enter the action command here</source>
        <translation>აქ შეიყვანეთ მოქმედების ბრძანება</translation>
    </message>
    <message>
        <source>Browse for action</source>
        <translation>მოქმედების არჩევა</translation>
    </message>
    <message>
        <source>Click to browse for an action</source>
        <translation>დააწკაპუნეთ მოქმედების ასარჩევად</translation>
    </message>
    <message>
        <source>Clicking the button will let you select an application to use as the action</source>
        <translation>ღილაკზე დაწკაპუნება საშუალებას მოგცემთ მონიშნოთ პროგრამა იმისთვის რომ გამოიყენოთ როგორც მოქმედება</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>The valid attribute names for this layer</source>
        <translation>ამ შრისთვის სწორი ატრიბუტების სახელები</translation>
    </message>
    <message>
        <source>Inserts the selected field into the action, prepended with a %</source>
        <translation>სვავს არჩეულ ველს მოქმედებაში, რომელიც იწყება % –თი</translation>
    </message>
    <message>
        <source>Insert field</source>
        <translation>ველის ჩასმა</translation>
    </message>
    <message>
        <source>Captures any output from the action</source>
        <translation>იღებს ნებისმიერ გამომავალს მოძრაობიდან</translation>
    </message>
    <message>
        <source>Captures the standard output or error generated by the action and displays it in a dialog box</source>
        <translation>იღებს სტანდარტულ გამომავალს ან შეცდომას რომელიც გენერირდება მოძრაობით და აჩვენებს მას დიალოგურ ფანჯარაზე</translation>
    </message>
    <message>
        <source>Capture output</source>
        <translation>გამავალი აღებული</translation>
    </message>
    <message>
        <source>This list contains all actions that have been defined for the current layer. Add actions by entering the details in the controls below and then pressing the Insert action button. Actions can be edited here by double clicking on the item.</source>
        <translation> ეს სია შეიცავს ყველა იმ მოქმედებას რომლებიც განსაზღვრულია მიმდინარე შრისთვის. დაამატეთ მოქმედებები ქვემოთ კონტროლში მონაცემების შეყვანით და ჩასმის მოქმედების ღილაკზე დაჭერით. მოქმედებების რედაქტირება არის შესაძლებელი მასზე ორჯერ დაწკაპუნებით.</translation>
    </message>
    <message>
        <source>Capture</source>
        <translation>აღება</translation>
    </message>
    <message>
        <source>Inserts the action into the list above</source>
        <translation>მოქმედების ჩამატება ზემოთ არსებულ სიაში</translation>
    </message>
    <message>
        <source>Insert action</source>
        <translation>მოქმედების ჩასმა</translation>
    </message>
    <message>
        <source>Update the selected action</source>
        <translation>მონიშნული მოქმედების განახლება</translation>
    </message>
    <message>
        <source>Update action</source>
        <translation>მოქმედების განახლება</translation>
    </message>
    <message>
        <source>Move the selected action up</source>
        <translation>მონიშნული მოქმედების ზემოთ გადატანა</translation>
    </message>
    <message>
        <source>Move up</source>
        <translation>ზემოთ გადატანა</translation>
    </message>
    <message>
        <source>Move the selected action down</source>
        <translation>მონიშნული მოქმედების ქვემოთ გადატანა</translation>
    </message>
    <message>
        <source>Move down</source>
        <translation>ქვემოთ გადატანა</translation>
    </message>
    <message>
        <source>Remove the selected action</source>
        <translation>მონიშნული მოქმედების გაუქმება</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>გაუქმება</translation>
    </message>
</context>
<context>
    <name>QgsAttributeDialog</name>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source> (int)</source>
        <translation>(int)</translation>
    </message>
    <message>
        <source> (dbl)</source>
        <translation>(dbl)</translation>
    </message>
    <message>
        <source> (txt)</source>
        <translation>(txt)</translation>
    </message>
    <message>
        <source>Select a file</source>
        <translation>ფაილის არჩევა</translation>
    </message>
</context>
<context>
    <name>QgsAttributeDialogBase</name>
    <message>
        <source>Enter Attribute Values</source>
        <translation>შეიყვანეთ ატრიბუტის მნიშვნელობები</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTable</name>
    <message>
        <source>Run action</source>
        <translation>მოქმედების გაშვება</translation>
    </message>
    <message>
        <source>Updating selection...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Abort</source>
        <translation type="unfinished">შესახებ</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableBase</name>
    <message>
        <source>Attribute Table</source>
        <translation>ატრიბუტების ცხრილი</translation>
    </message>
    <message>
        <source>Remove selection</source>
        <translation>მონიშვნის ამოღება</translation>
    </message>
    <message>
        <source>Move selected to top</source>
        <translation>მონიშნულის გადატანა ზემოთ</translation>
    </message>
    <message>
        <source>Ctrl+T</source>
        <translation>Ctrl+T</translation>
    </message>
    <message>
        <source>Invert selection</source>
        <translation>მონიშნულის შებრუნება</translation>
    </message>
    <message>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <source>Copy selected rows to clipboard (Ctrl+C)</source>
        <translation>არჩეული სტრიქონების ბუფერში კოპირება (Ctrl+C)</translation>
    </message>
    <message>
        <source>Copies the selected rows to the clipboard</source>
        <translation>აკოპირებს მონიშნულ სტრიქონებს ბუფერში</translation>
    </message>
    <message>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <source>Zoom map to the selected rows (Ctrl-J)</source>
        <translation>რუკის ზომის შეცვლა მონიშნულ სტრიქონებამდე (Ctrl-J)</translation>
    </message>
    <message>
        <source>Zoom map to the selected rows</source>
        <translation>რუკის ზომის შეცვლა მონიშნულ სტრიქონებამდე</translation>
    </message>
    <message>
        <source>Ctrl+J</source>
        <translation>Ctrl+J</translation>
    </message>
    <message>
        <source>Search for</source>
        <translation>ძებნა</translation>
    </message>
    <message>
        <source>in</source>
        <translation>-ში</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>ძებნა</translation>
    </message>
    <message>
        <source>Adva&amp;nced...</source>
        <translation>საფუძ&amp;ვლიანი...</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <source>Toggle editing mode</source>
        <translation>ჩართავს/გამორთავს რედაქტირების რეჟიმს</translation>
    </message>
    <message>
        <source>Click to toggle table editing</source>
        <translation>დააწკაპუნეთ ცხრილის რედაქტირების ჩართვა/გამორთვას</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableDisplay</name>
    <message>
        <source>select</source>
        <translation>მონიშვნა</translation>
    </message>
    <message>
        <source>select and bring to top</source>
        <translation>მონიშვნა და ზემოთ ატანა</translation>
    </message>
    <message>
        <source>show only matching</source>
        <translation>მხოლოდ მსგავსების ჩვენება</translation>
    </message>
    <message>
        <source>Attribute table - </source>
        <translation>ატრიბუტების ცხრილი -</translation>
    </message>
    <message>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ფაილი</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
    <message>
        <source>Ctrl+W</source>
        <translation>Ctrl+W</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>რედაქტირება</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;დაბრუნება</translation>
    </message>
    <message>
        <source>Ctrl+Z</source>
        <translation>Ctrl+Z</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>ამო&amp;ჭრა</translation>
    </message>
    <message>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;კოპირება</translation>
    </message>
    <message>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;ჩასმა</translation>
    </message>
    <message>
        <source>Ctrl+V</source>
        <translation>Ctrl+V</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>წაშლა</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>შრე</translation>
    </message>
    <message>
        <source>Zoom to Selection</source>
        <translation>ზომის შეცვლა მონიშნულამდე</translation>
    </message>
    <message>
        <source>Ctrl+J</source>
        <translation>Ctrl+J</translation>
    </message>
    <message>
        <source>Toggle Editing</source>
        <translation>რედაქტირების ჩართვა/გამორთვა</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>ცხრილი</translation>
    </message>
    <message>
        <source>Move to Top</source>
        <translation>ზემოთ ატანა</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>შებრუნება</translation>
    </message>
    <message>
        <source>Search string parsing error</source>
        <translation>სტრინგის დამუშავების შეცდომის მოძებნა</translation>
    </message>
    <message>
        <source>Search results</source>
        <translation>ძებნის შედეგები</translation>
    </message>
    <message>
        <source>You&apos;ve supplied an empty search string.</source>
        <translation>თქვენ მიაწოდეთ ცარიელი საძიებო სტრინგი.</translation>
    </message>
    <message>
        <source>Error during search</source>
        <translation>შეცდომაა ძებნის დროს</translation>
    </message>
    <message>
        <source>Found %d matching features.</source>
        <translation type="obsolete">
        </translation>
    </message>
    <message>
        <source>No matching features found.</source>
        <translation>მსგავსი ობიექტები ვერ მოიძებნა.</translation>
    </message>
    <message>
        <source>bad_alloc exception</source>
        <translation>bad_alloc შეცდომა</translation>
    </message>
    <message>
        <source>Filling the attribute table has been stopped because there was no more virtual memory left</source>
        <translation>ატრიბუტების ცხრილის შევსება შეჩერდა იმიტომ რომ აღარ არის ადგილი ვირტუალურ მეხსიერებაში</translation>
    </message>
    <message>
        <source>Found %1 matching features.</source>
        <translation type="obsolete">
        </translation>
    </message>
</context>
<context>
    <name>QgsBookmarks</name>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;წაშლა</translation>
    </message>
    <message>
        <source>&amp;Zoom to</source>
        <translation>&amp;ზომის შეცვლა</translation>
    </message>
    <message>
        <source>Really Delete?</source>
        <translation>ნამდვილად წავშალო?</translation>
    </message>
    <message>
        <source>Are you sure you want to delete the </source>
        <translation>დარწმუნებული ხართ რომ გინდათ გინდათ წაშალოთ</translation>
    </message>
    <message>
        <source> bookmark?</source>
        <translation>სანიშნე?</translation>
    </message>
    <message>
        <source>Error deleting bookmark</source>
        <translation>შეცდომაა სანიშნის წაშლისას</translation>
    </message>
    <message>
        <source>Failed to delete the </source>
        <translation>ვერ მოხერხდა წაშლა</translation>
    </message>
    <message>
        <source> bookmark from the database. The database said:
</source>
        <translation>სანიშნის ბაზდან. ბაზისგან მოვიდა პასუხი:
</translation>
    </message>
</context>
<context>
    <name>QgsBookmarksBase</name>
    <message>
        <source>Geospatial Bookmarks</source>
        <translation>Geospatial სანიშნეები</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Project</source>
        <translation>პროექტი</translation>
    </message>
    <message>
        <source>Extent</source>
        <translation>გაფართოება</translation>
    </message>
    <message>
        <source>Id</source>
        <translation>უნიკალური ნომერი</translation>
    </message>
</context>
<context>
    <name>QgsComposer</name>
    <message>
        <source>Move Content</source>
        <translation type="obsolete">შიგთავსის გადატანა</translation>
    </message>
    <message>
        <source>Move item content</source>
        <translation type="obsolete">ელემენტის შიგთავსის გადატანა</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">&amp;დაჯგუფება</translation>
    </message>
    <message>
        <source>Group items</source>
        <translation type="obsolete">ჯგუფის ერთეულები</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="obsolete">&amp;ჯგუფის დაშლა</translation>
    </message>
    <message>
        <source>Ungroup items</source>
        <translation type="obsolete">ელემენტების ჯგუფის დაშლა</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">გადმოტანა</translation>
    </message>
    <message>
        <source>Raise selected items</source>
        <translation type="obsolete">მონიშნული ობიექტების გადმოტანა</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">ქვედა</translation>
    </message>
    <message>
        <source>Lower selected items</source>
        <translation type="obsolete">ქვემოთ მონიშნული ობიექტები</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">წინ გამოტანა</translation>
    </message>
    <message>
        <source>Move selected items to top</source>
        <translation type="obsolete">მონიშნული ობიექტების ზემოთ ატანა</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">უკან გადატანა</translation>
    </message>
    <message>
        <source>Move selected items to bottom</source>
        <translation type="obsolete">მონიშნული ობიექტების ქვემოთ ჩატანა</translation>
    </message>
    <message>
        <source>QGIS - print composer</source>
        <translation>QGIS - შემქმნელის დაბეჭდვა</translation>
    </message>
    <message>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ფაილი</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
    <message>
        <source>Ctrl+W</source>
        <translation>Ctrl+W</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>რედაქტირება</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;უკან</translation>
    </message>
    <message>
        <source>Ctrl+Z</source>
        <translation>Ctrl+Z</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>ამ&amp;ოჭრა</translation>
    </message>
    <message>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;კოპირება</translation>
    </message>
    <message>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;ჩასმა</translation>
    </message>
    <message>
        <source>Ctrl+V</source>
        <translation>Ctrl+V</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>წაშლა</translation>
    </message>
    <message>
        <source>View</source>
        <translation>ხედი</translation>
    </message>
    <message>
        <source>Layout</source>
        <translation>სქემა</translation>
    </message>
    <message>
        <source>Map 1</source>
        <translation>რუკა 1</translation>
    </message>
    <message>
        <source>Big image</source>
        <translation>დიდი ნახატი</translation>
    </message>
    <message>
        <source>To create image </source>
        <translation>ნახატის შესაქმნელად</translation>
    </message>
    <message>
        <source> requires circa </source>
        <translation>მოითხოვს მიახლოებით</translation>
    </message>
    <message>
        <source> MB of memory</source>
        <translation>მეხსიერების  MB (მეგაბაიტი)</translation>
    </message>
    <message>
        <source>format</source>
        <translation>ფორმატი</translation>
    </message>
    <message>
        <source>Choose a file name to save the map image as</source>
        <translation>ამოირჩიეთი ფაილის სახელი რუკის ნახატის შესანახად როგორც</translation>
    </message>
    <message>
        <source>SVG warning</source>
        <translation>SVG გაბრთხილება</translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation>არ გამოიტანო ეს შეცდომა კვლავ</translation>
    </message>
    <message>
        <source>Choose a file name to save the map as</source>
        <translation>აირჩიეთ ფაილის სახელი რუკის შესანახად</translation>
    </message>
    <message>
        <source>SVG Format</source>
        <translation>SVG ფორმატი</translation>
    </message>
    <message>
        <source>Project contains WMS layers</source>
        <translation>პროექტი შეიცავს WMS შრეებს</translation>
    </message>
    <message>
        <source>Some WMS servers (e.g. UMN mapserver) have a limit for the WIDTH and HEIGHT parameter. Printing layers from such servers may exceed this limit. If this is the case, the WMS layer will not be printed</source>
        <translation>ზოგიერთი WMS სერვერს (მაგალითად UMN რუკათა სერვერს) გააჩნია ლიმიტი WIDTH და  HEIGHT პარამეტრებისთვის. ასეთი სერვერებიდან შრეების დაბეჭდვამ შეიძლება გადააჭარბოს ამ ლიმიტს. ამ შემთხვევაში WMS შრე არ დაიბეჭდება</translation>
    </message>
    <message>
        <source>&lt;p&gt;The SVG export function in Qgis has several problems due to bugs and deficiencies in the </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Qt4 svg code. Of note, text does not appear in the SVG file and there are problems with the map bounding box clipping other items such as the legend or scale bar.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Qt4 svg code. In particular, there are problems with layers not being clipped to the map bounding box.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If you require a vector-based output file from Qgis it is suggested that you try printing to PostScript if the SVG output is not satisfactory.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsComposerBase</name>
    <message>
        <source>MainWindow</source>
        <translation>ძირითადი ფანჯარა</translation>
    </message>
    <message>
        <source>General</source>
        <translation>ზიგადი</translation>
    </message>
    <message>
        <source>Composition</source>
        <translation>კომპოზიცია</translation>
    </message>
    <message>
        <source>Item</source>
        <translation>ობიექტი</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>დახმარება</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>&amp;ბეჭდვა...</translation>
    </message>
    <message>
        <source>Zoom Full</source>
        <translation>მთლიანად გადიდება</translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation>გადიდება</translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>დაპატარავება</translation>
    </message>
    <message>
        <source>Add Map</source>
        <translation>რუკის დამატება</translation>
    </message>
    <message>
        <source>Add new map</source>
        <translation>ახალი რუკის დამატება</translation>
    </message>
    <message>
        <source>Add Label</source>
        <translation>წარწერის დამატება</translation>
    </message>
    <message>
        <source>Add new label</source>
        <translation>ახალი წარწერის დამატება</translation>
    </message>
    <message>
        <source>Add Vector Legend</source>
        <translation>ვექტორული ლეგენდის დამატება</translation>
    </message>
    <message>
        <source>Add new vect legend</source>
        <translation>ახალი ვექტორული ლეგენდის დამატება</translation>
    </message>
    <message>
        <source>Move Item</source>
        <translation>ობიექტის გადატანა</translation>
    </message>
    <message>
        <source>Select/Move item</source>
        <translation>ობიექტის არჩევა/გადატანა</translation>
    </message>
    <message>
        <source>Export as Image...</source>
        <translation>ექსპორტი როგორც ნახატი...</translation>
    </message>
    <message>
        <source>Export as SVG...</source>
        <translation>ექსპორტი როგორც SVG...</translation>
    </message>
    <message>
        <source>Add Scalebar</source>
        <translation>სკალის ზოლის დამატება</translation>
    </message>
    <message>
        <source>Add new scalebar</source>
        <translation>ახალი სკალის ზოლის დამატება</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>განახლება</translation>
    </message>
    <message>
        <source>Refresh view</source>
        <translation>ხედის განახლება</translation>
    </message>
    <message>
        <source>Add Image</source>
        <translation>ნახატის დამატება</translation>
    </message>
    <message>
        <source>Move Content</source>
        <translation type="unfinished">შიგთავსის გადატანა</translation>
    </message>
    <message>
        <source>Move item content</source>
        <translation type="unfinished">ელემენტის შიგთავსის გადატანა</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="unfinished">ჯგუფი</translation>
    </message>
    <message>
        <source>Group items</source>
        <translation type="unfinished">ჯგუფის ერთეულები</translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ungroup items</source>
        <translation type="unfinished">ელემენტების ჯგუფის დაშლა</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="unfinished">გადმოტანა</translation>
    </message>
    <message>
        <source>Raise selected items</source>
        <translation type="unfinished">მონიშნული ობიექტების გადმოტანა</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="unfinished">ქვედა</translation>
    </message>
    <message>
        <source>Lower selected items</source>
        <translation type="unfinished">ქვემოთ მონიშნული ობიექტები</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="unfinished">წინ გამოტანა</translation>
    </message>
    <message>
        <source>Move selected items to top</source>
        <translation type="unfinished">მონიშნული ობიექტების ზემოთ ატანა</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="unfinished">უკან გადატანა</translation>
    </message>
    <message>
        <source>Move selected items to bottom</source>
        <translation type="unfinished">მონიშნული ობიექტების ქვემოთ ჩატანა</translation>
    </message>
</context>
<context>
    <name>QgsComposerItemWidgetBase</name>
    <message>
        <source>Form</source>
        <translation>ფორმა</translation>
    </message>
    <message>
        <source>Composer item properties</source>
        <translation>შემქმნელის ობიექტების თვისებები</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>ფერი:</translation>
    </message>
    <message>
        <source>Frame...</source>
        <translation>ჩარჩო...</translation>
    </message>
    <message>
        <source>Background...</source>
        <translation>ფონი...</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>გაუმჭვირვალობა:</translation>
    </message>
    <message>
        <source>Outline width: </source>
        <translation>კონტურის სისქე:</translation>
    </message>
    <message>
        <source>Frame</source>
        <translation>ჩარჩო</translation>
    </message>
</context>
<context>
    <name>QgsComposerLabelWidgetBase</name>
    <message>
        <source>Label Options</source>
        <translation>შრის მახასიათებლები</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>შრიფტი</translation>
    </message>
    <message>
        <source>Margin (mm):</source>
        <translation>საზღვარი (მმ):</translation>
    </message>
</context>
<context>
    <name>QgsComposerLegendItemDialogBase</name>
    <message>
        <source>Legend item properties</source>
        <translation>ლეგენდის  ელემენტის თვისებები</translation>
    </message>
    <message>
        <source>Item text:</source>
        <translation>ელემენტის ტექსტი:</translation>
    </message>
</context>
<context>
    <name>QgsComposerLegendWidgetBase</name>
    <message>
        <source>Barscale Options</source>
        <translation>სკალის ზოლის თვისებები</translation>
    </message>
    <message>
        <source>General</source>
        <translation>ზიგადი</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>სათაური:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation>შრიფტი:</translation>
    </message>
    <message>
        <source>Title...</source>
        <translation>სათაური...</translation>
    </message>
    <message>
        <source>Layer...</source>
        <translation>შრე...</translation>
    </message>
    <message>
        <source>Item...</source>
        <translation>ელემენტი...</translation>
    </message>
    <message>
        <source>Symbol width: </source>
        <translation>სიმბოლოს სიგანე:</translation>
    </message>
    <message>
        <source>Symbol height:</source>
        <translation>სიმბოლოს სიმაღლე:</translation>
    </message>
    <message>
        <source>Layer space: </source>
        <translation>შრის ადგილი:</translation>
    </message>
    <message>
        <source>Symbol space:</source>
        <translation>სიმბოლოს ადგილი:</translation>
    </message>
    <message>
        <source>Icon label space:</source>
        <translation>ხატულას წარერის ადგილი:</translation>
    </message>
    <message>
        <source>Box space:</source>
        <translation>ყუთის ადგილი:</translation>
    </message>
    <message>
        <source>Legend items</source>
        <translation>ლეგენდის ელემენტები</translation>
    </message>
    <message>
        <source>down</source>
        <translation>ქვემოთ</translation>
    </message>
    <message>
        <source>up</source>
        <translation>ზემოთ</translation>
    </message>
    <message>
        <source>remove</source>
        <translation>გაუქმება</translation>
    </message>
    <message>
        <source>edit...</source>
        <translation>რედაქტირება...</translation>
    </message>
    <message>
        <source>update</source>
        <translation>განახლება</translation>
    </message>
    <message>
        <source>update all</source>
        <translation>ყველაფრის განახლება</translation>
    </message>
</context>
<context>
    <name>QgsComposerMap</name>
    <message>
        <source>Map</source>
        <translation>რუკა</translation>
    </message>
    <message>
        <source>Map will be printed here</source>
        <translation>რუკა იქნება აქ დაბეჭდილი</translation>
    </message>
</context>
<context>
    <name>QgsComposerMapWidget</name>
    <message>
        <source>Cache</source>
        <translation>დაჭერა</translation>
    </message>
    <message>
        <source>Rectangle</source>
        <translation>სამკუთხედი</translation>
    </message>
    <message>
        <source>Render</source>
        <translation>ვიზუალიზაცია</translation>
    </message>
</context>
<context>
    <name>QgsComposerMapWidgetBase</name>
    <message>
        <source>Map options</source>
        <translation>რუკის მახასიათებლები</translation>
    </message>
    <message>
        <source>&lt;b&gt;Map&lt;/b&gt;</source>
        <translation>&lt;b&gt;რუკა&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>სიგანე</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>სიმაღლე</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>სკალა:</translation>
    </message>
    <message>
        <source>1:</source>
        <translation>1:</translation>
    </message>
    <message>
        <source>Map extent</source>
        <translation>რუკის გაფართოება</translation>
    </message>
    <message>
        <source>X min:</source>
        <translation>X მინ:</translation>
    </message>
    <message>
        <source>Y min:</source>
        <translation>Y მინ:</translation>
    </message>
    <message>
        <source>X max:</source>
        <translation>X მაქს:</translation>
    </message>
    <message>
        <source>Y max:</source>
        <translation>Y მაქს:</translation>
    </message>
    <message>
        <source>set to map canvas extent</source>
        <translation>რუკის ნახატის განშლის დაყენება</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>დათვალიერება</translation>
    </message>
    <message>
        <source>Update preview</source>
        <translation>დათვალიერების განახლება</translation>
    </message>
</context>
<context>
    <name>QgsComposerPictureWidget</name>
    <message>
        <source>Select svg or image file</source>
        <translation>აირჩიეთ svg ან image ფაილი</translation>
    </message>
</context>
<context>
    <name>QgsComposerPictureWidgetBase</name>
    <message>
        <source>Picture Options</source>
        <translation>ნახატის მახასიათებლები</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>დათვალიერება...</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>სიგანე:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation>სიმაღლე:</translation>
    </message>
    <message>
        <source>Rotation:</source>
        <translation>მოტრიალება:</translation>
    </message>
</context>
<context>
    <name>QgsComposerScaleBar</name>
    <message>
        <source>Single Box</source>
        <translation type="obsolete">ერთმაგი ყუთი</translation>
    </message>
    <message>
        <source>Double Box</source>
        <translation type="obsolete">ორმაგი ყუთი</translation>
    </message>
    <message>
        <source>Line Ticks Middle</source>
        <translation type="obsolete">ხაზს ნიშნავს შუაში</translation>
    </message>
    <message>
        <source>Line Ticks Down</source>
        <translation type="obsolete">ხაზს ნიშნავს ქვემოთ</translation>
    </message>
    <message>
        <source>Line Ticks Up</source>
        <translation type="obsolete">ხაზს ნიშნავს ზემოთ</translation>
    </message>
    <message>
        <source>Numeric</source>
        <translation type="obsolete">რიცხვითი</translation>
    </message>
</context>
<context>
    <name>QgsComposerScaleBarWidget</name>
    <message>
        <source>Single Box</source>
        <translation>ერთმაგი ყუთი</translation>
    </message>
    <message>
        <source>Double Box</source>
        <translation>ორმაგი ყუთი</translation>
    </message>
    <message>
        <source>Line Ticks Middle</source>
        <translation>ხაზს ნიშნავს შუაში</translation>
    </message>
    <message>
        <source>Line Ticks Down</source>
        <translation>ხაზს ნიშნავს ქვემოთ</translation>
    </message>
    <message>
        <source>Line Ticks Up</source>
        <translation>ხაზს ნიშნავს ზემოთ</translation>
    </message>
    <message>
        <source>Numeric</source>
        <translation>რიცხვითი</translation>
    </message>
    <message>
        <source>Map </source>
        <translation type="obsolete">რუკა</translation>
    </message>
    <message>
        <source>Map %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsComposerScaleBarWidgetBase</name>
    <message>
        <source>Barscale Options</source>
        <translation>ზოლის სკალის თვისებები</translation>
    </message>
    <message>
        <source>Segment size (map units):</source>
        <translation>სეგმენტის ზომა (რუკის ერთეულები):</translation>
    </message>
    <message>
        <source>Map units per bar unit:</source>
        <translation>რუკის ერთეულები ზოლის ერთეულში:</translation>
    </message>
    <message>
        <source>Number of segments:</source>
        <translation>სეგმენტების რაოდენობა:</translation>
    </message>
    <message>
        <source>Segments left:</source>
        <translation>დარჩენილი სეგმენტები:</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>სტილი:</translation>
    </message>
    <message>
        <source>Map:</source>
        <translation>რუკა:</translation>
    </message>
    <message>
        <source>Height (mm):</source>
        <translation>სიმაღლე (მმ):</translation>
    </message>
    <message>
        <source>Line width:</source>
        <translation>ხაზის სიგანე:</translation>
    </message>
    <message>
        <source>Label space:</source>
        <translation>წარწერის ადგილი:</translation>
    </message>
    <message>
        <source>Box space:</source>
        <translation>ყუთის ადგილი:</translation>
    </message>
    <message>
        <source>Unit label:</source>
        <translation>ერთეულის წარწერა:</translation>
    </message>
    <message>
        <source>Font...</source>
        <translation>შრიფტი...</translation>
    </message>
    <message>
        <source>Color...</source>
        <translation>ფერი...</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegendBase</name>
    <message>
        <source>Vector Legend Options</source>
        <translation>ვექტორული ლეგენდის მახასიათებლები</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>დათვალიერება</translation>
    </message>
    <message>
        <source>Map</source>
        <translation>რუკა</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>სათაური</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation>შრეები</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>ჯგუფი</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>ყუთი</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>შრიფტი</translation>
    </message>
</context>
<context>
    <name>QgsCompositionBase</name>
    <message>
        <source>Composition</source>
        <translation>კომპოზიცია</translation>
    </message>
    <message>
        <source>Paper</source>
        <translation>ფურცელი</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>ორიენტაცია</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>სიმაღლე</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>სიგანე</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>ერთეულები</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>ზომა</translation>
    </message>
</context>
<context>
    <name>QgsCompositionWidget</name>
    <message>
        <source>Landscape</source>
        <translation>ლანდშაფტური</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>პორტრეტული</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>შედგენილი</translation>
    </message>
    <message>
        <source>A5 (148x210 mm)</source>
        <translation>A5 (148x210 მმ)</translation>
    </message>
    <message>
        <source>A4 (210x297 mm)</source>
        <translation>A4 (210x297 მმ)</translation>
    </message>
    <message>
        <source>A3 (297x420 mm)</source>
        <translation>A3 (297x420 მმ)</translation>
    </message>
    <message>
        <source>A2 (420x594 mm)</source>
        <translation>A2 (420x594 მმ)</translation>
    </message>
    <message>
        <source>A1 (594x841 mm)</source>
        <translation>A1 (594x841 მმ)</translation>
    </message>
    <message>
        <source>A0 (841x1189 mm)</source>
        <translation>A0 (841x1189 მმ)</translation>
    </message>
    <message>
        <source>B5 (176 x 250 mm)</source>
        <translation>B5 (176 x 250 მმ)</translation>
    </message>
    <message>
        <source>B4 (250 x 353 mm)</source>
        <translation>B4 (250 x 353 მმ)</translation>
    </message>
    <message>
        <source>B3 (353 x 500 mm)</source>
        <translation>B3 (353 x 500 მმ)</translation>
    </message>
    <message>
        <source>B2 (500 x 707 mm)</source>
        <translation>B2 (500 x 707 მმ)</translation>
    </message>
    <message>
        <source>B1 (707 x 1000 mm)</source>
        <translation>B1 (707 x 1000 მმ)</translation>
    </message>
    <message>
        <source>B0 (1000 x 1414 mm)</source>
        <translation>B0 (1000 x 1414 მმ)</translation>
    </message>
    <message>
        <source>Letter (8.5x11 inches)</source>
        <translation>წერილი (8.5x11 ინჩი)</translation>
    </message>
    <message>
        <source>Legal (8.5x14 inches)</source>
        <translation>სტანდარტული (8.5x14 ინჩი)</translation>
    </message>
</context>
<context>
    <name>QgsCompositionWidgetBase</name>
    <message>
        <source>Composition</source>
        <translation>კომპოზიცია</translation>
    </message>
    <message>
        <source>Paper</source>
        <translation>ფურცელი</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>ორიენტაცია</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>სიმაღლე</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>სიგანე</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>ერთეულები</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>ზომა</translation>
    </message>
    <message>
        <source>Print quality (dpi)</source>
        <translation>ბეჭდვის ხარისხი (dpi)</translation>
    </message>
</context>
<context>
    <name>QgsContinuousColorDialogBase</name>
    <message>
        <source>Continuous color</source>
        <translation>უწყვეტი ფერი</translation>
    </message>
    <message>
        <source>Maximum Value:</source>
        <translation>მაქსიმალური მნიშვნელობა:</translation>
    </message>
    <message>
        <source>Outline Width:</source>
        <translation>ჩარჩოს სიგანე:</translation>
    </message>
    <message>
        <source>Minimum Value:</source>
        <translation>მინიმალური მნიშვნელობა:</translation>
    </message>
    <message>
        <source>Classification Field:</source>
        <translation>კლასიფიკაციის ველი:</translation>
    </message>
    <message>
        <source>Draw polygon outline</source>
        <translation>პოლიგონის ჩარჩოს დახატვა</translation>
    </message>
</context>
<context>
    <name>QgsCoordinateTransform</name>
    <message>
        <source>The source spatial reference system (CRS) is not valid. </source>
        <translation>CRS -ის წყარო არ არის სწორი.</translation>
    </message>
    <message>
        <source>The coordinates can not be reprojected. The CRS is: </source>
        <translation>კოორდინატების თავიდან დაპროექტება შეუძლებელია. CRS არის:</translation>
    </message>
    <message>
        <source>The destination spatial reference system (CRS) is not valid. </source>
        <translation>CRS-ის ადგილმდებარეობა არ არის სწორი.</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>ვერ განხორციელდა</translation>
    </message>
    <message>
        <source>transform of</source>
        <translation>გარდაქმნა</translation>
    </message>
    <message>
        <source>with error: </source>
        <translation>შეცდომით:</translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation>ქვემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>ზემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>ზემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>ქვემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>&amp;Copyright Label</source>
        <translation>&amp;საავტორო უფლებების წარწერა</translation>
    </message>
    <message>
        <source>Creates a copyright label that is displayed on the map canvas.</source>
        <translation>ქმნის წარწერას, რომელიც ჩნდება რუკის გამოსახულებაზე.</translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation>&amp;დეკორაციები</translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPluginGuiBase</name>
    <message>
        <source>Copyright Label Plugin</source>
        <translation>საავტორო უფლების წარწერის ჩანართი</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>ფერი</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Enter your copyright label below. This plugin supports basic html markup tags for formatting the label. For example:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;lt;B&amp;gt; Bold text &amp;lt;/B&amp;gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:italic;&quot;&gt;&amp;lt;I&amp;gt; Italics &amp;lt;/I&amp;gt;&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-style:italic;&quot;&gt;&lt;span style=&quot; font-style:normal;&quot;&gt;(note: &amp;amp;copy; gives a copyright symbol)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;ქვემოთ შეიყვანეთ თქვენი საავტორო უფლების წარწერა. ამ ჩანართს გააჩნია ძირითადი html markup tags წარწერის ფორმატირებისთვის. მაგალითად:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;lt;B&amp;gt; Bold text &amp;lt;/B&amp;gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:italic;&quot;&gt;&amp;lt;I&amp;gt; Italics &amp;lt;/I&amp;gt;&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-style:italic;&quot;&gt;&lt;span style=&quot; font-style:normal;&quot;&gt;(note: &amp;amp;copy; gives a copyright symbol)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable Copyright Label</source>
        <translation>საავტორო უფლების წარწერის ჩართვა</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>ქვემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>ზემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>ქვემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>ზემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>ორიენტაცია</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>ჰორიზონტალური</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>ვერტიკალური</translation>
    </message>
    <message encoding="UTF-8">
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;© QGIS 2008&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialog</name>
    <message>
        <source>Delete Projection Definition?</source>
        <translation>წავშალო პროექციის განსაზღვრება?</translation>
    </message>
    <message>
        <source>Deleting a projection definition is not reversable. Do you want to delete it?</source>
        <translation>პროექციის განსაზღვრების წაშლა არ არის აღდგენადი. გსურთ მისი წაშლა?</translation>
    </message>
    <message>
        <source>Abort</source>
        <translation>შესახებ</translation>
    </message>
    <message>
        <source>New</source>
        <translation>ახალი</translation>
    </message>
    <message>
        <source>QGIS Custom Projection</source>
        <translation>QGIS შედგენილი პროექცია</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please give the projection a name before pressing save.</source>
        <translation>ამ proj4 პროექციის აღწერილობა არ არის სწორი. გთხოვთ დაარქვათ პროექციას სახელი შენახვის ღილაკზე დაწკაპუნებამდე.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please add the parameters before pressing save.</source>
        <translation>ამ proj4 პროექციის აღწერილობა არ არის სწორი. გთხოვთ დაამატოთ პარამეტრები შენახვის ღილაკზე დაწკაპუნებამდე.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please add a proj= clause before pressing save.</source>
        <translation>ამ proj4 პროექციის აღწერილობა არ არის სწორი. გთხოვთ დაამატოთ proj= ოპერატორი შენახვის ღილაკზე დაწკაპუნებამდე.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please correct before pressing save.</source>
        <translation>ამ proj4 პროექციის აღწერილობა არ არის სწორი. გთხოვთ შეასწოროთ შენახვის ღილაკზე დაწკაპუნებამდე.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid.</source>
        <translation>ამ proj4 პროექციის აღწერილობა არ არის სწორი.</translation>
    </message>
    <message>
        <source>Northing and Easthing must be in decimal form.</source>
        <translation>Northing და Easthing უნდა იყვნენ ათობით ფორმაში.</translation>
    </message>
    <message>
        <source>Internal Error (source projection invalid?)</source>
        <translation>შიდა შეცდომა (წყაროს პროექცია არასწორია?)</translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialogBase</name>
    <message>
        <source>Custom Coordinate Reference System Definition</source>
        <translation>Custom Coordinate Reference System Definition</translation>
    </message>
    <message>
        <source>Define</source>
        <translation>განსაზღვრა</translation>
    </message>
    <message>
        <source>You can define your own custom Coordinate Reference System (CRS) here. The definition must conform to the proj4 format for specifying a CRS.</source>
        <translation>თქვენ შეგიძლიათ განსაზღვროთ თქვენი საკუთარი Coordinate Reference System (CRS) აქ. განსაზღვრება უნდა იყოს შესაბამისი proj4 ფორმატთან CRS –ის ზუსთად განსაზღვრისათვის.</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Parameters</source>
        <translation>პარამეტრები</translation>
    </message>
    <message>
        <source>|&lt;</source>
        <translation>|&lt;</translation>
    </message>
    <message>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <source>1 of 1</source>
        <translation>1 დან 1</translation>
    </message>
    <message>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <source>&gt;|</source>
        <translation>&gt;|</translation>
    </message>
    <message>
        <source>*</source>
        <translation>*</translation>
    </message>
    <message>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <source>Test</source>
        <translation>ტესტი</translation>
    </message>
    <message>
        <source>Use the text boxes below to test the CRS definition you are creating. Enter a coordinate where both the lat/long and the transformed result are known (for example by reading off a map). Then press the calculate button to see if the CRS definition you are creating is accurate.</source>
        <translation>გამოიყენეთ ქვემოთ არსებული ტექსტური ყუთები იმ აღწერილობის შესამოწმებლად რომელსაც თქვენ ქმნით. შეიყვანეთ კოორდინატი სადაც ორივე lat/long და გარდაქმნილი შედეგი არის ცნობილი (მაგალითად გამოყვანილი რუკიდან). შემდეგ დააწკაპუნეთ გამოთვლის ღილაკს, იმის შესამოწმებლად არის თუ არა CRS აღწერილობა, რომელსაც თქვენ ქმნით სწორი.</translation>
    </message>
    <message>
        <source>Geographic / WGS84</source>
        <translation>გეოგრაფიული / WGS84</translation>
    </message>
    <message>
        <source>Destination CRS        </source>
        <translation>ადგილმდებარეობა CRS</translation>
    </message>
    <message>
        <source>North</source>
        <translation>ჩრდილოეთი</translation>
    </message>
    <message>
        <source>East</source>
        <translation>აღმოსავლეთი</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>გამოთვლა</translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelect</name>
    <message>
        <source>Wildcard</source>
        <translation>Wildcard (*.*)</translation>
    </message>
    <message>
        <source>RegExp</source>
        <translation>RegExp</translation>
    </message>
    <message>
        <source>All</source>
        <translation>ყველა</translation>
    </message>
    <message>
        <source>Schema</source>
        <translation>სქემა</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>ცხრილი</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>Geometry column</source>
        <translation>კონფიგურაციის სვეტი</translation>
    </message>
    <message>
        <source>Sql</source>
        <translation>Sql</translation>
    </message>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation>დარწმუნებული ხართ რომ გინდათ წაშალოთ</translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation>კავშირი და ყველა შესაბამისი მახასიათებლები?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>წაშლის დადასტურება</translation>
    </message>
    <message>
        <source>Select Table</source>
        <translation>ცხრილის ამორჩევა</translation>
    </message>
    <message>
        <source>You must select a table in order to add a Layer.</source>
        <translation>თქვენ უნდა მონიშნოთ ცხრილი შრის დასამატებლად.</translation>
    </message>
    <message>
        <source>Password for </source>
        <translation>პაროლი</translation>
    </message>
    <message>
        <source>Please enter your password:</source>
        <translation>გთხოვთ შეიყვანოთ თქვენი პაროლი:</translation>
    </message>
    <message>
        <source>Connection failed</source>
        <translation>კავშირი ვერ შედგა</translation>
    </message>
    <message>
        <source>Connection to %1 on %2 failed. Either the database is down or your settings are incorrect.%3Check your username and password and try again.%4The database said:%5%6</source>
        <translation>დაკავშირება %1-თან %2-ზე ვერ მოხერხდა. ან მონაცემთა ბაზა არის გამორთული ან თქვენი პარამეტრები არის არასწორი.%3შეამოწმეთ თქვენი მომხმარებლის სახელი და პაროლი და სცადეთ თავიდან.%4მონაცემთა ბაზის პასუხი:%5%6</translation>
    </message>
    <message>
        <source>Accessible tables could not be determined</source>
        <translation>ცხრილებთან წვდომის განსაზღვრა შეუძლებელია</translation>
    </message>
    <message>
        <source>Database connection was successful, but the accessible tables could not be determined.

The error message from the database was:
%1
</source>
        <translation>მონაცემთა ბაზასთან დაკავშირება იყო წარმატებული, მაგრამ წვდომადი ცხრილები ვერ განისაზღვრა.

მონაცემთა ბაზისგან შეცდომის შეტყობინება იყო:
%1
</translation>
    </message>
    <message>
        <source>No accessible tables found</source>
        <translation>წვდომადი ცხრილები ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>Database connection was successful, but no accessible tables were found.

Please verify that you have SELECT privilege on a table carrying PostGIS
geometry.</source>
        <translation>მონაცემთა ბაზასთან დაკავშირება იყო წარმატებული, მაგრამ წვდომადი ცხრილები ვერ მოიძებნა.

გთხოვთ გადაამოწმოთ რომ თქვენი SELECT არის პრივილიგებული PostGIS კონფიგურაციის ცხრილზე.
  </translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelectBase</name>
    <message>
        <source>Add PostGIS Table(s)</source>
        <translation>PostGIS ცხრილ(ებ)ის დამატება</translation>
    </message>
    <message>
        <source>PostgreSQL Connections</source>
        <translation>PostgreSQL კავშირები</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>წაშლა</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>რედაქტირება</translation>
    </message>
    <message>
        <source>New</source>
        <translation>ახალი</translation>
    </message>
    <message>
        <source>Connect</source>
        <translation>დაკავშირება</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>დახმარება</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>დამატება</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
    <message>
        <source>Search:</source>
        <translation>ძებნა:</translation>
    </message>
    <message>
        <source>Search mode:</source>
        <translation>ძებნის რეჟიმი:</translation>
    </message>
    <message>
        <source>Search in columns:</source>
        <translation>ძებნა სვეტებშ:</translation>
    </message>
    <message>
        <source>Search options...</source>
        <translation>ძებნის პატამეტრები...</translation>
    </message>
</context>
<context>
    <name>QgsDbTableModel</name>
    <message>
        <source>Schema</source>
        <translation>სქემა</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>ცხრილი</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>Geometry column</source>
        <translation>კონფიგურაციის სვეტი</translation>
    </message>
    <message>
        <source>Sql</source>
        <translation>Sql</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>წერტილი</translation>
    </message>
    <message>
        <source>Multipoint</source>
        <translation>მრავალწერილიანი</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>ხაზი</translation>
    </message>
    <message>
        <source>Multiline</source>
        <translation>მრავალხაზიანი</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>პოლიგონი</translation>
    </message>
    <message>
        <source>Multipolygon</source>
        <translation>მრავალპოლიგონიანი</translation>
    </message>
</context>
<context>
    <name>QgsDelAttrDialogBase</name>
    <message>
        <source>Delete Attributes</source>
        <translation>ატრიბუტების წაშლა</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPlugin</name>
    <message>
        <source>DelimitedTextLayer</source>
        <translation>დანაწევრებული ტექსური შრე</translation>
    </message>
    <message>
        <source>&amp;Add Delimited Text Layer</source>
        <translation>&amp;დანაწევრებული ტექსური შრის დამატება</translation>
    </message>
    <message>
        <source>Add a delimited text file as a map layer. </source>
        <translation>დანაწევრებული ტექსტური ფაილის დამატება რუკის შრედ.</translation>
    </message>
    <message>
        <source>The file must have a header row containing the field names. </source>
        <translation>ფაილს უნდა ჰქონდეს ჰედერის სტრიქონი სახელების ველის შემცველობით.</translation>
    </message>
    <message>
        <source>X and Y fields are required and must contain coordinates in decimal units.</source>
        <translation>X და Y ველები მოთხოვნილია და უნდა შეიცავდნენ კოორდინატებს ათობით მნიშვნელობებში.</translation>
    </message>
    <message>
        <source>&amp;Delimited text</source>
        <translation>&amp;დანაწევრებული ტექსტი</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGui</name>
    <message>
        <source>Parse</source>
        <translation>დამუშავება</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>აღწერილობა</translation>
    </message>
    <message>
        <source>Select a delimited text file containing a header row and one or more rows of x and y coordinates that you would like to use as a point layer and this plugin will do the job for you!</source>
        <translation>აირჩიეთ დანაწევრებული ტექსტური ფაილი რომელიც შეიცავს ჰედერის სტრიქონს და ერთ ან მეტ სტრიქონს x და y კოორდინატებით რომლებიც თქვენ გსურთ რომ გამოიყენოთ როგორც წერტილოვანი შრე და ეს ჩანართი გააკეთებს ამას!</translation>
    </message>
    <message>
        <source>Use the layer name box to specify the legend name for the new layer. Use the delimiter box to specify what delimeter is used in your file (e.g. space, comma, tab or a regular expression in Perl style). After choosing a delimiter, press the parse button and select the columns containing the x and y values for the layer.</source>
        <translation>გამოიყენეთ შრის სახელის ყუთი ახალი შრისთვის ლეგენდის სახელის მისათითებლად. გამოიყენეთ დანაწევრების ყუთი იმის მისათითებლად თუ რომელი გამყოფი სიმბოლო უნდა გამოიყენოს (ცარიელი ადგილი, მძიმე, დაფა თუ წესიერი გამოსახულება Perl სტილში). გამყოფი სიმბოლოს არჩევის შემდეგ, დააწკაპუნეთ დამუშავების ღილაკს და მონიშნეთ ის სვეტები, რომლებიც შეიცავენ  x და y მნიშვნელობებს შრისთვის.</translation>
    </message>
    <message>
        <source>No layer name</source>
        <translation>არა შრის სახელი</translation>
    </message>
    <message>
        <source>Please enter a layer name before adding the layer to the map</source>
        <translation>გთხოვთ შეიყვანეთ შრის სახელი მის რუკაზე დამატებამდე</translation>
    </message>
    <message>
        <source>No delimiter</source>
        <translation>გამყოფი არ არის</translation>
    </message>
    <message>
        <source>Please specify a delimiter prior to parsing the file</source>
        <translation>გთხოვთ ზუსტად განსაზღვროთ დანაწევრების პრიორიტეი ფაილის დამუშავებისას</translation>
    </message>
    <message>
        <source>Choose a delimited text file to open</source>
        <translation>აირჩიეთ დანაწევრებული ტექსტური ფაილი გასახსნელად</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGuiBase</name>
    <message>
        <source>Create a Layer from a Delimited Text File</source>
        <translation>შრის შექმნა დანაწევრებული ტექსტური ფაილიდან</translation>
    </message>
    <message>
        <source>Delimited Text Layer</source>
        <translation>დანაწევრებული ტექსტური შრე</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;X field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;X ველი&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Name of the field containing x values</source>
        <translation>x მნიშვნელობის შემცველი ველის სახელი</translation>
    </message>
    <message>
        <source>Name of the field containing x values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>x მნიშვნელობის შემცველი ველის სახელი. აირჩიეთ ველი სიიდან. სია გენერირებულია დანაწევრებული ტექსტური ფაილის სათაურის სტრიქონის დამუშავების შედეგად. </translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;Y field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Y ველი&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Name of the field containing y values</source>
        <translation>y მნიშვნელობის შემცველი ველის სახელი</translation>
    </message>
    <message>
        <source>Name of the field containing y values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>y მნიშვნელობის შემცველი ველის სახელი. აირჩიეთ ველი სიიდან. სია გენერირებულია დანაწევრებული ტექსტური ფაილის სათაურის სტრიქონის დამუშავების შედეგად. </translation>
    </message>
    <message>
        <source>Delimited text file</source>
        <translation>დანაწევრებული ტექსტური ფაილი</translation>
    </message>
    <message>
        <source>Full path to the delimited text file</source>
        <translation>მთლიანი გზა დანაწევრებულ ტექსტურ ფაილამდე</translation>
    </message>
    <message>
        <source>Full path to the delimited text file. In order to properly parse the fields in the file, the delimiter must be defined prior to entering the file name. Use the Browse button to the right of this field to choose the input file.</source>
        <translation>მთლიანი გზა დანაწევრებულ ტექსტურ ფაილამდე. ფაილში ველების სწორად დამუშავების მიზნით, გამყოფი უნდა იყოს განსაზღვრული ფაილის სახელის შეყვანის წინ. გამოიყენეთ დათვალიერების ღილაკი ამ ველის მარჯვნივ შემავალი ფაილის ასარჩევად.</translation>
    </message>
    <message>
        <source>Browse to find the delimited text file to be processed</source>
        <translation>დათვალიერება დანაწევრებული ტექსტური ფაილის ასარჩევად დამუშავებისთვის</translation>
    </message>
    <message>
        <source>Use this button to browse to the location of the delimited text file. This button will not be enabled until a delimiter has been entered in the &lt;i&gt;Delimiter&lt;/i&gt; box. Once a file is chosen, the X and Y field drop-down boxes will be populated with the fields from the delimited text file.</source>
        <translation>გამოიყენეთ ეს ღილაკი დანაწევრებული ტექსტური ფაილის დასათვალიერებლად. ეს ღილაკი არ იქნება აქტიური მანამ, სანამ გამყოფს არ შეიყვანთ &lt;i&gt;Delimiter&lt;/i&gt; ყუთში. როდესაც ფაილი იქნება არჩეული,  X და Y ველების ჩამოსაშლელი ყუთები შეივსება დანაწევრებული ტექსტური ფაილიდან.</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>დათვალიერება...</translation>
    </message>
    <message>
        <source>Layer name</source>
        <translation>შრის სახელი</translation>
    </message>
    <message>
        <source>Name to display in the map legend</source>
        <translation>რუკის ლეგენდაზე გამოსახატავი სახელი</translation>
    </message>
    <message>
        <source>Name displayed in the map legend</source>
        <translation>რუკის ლეგენდაზე გამოსახატავი სახელი</translation>
    </message>
    <message>
        <source>Sample text</source>
        <translation>მარტივი ტექსტი</translation>
    </message>
    <message>
        <source>Delimiter</source>
        <translation>გამყოფი</translation>
    </message>
    <message>
        <source>Delimiter to use when splitting fields in the text file. The delimiter can be more than one character.</source>
        <translation>გამყოფი რომელიც გამოიყენება ტექსტურ ფაილში ველების დასაყოფად. გამყოფი შეიძლება იყოს ერთი ან მეტი სიმბოლო.</translation>
    </message>
    <message>
        <source>Delimiter to use when splitting fields in the delimited text file. The delimiter can be 1 or more characters in length.</source>
        <translation>გამყოფი რომელიც გამოიყენება დანაწევრებულ ტექსტურ ფაილში ველების დასაყოფად. გამყოფი შეიძლება იყოს ერთი ან მეტი სიმბოლო სიგრძეში.</translation>
    </message>
    <message>
        <source>The delimiter is taken as is</source>
        <translation>გამყოფი აღებულია როგორც</translation>
    </message>
    <message>
        <source>Plain characters</source>
        <translation>მარტივი სიმბოლოები</translation>
    </message>
    <message>
        <source>The delimiter is a regular expression</source>
        <translation>გამყოფი არის სტანდარტული გამოსახულება</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>სტანდარტული გამოსახულება</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextProvider</name>
    <message>
        <source>Error</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>Note: the following lines were not loaded because Qgis was unable to determine values for the x and y coordinates:
</source>
        <translation>შენიშვნა: შემდეგი ხაზები არ ჩაითვირთა იმიტომ რომ Qgis –მა ვერ მოახერხა x და y კოორდინატებისთვის მნიშვნელობების განსაზღვრა:
</translation>
    </message>
</context>
<context>
    <name>QgsDetailedItemWidgetBase</name>
    <message>
        <source>Form</source>
        <translation>ფორმა</translation>
    </message>
    <message>
        <source>Heading Label</source>
        <translation>სათაურის წარწერა</translation>
    </message>
    <message>
        <source>Detail label</source>
        <translation>დეტალური წარწერა</translation>
    </message>
</context>
<context>
    <name>QgsDlgPgBufferBase</name>
    <message>
        <source>Buffer features</source>
        <translation>ობიექტების ბუფერირება</translation>
    </message>
    <message>
        <source>Parameters</source>
        <translation>პატამეტრები</translation>
    </message>
    <message>
        <source>Geometry column:</source>
        <translation>კონფიგურაციის სვეტი:</translation>
    </message>
    <message>
        <source>Add the buffered layer to the map?</source>
        <translation>დაემატოს ბუფერში არსებული შრე რუკას?</translation>
    </message>
    <message>
        <source>Spatial reference ID:</source>
        <translation>სივრცითი მიმთითებლის ID:</translation>
    </message>
    <message>
        <source>Schema:</source>
        <translation>სქემა:</translation>
    </message>
    <message>
        <source>Unique field to use as feature id:</source>
        <translation>უნიკალური ველის ობიექტის id-ის სახით გამოყენება:</translation>
    </message>
    <message>
        <source>Table name for the buffered layer:</source>
        <translation>ცხრილის სახელი ბუფერში არსებული შრისთვის:</translation>
    </message>
    <message>
        <source>Create unique object id</source>
        <translation>ობიექტის უნიკალური ნომრის შექმნა</translation>
    </message>
    <message>
        <source>public</source>
        <translation>საჯარო</translation>
    </message>
    <message>
        <source>Buffer distance in map units:</source>
        <translation>ბუფერის მანძილი რუკის ერთეულებში:</translation>
    </message>
    <message>
        <source>&lt;h2&gt;Buffer the features in layer: &lt;/h2&gt;</source>
        <translation>&lt;h2&gt;შრეში ობიექტების დაბუფერება: &lt;/h2&gt;</translation>
    </message>
</context>
<context>
    <name>QgsEncodingFileDialog</name>
    <message>
        <source>Encoding:</source>
        <translation>კოდირება:</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialog</name>
    <message>
        <source>New device %1</source>
        <translation>ახალი მოწყობილობა %1</translation>
    </message>
    <message>
        <source>Are you sure?</source>
        <translation>დარწმუნებული ხართ?</translation>
    </message>
    <message>
        <source>Are you sure that you want to delete this device?</source>
        <translation>დარწმუნებული ხართ რომ გსურთ მოწყობილობის წაშლა?</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialogBase</name>
    <message>
        <source>GPS Device Editor</source>
        <translation>GPS მოწყობილობის რედაქტორი</translation>
    </message>
    <message>
        <source>New device</source>
        <translation>ახალი მოწყობილობა</translation>
    </message>
    <message>
        <source>Delete device</source>
        <translation>მოწყობილობის წაშლა</translation>
    </message>
    <message>
        <source>Update device</source>
        <translation>მოწყობილობის განახლება</translation>
    </message>
    <message>
        <source>Device name</source>
        <translation>მოწყობილობის სახელი</translation>
    </message>
    <message>
        <source>This is the name of the device as it will appear in the lists</source>
        <translation>ეს არის მოწყობილობის ის სახელი, რომელიც გამოჩნდება სიაში</translation>
    </message>
    <message>
        <source>Commands</source>
        <translation>ბრძანებები</translation>
    </message>
    <message>
        <source>Track download:</source>
        <translation>კვალის ჩამოტვირთვა:</translation>
    </message>
    <message>
        <source>Route upload:</source>
        <translation>გზის ატვირთვა:</translation>
    </message>
    <message>
        <source>Waypoint download:</source>
        <translation>Waypoint ჩამოტვირთვა:</translation>
    </message>
    <message>
        <source>The command that is used to download routes from the device</source>
        <translation>ბრძანება რომელიც გამოიყენება მოწყობილობიდან გზების ჩამოსატვირთად</translation>
    </message>
    <message>
        <source>Route download:</source>
        <translation>გზის ჩამოტვირთვა:</translation>
    </message>
    <message>
        <source>The command that is used to upload waypoints to the device</source>
        <translation>ბრძანება რომელიც გამოიყენება მოწყობილობაში waypoint –ების ასატვირთად</translation>
    </message>
    <message>
        <source>Track upload:</source>
        <translation>კვალის ატვირთვა:</translation>
    </message>
    <message>
        <source>The command that is used to download tracks from the device</source>
        <translation>ბრძანება რომელიც გამოიყენება მოწყობილობიდან კვალების ჩამოსატვირთად</translation>
    </message>
    <message>
        <source>The command that is used to upload routes to the device</source>
        <translation>ბრძანება რომელიც გამოიყენება მოწყობილობაში გზების ასატვირთად</translation>
    </message>
    <message>
        <source>The command that is used to download waypoints from the device</source>
        <translation>ბრძანება რომელიც გამოიყენება მოწყობილობიდან waypoint–ების ჩამოსატვირთად</translation>
    </message>
    <message>
        <source>The command that is used to upload tracks to the device</source>
        <translation>ბრძანება რომელიც გამოიყენება მოწყობილობაში კვალების ასატვირთად</translation>
    </message>
    <message>
        <source>Waypoint upload:</source>
        <translation>Waypoint–ის (გზის წერტილის) ატვირთვა:</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;In the download and upload commands there can be special words that will be replaced by QGIS when the commands are used. These words are:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - the path to GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - the GPX filename when uploading or the port when downloading&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - the port when uploading or the GPX filename when downloading&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;ჩამოტვირთვის და ატვირთვის ბრძანებებში შესაძლოა იყოს სპეციალური სიტყვა რომელიც ჩანაცვლდება QGIS –ის მიერ როდესაც ეს ბრძანებები იქნება გამოყენებული. ეს სიტყვებია:&lt;span style=&quot; font-style:italic;&quot;&gt;%გაურკვევლობა&lt;/span&gt; - გზა GPSBabel–ისკებ&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - GPX ფაილის სახელი როდესაც ხდება ატვირთვა ან პორტი როდესაც ხდება ჩამოტვირთვა&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - პორტი ატვირთვისას ან GPX ფაილის სახელი ჩამოტვირთვისას&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;
</translation>
    </message>
</context>
<context>
    <name>QgsGPSPlugin</name>
    <message>
        <source>&amp;Gps Tools</source>
        <translation>&amp;Gps ხელსაწყოები</translation>
    </message>
    <message>
        <source>&amp;Create new GPX layer</source>
        <translation>&amp;ახალი GPX შრის შექმნა</translation>
    </message>
    <message>
        <source>Creates a new GPX layer and displays it on the map canvas</source>
        <translation>ქმნის ახალ GPX შრეს და გამოსახავს მას რუკის ნახატზე</translation>
    </message>
    <message>
        <source>&amp;Gps</source>
        <translation>&amp;Gps</translation>
    </message>
    <message>
        <source>Save new GPX file as...</source>
        <translation>ახალი GPX ფაილის შენახვა როგორც...</translation>
    </message>
    <message>
        <source>GPS eXchange file (*.gpx)</source>
        <translation>GPS eXchange ფილი (*.gpx)</translation>
    </message>
    <message>
        <source>Could not create file</source>
        <translation>შეუძლებელია ფაილის შექმნა</translation>
    </message>
    <message>
        <source>Unable to create a GPX file with the given name. </source>
        <translation>შეუძლებელია მოცემული სახელით GPX ფაილის შექმნა.</translation>
    </message>
    <message>
        <source>Try again with another name or in another </source>
        <translation>სცადეთ თავიდან სხვა სახელით ან სხვა</translation>
    </message>
    <message>
        <source>directory.</source>
        <translation>დირექტორიაში.</translation>
    </message>
    <message>
        <source>GPX Loader</source>
        <translation>GPX ჩამტვირთავი</translation>
    </message>
    <message>
        <source>Unable to read the selected file.
</source>
        <translation>შეუძლებელია მონიშნული ფაილის წაკითხვა.
</translation>
    </message>
    <message>
        <source>Please reselect a valid file.</source>
        <translation>გთხოვთ თავიდან მონიშნოთ სწორი ფაილი.</translation>
    </message>
    <message>
        <source>Could not start process</source>
        <translation>შეუძლებელია პროცესის დაწყება</translation>
    </message>
    <message>
        <source>Could not start GPSBabel!</source>
        <translation>შეუძლებელია GPSBabel-ის დაწყება!</translation>
    </message>
    <message>
        <source>Importing data...</source>
        <translation>მონაცემების იმპორტირება...</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>გაუქმება</translation>
    </message>
    <message>
        <source>Could not import data from %1!

</source>
        <translation>შეუძლებელია მონაცემების იმპორტი %1-დან!

</translation>
    </message>
    <message>
        <source>Error importing data</source>
        <translation>შეცდომაა მონაცემების </translation>
    </message>
    <message>
        <source>Could not convert data from %1!

</source>
        <translation>შეუძლებელია მონაცემების გადაყვანა %1-დან!
</translation>
    </message>
    <message>
        <source>Error converting data</source>
        <translation>შეცდომა მონაცემების გადაყვანისას</translation>
    </message>
    <message>
        <source>Not supported</source>
        <translation>არ არის მხარდაჭერილი</translation>
    </message>
    <message>
        <source>This device does not support downloading </source>
        <translation>მოწყობილობას არ გააჩნია ჩამოტვირთვის მხარდაჭერა</translation>
    </message>
    <message>
        <source>of </source>
        <translation>-ის</translation>
    </message>
    <message>
        <source>Downloading data...</source>
        <translation>მონაცემების ჩამოტვირთვა...</translation>
    </message>
    <message>
        <source>Could not download data from GPS!

</source>
        <translation>შეუძლებელია GPS-დან მონაცემების ჩამოტვირთვა!

</translation>
    </message>
    <message>
        <source>Error downloading data</source>
        <translation>შეცდომა მონაცემების ჩამოტვირთვისას</translation>
    </message>
    <message>
        <source>This device does not support uploading of </source>
        <translation>მოწყობილობას არ გააჩნია ატვირთვის მხარდაჭერა</translation>
    </message>
    <message>
        <source>Uploading data...</source>
        <translation>მონაცემების ატვირთვა...</translation>
    </message>
    <message>
        <source>Error while uploading data to GPS!

</source>
        <translation>შეცდომა წარმოიქმნა GPS-სთვის მონაცემების ატვირთვისას!

</translation>
    </message>
    <message>
        <source>Error uploading data</source>
        <translation>შეცდომა მონაცემების ატვირთვისას</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGui</name>
    <message>
        <source>Waypoints</source>
        <translation>გზის წერტილები (Waypoints)</translation>
    </message>
    <message>
        <source>Routes</source>
        <translation>გზები (Routes)</translation>
    </message>
    <message>
        <source>Tracks</source>
        <translation>კვალები (Tracks)</translation>
    </message>
    <message>
        <source>Choose a file name to save under</source>
        <translation>აირჩიეთ ფაილის სახელი შესანახად</translation>
    </message>
    <message>
        <source>GPS eXchange format (*.gpx)</source>
        <translation>GPS eXchange ფორმატი (*.gpx)</translation>
    </message>
    <message>
        <source>Select GPX file</source>
        <translation>აირჩიეთ GPX ფაილი</translation>
    </message>
    <message>
        <source>Select file and format to import</source>
        <translation>აირჩიეთ ფაილი და ფორმატი იმპორტირებისთვის</translation>
    </message>
    <message>
        <source>GPX is the %1, which is used to store information about waypoints, routes, and tracks.</source>
        <translation>GPX არის %1, რომელიც გამოიყენება waypoint-ების, გზების და კვალის შესახებ ინფორმაციის შესანახად.</translation>
    </message>
    <message>
        <source>GPS eXchange file format</source>
        <translation>GPS eXchange ფაილის ფორმატი</translation>
    </message>
    <message>
        <source>Select a GPX file and then select the feature types that you want to load.</source>
        <translation>აირჩიეთ GPX ფაილი და შემდეგ მონიშნეთ ობიექტების ტიპი, რომლებიც გსურთ ჩატვირთოთ.</translation>
    </message>
    <message>
        <source>This tool will help you download data from a GPS device.</source>
        <translation>ეს ხელსაწყო დაგეხმარებათ GPS მოწყობილობიდან მონაცემით ჩამოტვირთვაში.</translation>
    </message>
    <message>
        <source>Choose your GPS device, the port it is connected to, the feature type you want to download, a name for your new layer, and the GPX file where you want to store the data.</source>
        <translation>აირჩიეთ თქვენი GPS მოწყობილობა, პორტი დაკავშირებულია, ობიექტის ტიპი რომელიც გსურთ ჩამოტვირთოთ, სახელი ახალი შრისთვი და GPX ფაილი სადაც გინდათ რომ შეინახოთ მონაცემები.</translation>
    </message>
    <message>
        <source>If your device isn&apos;t listed, or if you want to change some settings, you can also edit the devices.</source>
        <translation>თუ თქვენი მოწყობილობა სიაში არაა, ან თუ გსურთ რომელიმე პარამეტრის შეცვლა, თქვენ აგრეთვე შეგიძლიათ მოწყობილობების რედაქტირება.</translation>
    </message>
    <message>
        <source>This tool uses the program GPSBabel (%1) to transfer the data.</source>
        <translation>ხელსაწყო იყენებს GPSBabel (%1) პროგრამას მონაცემების გადასაყვანად.</translation>
    </message>
    <message>
        <source>This requires that you have GPSBabel installed where QGIS can find it.</source>
        <translation>ეს მოითხოვს რომ GPSBabel  გქონდეს დაინსტალირებული იქ სადაც QGIS შეძლებს მის პოვნას.</translation>
    </message>
    <message>
        <source>This tool will help you upload data from a GPX layer to a GPS device.</source>
        <translation>ეს ხელსაწყო დაგეხმარებათ მონაცემების ასატვირთად GPX შრიდან GPS მოწყობილობაში.</translation>
    </message>
    <message>
        <source>Choose the layer you want to upload, the device you want to upload it to, and the port your device is connected to.</source>
        <translation>აირჩიეთ შრე რომელიც გინდათ რომ ატვირთოთ, მოწყობილობაც თუ გსურთ აგრეთვე მისი ატვირთვა, და პორტი რომელზეც მიერთებულია თქვენი მოწყობილობა.</translation>
    </message>
    <message>
        <source>QGIS can only load GPX files by itself, but many other formats can be converted to GPX using GPSBabel (%1).</source>
        <translation>QGIS -ს შეუძლია თავისმხრივ მხოლოდ GPX ფაილების ჩატვირთვა, მაგრამ ბევრი სხვა ფორმატი შეიძლება გადაყვანილ იქნას GPX-ად GPSBabel (%1)-ის გამოყენებით.</translation>
    </message>
    <message>
        <source>Select a GPS file format and the file that you want to import, the feature type that you want to use, a GPX file name that you want to save the converted file as, and a name for the new layer.</source>
        <translation>აირჩიეთ GPS ფაილის ფორმატი და ის ფაილი რომლის იმპორტირებაც გსურთ, ფუნქციის ტიპი რომელიც გინდათ რომ გამოიყენოთ, GPX ფაილის სახელი რომელშიც გსურთ რომ შეინახოთ გადაყვანილი ფაილი, და სახელი ახალი შრისთვის.</translation>
    </message>
    <message>
        <source>All file formats can not store waypoints, routes, and tracks, so some feature types may be disabled for some file formats.</source>
        <translation>ფაილის ყველა ფორმატს არ შეუძლია waypoint–ების, გზების და კვალების შენახვა, ასე რომ ზოგიერთი ობიექტის ტიპი შეიძლება გათიშული იყოს რომელიმე ფაილის ფორმატში.</translation>
    </message>
    <message>
        <source>QGIS can perform conversions of GPX files, by using GPSBabel (%1) to perform the conversions.</source>
        <translation>QGIS–მა შეუძლია შეასრულოს გადაყვანა GPX ფაილების, GPSBabel (%1) –ის გამოყენებით.</translation>
    </message>
    <message>
        <source>Select a GPX input file name, the type of conversion you want to perform, a GPX file name that you want to save the converted file as, and a name for the new layer created from the result.</source>
        <translation>აირჩიეთ GPX შემავალი ფაილის სახელი, გადაყვანის ტიპი რომელიც გინდათ რომ შეასრულოთ, GPX ფაილის სახელი რომელშიც გსურთ გადაყვანილი ფაილის შენახვა, და შრის სახელი რომელიც შეიქმნება მიღებული შედეგებიდან.</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGuiBase</name>
    <message>
        <source>GPS Tools</source>
        <translation>GPS ხელსაწყოები</translation>
    </message>
    <message>
        <source>Load GPX file</source>
        <translation>GPX ფაილის ჩატვირთვა</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>File:</source>
        <translation>ფაილი:</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>დათვალიერება...</translation>
    </message>
    <message>
        <source>Feature types:</source>
        <translation>ობიექტის ტიპები:</translation>
    </message>
    <message>
        <source>Waypoints</source>
        <translation>გზის წერტილები (Waypoints)</translation>
    </message>
    <message>
        <source>Routes</source>
        <translation>კვალები</translation>
    </message>
    <message>
        <source>Tracks</source>
        <translation>კვალები</translation>
    </message>
    <message>
        <source>Import other file</source>
        <translation>სხვა ფაილის იმპორტი</translation>
    </message>
    <message>
        <source>Layer name:</source>
        <translation>შრის სახელი:</translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation>შენახვა როგორც...</translation>
    </message>
    <message>
        <source>GPX output file:</source>
        <translation>GPX გამომავალი ფაილი:</translation>
    </message>
    <message>
        <source>Feature type:</source>
        <translation>ობიექტის ტიპი:</translation>
    </message>
    <message>
        <source>(Note: Selecting correct file type in browser dialog important!)</source>
        <translation>(შენიშვნა: დათვალიერების დიალოგში სწორი ფაილის ტიპის არჩევა მნიშვნელოვანია!)</translation>
    </message>
    <message>
        <source>File to import:</source>
        <translation>ფაილი იმპორტისთვის:</translation>
    </message>
    <message>
        <source>Download from GPS</source>
        <translation>GPS -დან ჩამოტვირთვა</translation>
    </message>
    <message>
        <source>GPS device:</source>
        <translation>GPS მოწყობილობა:</translation>
    </message>
    <message>
        <source>Edit devices...</source>
        <translation>მოწყობილობების რედაქტირება...</translation>
    </message>
    <message>
        <source>Port:</source>
        <translation>პორტი:</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>განახლება</translation>
    </message>
    <message>
        <source>Output file:</source>
        <translation>გამომავალი ფაილი:</translation>
    </message>
    <message>
        <source>Upload to GPS</source>
        <translation>GPS მოწყობილობაში ატვირთვა</translation>
    </message>
    <message>
        <source>Edit devices</source>
        <translation>მოწყობილობების რედაქტირება</translation>
    </message>
    <message>
        <source>Data layer:</source>
        <translation>მონაცემთა შრე:</translation>
    </message>
    <message>
        <source>GPX Conversions</source>
        <translation>GPX გარდაქმნები</translation>
    </message>
    <message>
        <source>Conversion:</source>
        <translation>გარდაქმნა:</translation>
    </message>
    <message>
        <source>GPX input file:</source>
        <translation>GPX შემავალი ფაილი:</translation>
    </message>
</context>
<context>
    <name>QgsGPXProvider</name>
    <message>
        <source>Bad URI - you need to specify the feature type.</source>
        <translation>არაწორი URI - საჭიროა მიუთითოთ ობიექტის ტიპი.</translation>
    </message>
    <message>
        <source>GPS eXchange file</source>
        <translation>GPS eXchange ფაილი</translation>
    </message>
    <message>
        <source>Digitized in QGIS</source>
        <translation>აციფრულია QGIS-ში</translation>
    </message>
</context>
<context>
    <name>QgsGenericProjectionSelector</name>
    <message>
        <source>Define this layer&apos;s projection:</source>
        <translation>განსაზღვრეთ ამ შრის პროექცია:</translation>
    </message>
    <message>
        <source>This layer appears to have no projection specification.</source>
        <translation>ჩანს რომ ამ შრეს არ გააჩნია პროექციის ტექნიკური პირობები.</translation>
    </message>
    <message>
        <source>By default, this layer will now have its projection set to that of the project, but you may override this by selecting a different projection below.</source>
        <translation>საწყისად, ამ შრეს არ ექნება დაყენებული პროექცია ამ პროექტისათვის, მაგრამ ქვემოთ თქვენ შეგიძლიათ აირჩიოთ განსხვავებული პროექცია.</translation>
    </message>
</context>
<context>
    <name>QgsGenericProjectionSelectorBase</name>
    <message>
        <source>Projection Selector</source>
        <translation>პროექციის ასარჩევი</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialog</name>
    <message>
        <source>Real</source>
        <translation>ნამდვილი</translation>
    </message>
    <message>
        <source>Integer</source>
        <translation>მთელი</translation>
    </message>
    <message>
        <source>String</source>
        <translation>ტექსტური</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialogBase</name>
    <message>
        <source>New Vector Layer</source>
        <translation>ახალი ვექტორული შრე</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>ფაილის ფორმატი</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>წერტილი</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>ხაზი</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>პოლიგონი</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>ატრიბუტები</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Delete selected attribute</source>
        <translation>არჩეული ატრიბუტის წაშლა</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Add attribute</source>
        <translation>ატრიბუტის დამატება</translation>
    </message>
</context>
<context>
    <name>QgsGeorefDescriptionDialogBase</name>
    <message>
        <source>Description georeferencer</source>
        <translation>აღწერითი გეომიმთითებელი (georeferencer)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;&gt;This plugin can generate world files for rasters. You select points on the raster and give their world coordinates, and the plugin will compute the world file parameters. The more coordinates you can provide the better the result will be.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;&gt;ამ ჩანართს შეუძლია რასტრებისთვის world ფაილების გენერაცია. თქვენ ნიშნავთ წერტილებს რასტრზე და მისცემთ მათ მსოფლიო კოორდინატებს, და ჩანართი გამოითვლის world ფაილის პარამეტრებს. მეტი კოორდინატის მიწოდებისას მიიღებთ უკეთეს შედეგს.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPlugin</name>
    <message>
        <source>&amp;Georeferencer</source>
        <translation>&amp;გეომიმთითებელი (Georeferencer)</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGui</name>
    <message>
        <source>Choose a raster file</source>
        <translation>აირჩიეთ რასტრული ფაილი</translation>
    </message>
    <message>
        <source>Raster files (*.*)</source>
        <translation>რასტრული ფაილი (*.*)</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>The selected file is not a valid raster file.</source>
        <translation>არჩეული ფაილი არ არის სწორი რასტრული ფაილი.</translation>
    </message>
    <message>
        <source>World file exists</source>
        <translation>World ფაილი არსებობს</translation>
    </message>
    <message>
        <source>&lt;p&gt;The selected file already seems to have a </source>
        <translation>&lt;p&gt;არჩეულ ფაილს ჩანს რომ უკვე აქვს</translation>
    </message>
    <message>
        <source>world file! Do you want to replace it with the </source>
        <translation>world ფაილი! გსურთ მისი ჩანაცვლება</translation>
    </message>
    <message>
        <source>new world file?&lt;/p&gt;</source>
        <translation>ახალი world ფაილით?&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGuiBase</name>
    <message>
        <source>Georeferencer</source>
        <translation>Georeferencer</translation>
    </message>
    <message>
        <source>Raster file:</source>
        <translation>რასტრული ფაილი:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Description...</source>
        <translation>აღწერა...</translation>
    </message>
    <message>
        <source>Arrange plugin windows</source>
        <translation>ჩანართის ფანჯრების ორგანიზება</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialogBase</name>
    <message>
        <source>Warp options</source>
        <translation>მოტრიალების თვისებები</translation>
    </message>
    <message>
        <source>Compression:</source>
        <translation>შეკუმშვა:</translation>
    </message>
    <message>
        <source>Resampling method:</source>
        <translation>ხელახლა გადარჩევის მეთოდი:</translation>
    </message>
    <message>
        <source>Nearest neighbour</source>
        <translation>უახლოესი მეზობელი</translation>
    </message>
    <message>
        <source>Linear</source>
        <translation>წრფივი</translation>
    </message>
    <message>
        <source>Cubic</source>
        <translation>კუბიკი</translation>
    </message>
    <message>
        <source>Use 0 for transparency when needed</source>
        <translation>0-ის გამოყენება გამჭვირვალობისთვის როდესაც საჭიროა</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>თანხმობა</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialog</name>
    <message>
        <source>Equal Interval</source>
        <translation>ტოლი ინტერვალი</translation>
    </message>
    <message>
        <source>Quantiles</source>
        <translation> Quantiles </translation>
    </message>
    <message>
        <source>Empty</source>
        <translation>სიცარიელე</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialogBase</name>
    <message>
        <source>graduated Symbol</source>
        <translation>დიფერენციალური სიმბოლო</translation>
    </message>
    <message>
        <source>Classification field</source>
        <translation>კლასიფიკაციის ველი</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>რეჟიმი</translation>
    </message>
    <message>
        <source>Number of classes</source>
        <translation>კლასების რაოდენობა</translation>
    </message>
    <message>
        <source>Classify</source>
        <translation>კლასიფიკაცია</translation>
    </message>
    <message>
        <source>Delete class</source>
        <translation>კლასის წაშლა</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributes</name>
    <message>
        <source>Column</source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>მნიშვნელობა</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>შრე</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>ERROR</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>თანხმობა</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributesBase</name>
    <message>
        <source>GRASS Attributes</source>
        <translation>GRASS ატრიბუტები</translation>
    </message>
    <message>
        <source>Tab 1</source>
        <translation>ცხრილი 1</translation>
    </message>
    <message>
        <source>result</source>
        <translation>შედეგი</translation>
    </message>
    <message>
        <source>Update database record</source>
        <translation>მონაცემთა ბაზის ჩანაწერის განახლება</translation>
    </message>
    <message>
        <source>Update</source>
        <translation>განახლება</translation>
    </message>
    <message>
        <source>Add new category using settings in GRASS Edit toolbox</source>
        <translation>პარამეტრების გამოყენებით ახალი კატეგორიის დამატება GRASS რედაქტირების ხელსაწყოთა ყუთში</translation>
    </message>
    <message>
        <source>New</source>
        <translation>ახალი</translation>
    </message>
    <message>
        <source>Delete selected category</source>
        <translation>არჩეული კატეგორიის წაშლა</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>წაშლა</translation>
    </message>
</context>
<context>
    <name>QgsGrassBrowser</name>
    <message>
        <source>Tools</source>
        <translation>ხელსაწყოები</translation>
    </message>
    <message>
        <source>Add selected map to canvas</source>
        <translation>არჩეული რუკის დამატება ნახატზე</translation>
    </message>
    <message>
        <source>Copy selected map</source>
        <translation>არჩეული რუკის დაკოპირება</translation>
    </message>
    <message>
        <source>Rename selected map</source>
        <translation>არჩეულ რუკაზე სახელის გადარქმევა</translation>
    </message>
    <message>
        <source>Delete selected map</source>
        <translation>არჩეული რუკის წაშლა</translation>
    </message>
    <message>
        <source>Set current region to selected map</source>
        <translation>მიმდინარე რეგიონის დაყენება არჩეულ რუკაზე</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>განახლება</translation>
    </message>
    <message>
        <source>New name</source>
        <translation>ახალი სახელი</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot copy map </source>
        <translation>შეუძლებელია რუკის დაკოპირება</translation>
    </message>
    <message>
        <source>&lt;br&gt;command: </source>
        <translation>&lt;br&gt;ბრძანება: </translation>
    </message>
    <message>
        <source>Cannot rename map </source>
        <translation>შეუძლებელია რუკის სახელის გადარქმევა</translation>
    </message>
    <message>
        <source>Delete map &lt;b&gt;</source>
        <translation>რუკის წაშლა &lt;b&gt;</translation>
    </message>
    <message>
        <source>Cannot delete map </source>
        <translation>შეუძლებელია რუკის წაშლა</translation>
    </message>
    <message>
        <source>Cannot write new region</source>
        <translation>შეუძლებელია ახალი რეგიონის ჩაწერა</translation>
    </message>
</context>
<context>
    <name>QgsGrassEdit</name>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>You are not owner of the mapset, cannot open the vector for editing.</source>
        <translation>თქვენ არ ხართ რუკების ნაკრების მფლობელი, შეუძლებელია ვექტორის გახსნა რედაქტირებისთვის.</translation>
    </message>
    <message>
        <source>Cannot open vector for update.</source>
        <translation>შეუძლებელია ვექტორის გახსნა გასაახლებლად.</translation>
    </message>
    <message>
        <source>Edit tools</source>
        <translation>რედაქტირების ხელსაწყოები</translation>
    </message>
    <message>
        <source>New point</source>
        <translation>ახალი წერტილი</translation>
    </message>
    <message>
        <source>New line</source>
        <translation>ახალი ხაზი</translation>
    </message>
    <message>
        <source>New boundary</source>
        <translation>ახალი საზღვარი</translation>
    </message>
    <message>
        <source>New centroid</source>
        <translation>ახალი ცენტროიდი</translation>
    </message>
    <message>
        <source>Move vertex</source>
        <translation>ახალი წვერო</translation>
    </message>
    <message>
        <source>Add vertex</source>
        <translation>წვეროს დამატება</translation>
    </message>
    <message>
        <source>Delete vertex</source>
        <translation>წვეროს წაშლა</translation>
    </message>
    <message>
        <source>Move element</source>
        <translation>ელემენტის გადატანა</translation>
    </message>
    <message>
        <source>Split line</source>
        <translation>ხაზის დაყოფა</translation>
    </message>
    <message>
        <source>Delete element</source>
        <translation>ელემენტის წაშლა</translation>
    </message>
    <message>
        <source>Edit attributes</source>
        <translation>ატრიბუტების რედაქტირება</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>ფონი</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>ნათელი მონაკვეთი</translation>
    </message>
    <message>
        <source>Dynamic</source>
        <translation>დინამიური</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>წერტილი</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>ხაზი</translation>
    </message>
    <message>
        <source>Boundary (no area)</source>
        <translation>საზღვარი (ზედაპირი არ არის)</translation>
    </message>
    <message>
        <source>Boundary (1 area)</source>
        <translation>საზღვარი (1 ზედაპირი)</translation>
    </message>
    <message>
        <source>Boundary (2 areas)</source>
        <translation>საზღვარი (2 ზედაპირი)</translation>
    </message>
    <message>
        <source>Centroid (in area)</source>
        <translation>ცენტროიდი (ზედაპირში)</translation>
    </message>
    <message>
        <source>Centroid (outside area)</source>
        <translation>ცენტროიდი (ზედაპირის გარეთ)</translation>
    </message>
    <message>
        <source>Centroid (duplicate in area)</source>
        <translation>ცენტროიდი (დუბლირებული ზედაპირში)</translation>
    </message>
    <message>
        <source>Node (1 line)</source>
        <translation>კვანძი (1 ხაზი)</translation>
    </message>
    <message>
        <source>Node (2 lines)</source>
        <translation>კვანძი (2 ხაზი)</translation>
    </message>
    <message>
        <source>Next not used</source>
        <translation>შემდეგი არ არის გამოყენებული</translation>
    </message>
    <message>
        <source>Manual entry</source>
        <translation>ხელით შესაყვანი</translation>
    </message>
    <message>
        <source>No category</source>
        <translation>კატეგორია არ არის</translation>
    </message>
    <message>
        <source>Info</source>
        <translation>ინფორმაცია</translation>
    </message>
    <message>
        <source>The table was created</source>
        <translation>ცხრილი ვერ შეიქმნა</translation>
    </message>
    <message>
        <source>Tool not yet implemented.</source>
        <translation>ხელსაწყო არ არის ჯერ რეალიზებული.</translation>
    </message>
    <message>
        <source>Cannot check orphan record: </source>
        <translation>შეუძლებელია &quot;დაკიდული&quot; ჩანაწერის შემოწმება:</translation>
    </message>
    <message>
        <source>Orphan record was left in attribute table. &lt;br&gt;Delete the record?</source>
        <translation>&quot;დაკიდული&quot; ჩანაწერი დარჩა ატრიბუტების ცხრილში. &lt;br&gt; წავშალო ჩანაწერი?</translation>
    </message>
    <message>
        <source>Cannot delete orphan record: </source>
        <translation>შეუძლებელია &quot;დაკიდული&quot; ჩანაწერის წაშლა:</translation>
    </message>
    <message>
        <source>Cannot describe table for field </source>
        <translation>შეუძლებელია ცხრილის ან ველის აღწერა</translation>
    </message>
    <message>
        <source>Left: </source>
        <translation>მარცხნივ:</translation>
    </message>
    <message>
        <source>Middle: </source>
        <translation>შუაში:</translation>
    </message>
    <message>
        <source>Right: </source>
        <translation>მარჯვნივ:</translation>
    </message>
</context>
<context>
    <name>QgsGrassEditBase</name>
    <message>
        <source>GRASS Edit</source>
        <translation>GRASS-ის რედაქტირება</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>კატეგორია</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>რეჟიმი</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>შრე</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>პარამეტრები</translation>
    </message>
    <message>
        <source>Snapping in screen pixels</source>
        <translation>გადაადგილება ეკრანის პიქსელებში</translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation>სიმბოლიკა</translation>
    </message>
    <message>
        <source>Line width</source>
        <translation>ხაზის სიგანე</translation>
    </message>
    <message>
        <source>Marker size</source>
        <translation>სანიშნეს ზომა</translation>
    </message>
    <message>
        <source>Disp</source>
        <translation>გამოსახ</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>ფერი</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>ინდექსი</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>ცხრილი</translation>
    </message>
    <message>
        <source>Column</source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source>Length</source>
        <translation>სიგრძე</translation>
    </message>
    <message>
        <source>Add Column</source>
        <translation>სვეტის დამატება</translation>
    </message>
    <message>
        <source>Create / Alter Table</source>
        <translation>ცხრილის შექმნა / შეცვლა </translation>
    </message>
</context>
<context>
    <name>QgsGrassElementDialog</name>
    <message>
        <source>Cancel</source>
        <translation>გაუქმება</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>თანხმობა</translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;Enter a name!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;შეიყვანეთ სახელი!&lt;/font&gt;</translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;This is name of the source!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;ეს არის წყაროს სახელი!&lt;/font&gt;</translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;Exists!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;არსებობს!&lt;/font&gt;</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>თავზე გადაწერა</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalc</name>
    <message>
        <source>Mapcalc tools</source>
        <translation>Mapcalc ხელსაწყოები</translation>
    </message>
    <message>
        <source>Add map</source>
        <translation>რუკის დამატება</translation>
    </message>
    <message>
        <source>Add constant value</source>
        <translation>მუდმივი მნიშვნელობის დამატება</translation>
    </message>
    <message>
        <source>Add operator or function</source>
        <translation>ოპერატორის ან ფუნქციის დამატება</translation>
    </message>
    <message>
        <source>Add connection</source>
        <translation>კავშირის დამატება</translation>
    </message>
    <message>
        <source>Select item</source>
        <translation>ობიექტის არჩევა</translation>
    </message>
    <message>
        <source>Delete selected item</source>
        <translation>არჩეული ობიექტის წაშლა</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>გახსნა</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>შენახვა</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>შენახვა როგორც</translation>
    </message>
    <message>
        <source>Addition</source>
        <translation>დამატება</translation>
    </message>
    <message>
        <source>Subtraction</source>
        <translation>გამოკლება</translation>
    </message>
    <message>
        <source>Multiplication</source>
        <translation>გამრავლება</translation>
    </message>
    <message>
        <source>Division</source>
        <translation>გაყოფა</translation>
    </message>
    <message>
        <source>Modulus</source>
        <translation>მოდული</translation>
    </message>
    <message>
        <source>Exponentiation</source>
        <translation>ექსპონენტა</translation>
    </message>
    <message>
        <source>Equal</source>
        <translation>ტოლია</translation>
    </message>
    <message>
        <source>Not equal</source>
        <translation>არ არის ტოლი</translation>
    </message>
    <message>
        <source>Greater than</source>
        <translation>მეტია</translation>
    </message>
    <message>
        <source>Greater than or equal</source>
        <translation>მეტია ან ტოლია</translation>
    </message>
    <message>
        <source>Less than</source>
        <translation>ნაკლებია</translation>
    </message>
    <message>
        <source>Less than or equal</source>
        <translation>ნაკლები ან ტოლია</translation>
    </message>
    <message>
        <source>And</source>
        <translation>და</translation>
    </message>
    <message>
        <source>Or</source>
        <translation>ან</translation>
    </message>
    <message>
        <source>Absolute value of x</source>
        <translation>x -ის აბსოლიტური მნიშვნელობა</translation>
    </message>
    <message>
        <source>Inverse tangent of x (result is in degrees)</source>
        <translation>x –ის შებრუნებული ტანგენსი (შედეგი გრადუსებში)</translation>
    </message>
    <message>
        <source>Inverse tangent of y/x (result is in degrees)</source>
        <translation>y/x –ის შებრუნებული ტანგენსი (შედეგი გრადუსებში)</translation>
    </message>
    <message>
        <source>Current column of moving window (starts with 1)</source>
        <translation>მოძრავი ფანჯრის მიმდინარე სვეტი (იწყება 1–ით)</translation>
    </message>
    <message>
        <source>Cosine of x (x is in degrees)</source>
        <translation>x -ის კოსინუსი (x არის კუთხე)</translation>
    </message>
    <message>
        <source>Convert x to double-precision floating point</source>
        <translation>გადაყავს x ორმაგი სიზუსტის მოძრავ წერილში</translation>
    </message>
    <message>
        <source>Current east-west resolution</source>
        <translation>მიმდინარე აღმოსავლეთ–დასავლეთ რეზოლუცია</translation>
    </message>
    <message>
        <source>Exponential function of x</source>
        <translation>x -ის ექსპონენტალური ფუნქცია </translation>
    </message>
    <message>
        <source>x to the power y</source>
        <translation>x  y ხარისხში</translation>
    </message>
    <message>
        <source>Convert x to single-precision floating point</source>
        <translation>გადაყავს x ერთმაგი სიზუსტის მოძრავ წერტილში</translation>
    </message>
    <message>
        <source>Decision: 1 if x not zero, 0 otherwise</source>
        <translation>გადაწყვეტა: 1 თუ x არ უდრის 0, წინააღმდეგ შემთხვევაში 0</translation>
    </message>
    <message>
        <source>Decision: a if x not zero, 0 otherwise</source>
        <translation>გადაწყვეტა: a თუ x არ უდრის 0, წინააღმდეგ შემთხვევაში 0</translation>
    </message>
    <message>
        <source>Decision: a if x not zero, b otherwise</source>
        <translation>გადაწყვეტა: a თუ x არ უდრის 0, წინააღმდეგ შემთხვევაში b</translation>
    </message>
    <message>
        <source>Decision: a if x &gt; 0, b if x is zero, c if x &lt; 0</source>
        <translation>გადაწყვეტა: a თუ x&gt;0, b თუ x არის ნული, c თუ  x&lt;0</translation>
    </message>
    <message>
        <source>Convert x to integer [ truncates ]</source>
        <translation>გადაყავს x მთელში [დროზე ადრე ამთავრებს გამოთვლებს]</translation>
    </message>
    <message>
        <source>Check if x = NULL</source>
        <translation>შემოწმება x = NULL</translation>
    </message>
    <message>
        <source>Natural log of x</source>
        <translation>x -ის ნატურალური ლოგარითმი</translation>
    </message>
    <message>
        <source>Log of x base b</source>
        <translation>x-ის ლოგარითმი b-ს ფუძით</translation>
    </message>
    <message>
        <source>Largest value</source>
        <translation>უდიდესი მნიშვნელობა</translation>
    </message>
    <message>
        <source>Median value</source>
        <translation>საშუალო მნიშვნელობა</translation>
    </message>
    <message>
        <source>Smallest value</source>
        <translation>უმცირესი მნიშვნელობა</translation>
    </message>
    <message>
        <source>Mode value</source>
        <translation>მოდას მნიშვნელობა</translation>
    </message>
    <message>
        <source>1 if x is zero, 0 otherwise</source>
        <translation>1 თუ x უდრის 0, წინააღმდეგ შემთხვევაში 0</translation>
    </message>
    <message>
        <source>Current north-south resolution</source>
        <translation>მომდინარე ჩრდილო-სამხრეთ რეზოლუცია</translation>
    </message>
    <message>
        <source>NULL value</source>
        <translation>NULL მნიშვნელობა</translation>
    </message>
    <message>
        <source>Random value between a and b</source>
        <translation>a და b-ს შორის შემთხვევითი მნიშვნელობა</translation>
    </message>
    <message>
        <source>Round x to nearest integer</source>
        <translation>x-ის დამრგვალება უახლოეს მთელამდე</translation>
    </message>
    <message>
        <source>Current row of moving window (Starts with 1)</source>
        <translation>მოძრავი ფანჯრის მიმდინარე სტრიქონი (იწყება 1–ით)</translation>
    </message>
    <message>
        <source>Sine of x (x is in degrees)</source>
        <comment>sin(x)</comment>
        <translation>x –ის სინუსი (x არის გრადუსებში)</translation>
    </message>
    <message>
        <source>Square root of x</source>
        <comment>sqrt(x)</comment>
        <translation>x-ის ფესვი</translation>
    </message>
    <message>
        <source>Tangent of x (x is in degrees)</source>
        <comment>tan(x)</comment>
        <translation>x–ის ტანგენსი (x არის გრადუსებში)</translation>
    </message>
    <message>
        <source>Current x-coordinate of moving window</source>
        <translation>გადასატანი ფანჯრის მიმდინარე x-კოორდინატი</translation>
    </message>
    <message>
        <source>Current y-coordinate of moving window</source>
        <translation>გადასატანი ფანჯრის მიმდინარე y-კოორდინატი</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>გამომავალი</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot get current region</source>
        <translation>შეუძლებელია მიმდინარე რეგიონის მიღება</translation>
    </message>
    <message>
        <source>Cannot check region of map </source>
        <translation>შეუძლებელია რუკის რეგიონის შემოწმება</translation>
    </message>
    <message>
        <source>Cannot get region of map </source>
        <translation>შეუძლებელია რუკის რეგიონის მიღება</translation>
    </message>
    <message>
        <source>No GRASS raster maps currently in QGIS</source>
        <translation>GRASS რასტრული რუკები არ არის ამჟამად QGIS–ში</translation>
    </message>
    <message>
        <source>Cannot create &apos;mapcalc&apos; directory in current mapset.</source>
        <translation>შეუძლებელია მიმდინარე mapset–ში &apos;mapcalc&apos; დირექტორიის შექმნა.</translation>
    </message>
    <message>
        <source>New mapcalc</source>
        <translation>ახალი mapcalc</translation>
    </message>
    <message>
        <source>Enter new mapcalc name:</source>
        <translation>შეიყვანეთ ახალი mapcalc–ის სახელი:</translation>
    </message>
    <message>
        <source>Enter vector name</source>
        <translation>შეიყვანეთ ვექტორის სახელი</translation>
    </message>
    <message>
        <source>The file already exists. Overwrite? </source>
        <translation>ფაილი უკვე არსებობს. გადავაწერო თავზე?</translation>
    </message>
    <message>
        <source>Save mapcalc</source>
        <translation>mapcalc–ის შენახვა</translation>
    </message>
    <message>
        <source>File name empty</source>
        <translation>ფაილის სახელი ცარიელია</translation>
    </message>
    <message>
        <source>Cannot open mapcalc file</source>
        <translation>შეუძლებელია mapcalc ფაილის გახსნა</translation>
    </message>
    <message>
        <source>The mapcalc schema (</source>
        <translation>mapcalc სქემა (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) ვერ მოიძებნა.</translation>
    </message>
    <message>
        <source>Cannot open mapcalc schema (</source>
        <translation>შეუძლებელია mapcalc სქემის გახსნა (</translation>
    </message>
    <message>
        <source>Cannot read mapcalc schema (</source>
        <translation>შეუძლებელია mapcalc სქემის წაკითხვა (</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>
ხაზზე</translation>
    </message>
    <message>
        <source> column </source>
        <translation>სვეტი</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalcBase</name>
    <message>
        <source>MainWindow</source>
        <translation>ძირითადი ფანჯარა</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>გამოსასვლელი</translation>
    </message>
</context>
<context>
    <name>QgsGrassModule</name>
    <message>
        <source>Module</source>
        <translation>მოდული</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>The module file (</source>
        <translation>მოდულის ფაილი (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) ვერ მოიძებნა.</translation>
    </message>
    <message>
        <source>Cannot open module file (</source>
        <translation>შეუძლებელია მოდულის ფაილის გახსნა (</translation>
    </message>
    <message>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <source>Cannot read module file (</source>
        <translation>შეუძლებელია მოდულის ფაილის წაკითხვა (</translation>
    </message>
    <message>
        <source>):
</source>
        <translation>): 
</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>
ხაზზე</translation>
    </message>
    <message>
        <source>Module </source>
        <translation>მოდული</translation>
    </message>
    <message>
        <source> not found</source>
        <translation>ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>Cannot find man page </source>
        <translation>შეუძლებელია მომუშავე გვერდის მოძებნა</translation>
    </message>
    <message>
        <source>Please ensure you have the GRASS documentation installed.</source>
        <translation>გთხოვთ დარწმუნდეთ რომ თქვენ გაქვთ დაინსტალირებული GRASS დოკუმენტაცია.</translation>
    </message>
    <message>
        <source>Not available, description not found (</source>
        <translation>მიუწვდომელია, აღწერილობა ვერ მოიძებნა (</translation>
    </message>
    <message>
        <source>Not available, cannot open description (</source>
        <translation>მიუწვდომელია, აღწერილობის გახსნა შეუძლებელია  (</translation>
    </message>
    <message>
        <source> column </source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source>Not available, incorrect description (</source>
        <translation>მიუწვდომელია, არასწორი აღწერილობა (</translation>
    </message>
    <message>
        <source>Run</source>
        <translation>გაშვება</translation>
    </message>
    <message>
        <source>Cannot get input region</source>
        <translation>შეუძლებელია შემავალი რეგიონის აღება</translation>
    </message>
    <message>
        <source>Use Input Region</source>
        <translation>გამოიყენე შემავალი რეგიონი</translation>
    </message>
    <message>
        <source>Cannot find module </source>
        <translation>შეუძლებელია მოდულის მოძებნა</translation>
    </message>
    <message>
        <source>Cannot start module: </source>
        <translation>შეუძლებელია მოდულის დაწყება:</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>გაჩერება</translation>
    </message>
    <message>
        <source>&lt;B&gt;Successfully finished&lt;/B&gt;</source>
        <translation>&lt;B&gt;წარმატებით დასრულდა&lt;/B&gt;</translation>
    </message>
    <message>
        <source>&lt;B&gt;Finished with error&lt;/B&gt;</source>
        <translation>&lt;B&gt;დასრულდა შეცდომებით&lt;/B&gt;</translation>
    </message>
    <message>
        <source>&lt;B&gt;Module crashed or killed&lt;/B&gt;</source>
        <translation>&lt;B&gt;მოდული დაიშალა ან განადგურდა&lt;/B&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleBase</name>
    <message>
        <source>GRASS Module</source>
        <translation>GRASS მოდული</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>თვისებები</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>გამოსასვლელი</translation>
    </message>
    <message>
        <source>Manual</source>
        <translation>სახელმძღვანელო</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>ტექსტური წარწერა</translation>
    </message>
    <message>
        <source>Run</source>
        <translation>გაშვება</translation>
    </message>
    <message>
        <source>View output</source>
        <translation>გამოსასვლელის ხედი</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleField</name>
    <message>
        <source>Attribute field</source>
        <translation>ატრიბუტის ველი</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleFile</name>
    <message>
        <source>File</source>
        <translation>ფაილი</translation>
    </message>
    <message>
        <source>:&amp;nbsp;missing value</source>
        <translation>:&amp;nbsp;არ არსებული მნიშვნელობა</translation>
    </message>
    <message>
        <source>:&amp;nbsp;directory does not exist</source>
        <translation>:&amp;nbsp;დირექტორია არ არსებობს</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleGdalInput</name>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot find layeroption </source>
        <translation>შეუძლებელია შრის ვარიანტის მოძებნა</translation>
    </message>
    <message>
        <source>Cannot find whereoption </source>
        <translation>შეუძლებელი whereoption–ის მოძებნა</translation>
    </message>
    <message>
        <source>PostGIS driver in OGR does not support schemas!&lt;br&gt;Only the table name will be used.&lt;br&gt;It can result in wrong input if more tables of the same name&lt;br&gt;are present in the database.</source>
        <translation>PostGIS წამყვანი OGR–ში არ შეესაბამება სქემას!&lt;br&gt;გამოიყენება მხოლოდ ცხრილის სახელი.&lt;br&gt;თუ მონაცემთა ბაზაში იქნება მეტი ცხრილი იგივე სახელით, შესაძლოა განხორციელდეს &lt;br&gt;არასწორი შეტანა.</translation>
    </message>
    <message>
        <source>:&amp;nbsp;no input</source>
        <translation>:&amp;nbsp;არ არის შესასვლელი</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleInput</name>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot find typeoption </source>
        <translation>შეუძლებელია typeoption –ის მოძებნა</translation>
    </message>
    <message>
        <source>Cannot find values for typeoption </source>
        <translation>შეუძლებელია typeoption–სთვის მნიშვნელობების მოძებნა</translation>
    </message>
    <message>
        <source>Cannot find layeroption </source>
        <translation>შეუძლებელია layeroption–ის მოძებნა</translation>
    </message>
    <message>
        <source>GRASS element </source>
        <translation>GRASS–ის ელემენტი</translation>
    </message>
    <message>
        <source> not supported</source>
        <translation>არ არის მხარდაჭერილი</translation>
    </message>
    <message>
        <source>Use region of this map</source>
        <translation>გამოიყენეთ ამ რუკის რეგიონი</translation>
    </message>
    <message>
        <source>:&amp;nbsp;no input</source>
        <translation>:&amp;nbsp;არ არის შემავალი</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleOption</name>
    <message>
        <source>:&amp;nbsp;missing value</source>
        <translation>:&amp;nbsp;გამოტოვებული მნიშვნელობა</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleSelection</name>
    <message>
        <source>Attribute field</source>
        <translation>ატრიბუტის ველი</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleStandardOptions</name>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot find module </source>
        <translation>მოდული ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>Cannot start module </source>
        <translation>შეუძლებელია მოდულის დაწყება</translation>
    </message>
    <message>
        <source>Cannot read module description (</source>
        <translation>შეუძლებელია მოდულის აღწერილობის წაკითხვა (</translation>
    </message>
    <message>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>ხაზზე</translation>
    </message>
    <message>
        <source> column </source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source>Cannot find key </source>
        <translation>შეუძლებელია გასაღების მოძებნა</translation>
    </message>
    <message>
        <source>Item with id </source>
        <translation>ობიექტი იდენტიფიკატორით</translation>
    </message>
    <message>
        <source> not found</source>
        <translation>ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>Cannot get current region</source>
        <translation>შეუძლებელია მიმდინარე რეგიონის მიღება</translation>
    </message>
    <message>
        <source>Cannot check region of map </source>
        <translation>შეუძლებელია რუკის რეგიონის შემოწმება</translation>
    </message>
    <message>
        <source>Cannot set region of map </source>
        <translation>შეუძლებელია რუკის რეგიონის დაყენება</translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapset</name>
    <message>
        <source>Database</source>
        <translation>მონაცემთა ბაზა</translation>
    </message>
    <message>
        <source>Location 1</source>
        <translation>ადგილმდებარეობა 1</translation>
    </message>
    <message>
        <source>System mapset</source>
        <translation>სისტემური რუკების ნაკრები</translation>
    </message>
    <message>
        <source>User&apos;s mapset</source>
        <translation>მომხმარებლის რუკების ნაკრები</translation>
    </message>
    <message>
        <source>Location 2</source>
        <translation>ადგილმდებარეობა 2</translation>
    </message>
    <message>
        <source>Enter path to GRASS database</source>
        <translation>შეიყვანე GRASS მონაცემთა ბაზის გზა</translation>
    </message>
    <message>
        <source>The directory doesn&apos;t exist!</source>
        <translation>დირექტორია არ არსებობს!</translation>
    </message>
    <message>
        <source>No writable locations, the database not writable!</source>
        <translation>არა ჩაწერის უფლების მქონე ადგილმდებარეობები, მონაცემთა ბაზა არ არის ჩაწერის უფლების მქონე!</translation>
    </message>
    <message>
        <source>Enter location name!</source>
        <translation>შეიყვანეთ ადგილმდებარეობის სახელი!</translation>
    </message>
    <message>
        <source>The location exists!</source>
        <translation>ადგილმდებარეობა არსებობს!</translation>
    </message>
    <message>
        <source>Selected projection is not supported by GRASS!</source>
        <translation>არჩეული პროექცია არ არის მხარდაჭერილი GRASS -ის მიერ!</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot create projection.</source>
        <translation>შეუძლებელია პროექციის შექმნა.</translation>
    </message>
    <message>
        <source>Cannot reproject previously set region, default region set.</source>
        <translation>შეუძლებელია წინათ დაყენებული რეგიონის ხელახლა დაპროექტირება, დაყენებულია საწყისი რეგიონი.</translation>
    </message>
    <message>
        <source>North must be greater than south</source>
        <translation>ჩრდილოეთი უნდა იყოს უფრო მეტი ვიდრე სამხრეთი</translation>
    </message>
    <message>
        <source>East must be greater than west</source>
        <translation>აღმოსავლეთი უნდა იყოს მეტი ვიდრე დასავლეთი</translation>
    </message>
    <message>
        <source>Regions file (</source>
        <translation>რეგიონების ფაილი (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) ვერ მოიძებნა.</translation>
    </message>
    <message>
        <source>Cannot open locations file (</source>
        <translation>შეუძლებელია ადგილმდებარეობების ფაილის გახსნა (</translation>
    </message>
    <message>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <source>Cannot read locations file (</source>
        <translation>შეუძლებელია ადგილმდებარეობების ფაილის წაკითხვა (</translation>
    </message>
    <message>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>ხაზზე</translation>
    </message>
    <message>
        <source> column </source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source>Cannot create QgsCoordinateReferenceSystem</source>
        <translation>შეუძლებელია QgsCoordinateReferenceSystem -ის შექმნა</translation>
    </message>
    <message>
        <source>Cannot reproject selected region.</source>
        <translation>შეუძლებელია არჩეული რეგიონის ხელახლა დაპროექტება.</translation>
    </message>
    <message>
        <source>Cannot reproject region</source>
        <translation>შეუძლებელია რეგიონის ხელახლა დაპროექტება</translation>
    </message>
    <message>
        <source>Enter mapset name.</source>
        <translation>შეიყვანეთ რუკის ნაკრების სახელი.</translation>
    </message>
    <message>
        <source>The mapset already exists</source>
        <translation>რუკის ნაკრები უკვე არსებობს</translation>
    </message>
    <message>
        <source>Database: </source>
        <translation>მონაცემთა ბაზა:</translation>
    </message>
    <message>
        <source>Location: </source>
        <translation>ადგილმდებარეობა:</translation>
    </message>
    <message>
        <source>Mapset: </source>
        <translation>რუკის ნაკრები:</translation>
    </message>
    <message>
        <source>Create location</source>
        <translation>ადგილმდებარეობის შექმნა</translation>
    </message>
    <message>
        <source>Cannot create new location: </source>
        <translation>შეუძლებელია ახალი ადგილმდებარეობის შქმნა:</translation>
    </message>
    <message>
        <source>Create mapset</source>
        <translation>რუკის ნაკრების შექმნა</translation>
    </message>
    <message>
        <source>Cannot create new mapset directory</source>
        <translation>შეუძლებელია ახალი რუკის ნაკრების დირექტორიის შექმნა</translation>
    </message>
    <message>
        <source>Cannot open DEFAULT_WIND</source>
        <translation>შეუძლებელია DEFAULT_WIND -ის გახსნა</translation>
    </message>
    <message>
        <source>Cannot open WIND</source>
        <translation>შეუძლებელია WIND -ის გახსნა</translation>
    </message>
    <message>
        <source>New mapset</source>
        <translation>ახალი რუკის ნაკრები</translation>
    </message>
    <message>
        <source>New mapset successfully created, but cannot be opened: </source>
        <translation>ახალი რუკის ნაკრები წარმატებით შეიქმნა, მაგრამ შეუძლებელია მისი გახსნა:</translation>
    </message>
    <message>
        <source>New mapset successfully created and set as current working mapset.</source>
        <translation>ახალი რუკის ნაკრები წარმატებით შეიქმნა და დაყენდა როგორც მიმდინარე სამუშაო რუკის ნაკრები.</translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapsetBase</name>
    <message>
        <source>New Mapset</source>
        <translation>ახალი რუკის ნაკრები</translation>
    </message>
    <message>
        <source>GRASS Database</source>
        <translation>GRASS მონაცემთა ბაზა</translation>
    </message>
    <message>
        <source>Tree</source>
        <translation>ხე</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>კომენტარი</translation>
    </message>
    <message>
        <source>Example directory tree:</source>
        <translation>დირექტორიის სამაგალითო ხე:</translation>
    </message>
    <message>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;GRASS data are stored in tree directory structure. The GRASS database is the top-level directory in this tree structure.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;p, li { white-space: pre-wrap; }&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;GRASS მონაცემები შენახულია დირექტორიის ხის სტრუქტურაში. RASS მონაცემთა ბაზა არის ზედა დონის დირექტორია ამ ხის სტრუქტურაში.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Database Error</source>
        <translation>მონაცემთა ბაზის შეცდომა</translation>
    </message>
    <message>
        <source>Database:</source>
        <translation>მონაცემთა ბაზა:</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>დათვალიერება...</translation>
    </message>
    <message>
        <source>Select existing directory or create a new one:</source>
        <translation>აირჩიეთ არსებული დირექტორია ან შექმენით ახალი:</translation>
    </message>
    <message>
        <source>GRASS Location</source>
        <translation>GRASS ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Location</source>
        <translation>ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Select location</source>
        <translation>ადგილმდებარეობის არჩევა</translation>
    </message>
    <message>
        <source>Create new location</source>
        <translation>ახალი ადგილმდებარეობის შექმნა</translation>
    </message>
    <message>
        <source>Location Error</source>
        <translation>ადგილმდებარეობის შეცდომა</translation>
    </message>
    <message>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The GRASS location is a collection of maps for a particular territory or project.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;p, li { white-space: pre-wrap; }&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;GRASS ადგილმდებარეობა არის რუკების კოლექცია  კონკრეტული ტერიტორიისთვის ან  პროექტისთვის.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Projection</source>
        <translation>პროექცია</translation>
    </message>
    <message>
        <source>Projection Error</source>
        <translation>პროექციის შეცდომა</translation>
    </message>
    <message>
        <source>Coordinate system</source>
        <translation>საკოორდინატო სისტემა</translation>
    </message>
    <message>
        <source>Not defined</source>
        <translation>არ არის განსაზღვრული</translation>
    </message>
    <message>
        <source>Default GRASS Region</source>
        <translation>GRASS საწყისი რეგიონი</translation>
    </message>
    <message>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The GRASS region defines a workspace for raster modules. The default region is valid for one location. It is possible to set a different region in each mapset. It is possible to change the default location region later.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;GRASS რეგიონი განსაზღვრავს სამუშაო სივრცეს რასტრის მოდულისთვის. საწყისი რეგიონი არის სწორი ერთი ადგილმდებარეობისთვის. შესაძლებელია თითოეული mapset–სთვის განსხვავებული რეგიონის დაყენება. შესაძლებელია საწყისი ადგილმდებარეობის რეგიონის მოგვიანებით შეცვლა.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Set current QGIS extent</source>
        <translation>მიმდინარე QGIS განშლის დაყენება</translation>
    </message>
    <message>
        <source>Set</source>
        <translation>დაყენება</translation>
    </message>
    <message>
        <source>Region Error</source>
        <translation>რეგიონის შეცდომა</translation>
    </message>
    <message>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <source>W</source>
        <translation>W</translation>
    </message>
    <message>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <source>Mapset</source>
        <translation>რუკის ნაკრები</translation>
    </message>
    <message>
        <source>New mapset:</source>
        <translation>ახალი რუკის ნაკრები:</translation>
    </message>
    <message>
        <source>Mapset Error</source>
        <translation>რუკის ნაკრების შეცდომა</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;center&quot;&gt;Existing masets&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;center&quot;&gt;არსებული რუკების ნაკრები&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>მფლობელი</translation>
    </message>
    <message>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The GRASS mapset is a collection of maps used by one user. A user can read maps from all mapsets in the location but he can open for writing only his mapset (owned by user).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;GRASS mapset არის რუკების კოლექცია გამოყენებული ერთი მომხმარებლის მიერ. მომხმარებელს შეუძლია წაიკითხოს რუკები ყველა mapset–დამ მიკრორაიონში მაგრამ ჩასაწერად შესაძლოა გაიხსნას მხოლოდ მის mapset–ში (რომელის მფლობელია მომხმარებელი).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Create New Mapset</source>
        <translation>ახალი რუკების ნაკრების შექმნა</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>ადგილმდებარეობა:</translation>
    </message>
    <message>
        <source>Mapset:</source>
        <translation>რუკის ნაკრები:</translation>
    </message>
</context>
<context>
    <name>QgsGrassPlugin</name>
    <message>
        <source>GrassVector</source>
        <translation>GrassVector-ი</translation>
    </message>
    <message>
        <source>0.1</source>
        <translation>0.1</translation>
    </message>
    <message>
        <source>GRASS layer</source>
        <translation>GRASS შრე</translation>
    </message>
    <message>
        <source>Open mapset</source>
        <translation>რუკის ნაკრების გახსნა</translation>
    </message>
    <message>
        <source>New mapset</source>
        <translation>ახალი რუკის ნაკრები</translation>
    </message>
    <message>
        <source>Close mapset</source>
        <translation>რუკის ნაკრების დახურვა</translation>
    </message>
    <message>
        <source>Add GRASS vector layer</source>
        <translation>GRASS ვექტორული შრის დამატება</translation>
    </message>
    <message>
        <source>Add GRASS raster layer</source>
        <translation>GRASS რასტრული შრის დამატება</translation>
    </message>
    <message>
        <source>Open GRASS tools</source>
        <translation>GRASS ინსტრუმენტების ყუთის გახსნა</translation>
    </message>
    <message>
        <source>Display Current Grass Region</source>
        <translation>აჩვენებს მიმდინარე Grass რეგიონს</translation>
    </message>
    <message>
        <source>Edit Current Grass Region</source>
        <translation>მიმდინარე Grass რეგიონის რედაქტირება</translation>
    </message>
    <message>
        <source>Edit Grass Vector layer</source>
        <translation>Grass ვექტორული შრის რედაქტირება</translation>
    </message>
    <message>
        <source>Create new Grass Vector</source>
        <translation>ახალი Grass ვექტორის შექმნა</translation>
    </message>
    <message>
        <source>Adds a GRASS vector layer to the map canvas</source>
        <translation>ამატებს GRASS ვექტორულ შრეს რუკის ნახატს</translation>
    </message>
    <message>
        <source>Adds a GRASS raster layer to the map canvas</source>
        <translation>ამატებს GRASS რასტრულ შრეს რუკის ნახატს</translation>
    </message>
    <message>
        <source>Displays the current GRASS region as a rectangle on the map canvas</source>
        <translation>აჩვენებს მიმდინარე Grass რეგიონს როგორც სამკუთხედს რუკის ნახატზე</translation>
    </message>
    <message>
        <source>Edit the current GRASS region</source>
        <translation>GRASS მიმდინარე რეგიონის რედაქტირება</translation>
    </message>
    <message>
        <source>Edit the currently selected GRASS vector layer.</source>
        <translation>ამჟამად არჩეული GRASS ვექტორული შრის რედაქტირება.</translation>
    </message>
    <message>
        <source>&amp;GRASS</source>
        <translation>&amp;GRASS</translation>
    </message>
    <message>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>GRASS Edit is already running.</source>
        <translation>GRASS-ის რედაქტირება უკვე გაშვებულია.</translation>
    </message>
    <message>
        <source>New vector name</source>
        <translation>ახალი ვექტორის სახელი</translation>
    </message>
    <message>
        <source>Cannot create new vector: </source>
        <translation>შეუძლებელია ახალი ვექტორის შექმნა:</translation>
    </message>
    <message>
        <source>New vector created but cannot be opened by data provider.</source>
        <translation>ახალი ვექტორი შეიქმნა მაგრამ ვერ მოხერხდა მისი გახსნა მონაცემთა მწარმოებლის მიერ.</translation>
    </message>
    <message>
        <source>Cannot start editing.</source>
        <translation>შეუძლებელია ედიტირების  დაწყება.</translation>
    </message>
    <message>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation>GISDBASE, LOCATION_NAME ან MAPSET არ არის დაყენებული, შეუძლებელია მიმდინარე რეგიონის ჩვენება.</translation>
    </message>
    <message>
        <source>Cannot read current region: </source>
        <translation>შეუძლებელია მიმდინარე რეგიონის წაკითხვა:</translation>
    </message>
    <message>
        <source>Cannot open the mapset. </source>
        <translation>შეუძლებელია რუკის ნაკრების გახსნა.</translation>
    </message>
    <message>
        <source>Cannot close mapset. </source>
        <translation>შეუძლებელია რუკის ნაკრების დახურვა.</translation>
    </message>
    <message>
        <source>Cannot close current mapset. </source>
        <translation>შეუძლებელია მიმდინარე რუკის ნაკრების დახურვა.</translation>
    </message>
    <message>
        <source>Cannot open GRASS mapset. </source>
        <translation>შეუძლებელი GRASS mapset–ის გახსნა.</translation>
    </message>
</context>
<context>
    <name>QgsGrassRegion</name>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation>GISDBASE, LOCATION_NAME ან MAPSET არ არის დაყენებული, შეუძლებელია მიმდინარე რეგიონის ჩვენება.</translation>
    </message>
    <message>
        <source>Cannot read current region: </source>
        <translation>შეუძლებელია მიმდინარე რეგიონის წაკითხვა:</translation>
    </message>
    <message>
        <source>Cannot write region</source>
        <translation>შეუძლებელია რეგიონის ჩაწერა</translation>
    </message>
</context>
<context>
    <name>QgsGrassRegionBase</name>
    <message>
        <source>GRASS Region Settings</source>
        <translation>GRASS რეგიონის პარამეტრები</translation>
    </message>
    <message>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <source>W</source>
        <translation>W</translation>
    </message>
    <message>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <source>N-S Res</source>
        <translation>N-S Res</translation>
    </message>
    <message>
        <source>Rows</source>
        <translation>სტრიქონები</translation>
    </message>
    <message>
        <source>Cols</source>
        <translation>სვეტები</translation>
    </message>
    <message>
        <source>E-W Res</source>
        <translation>E-W Res</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>ფერი</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>სიგანე</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>გაუქმება</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelect</name>
    <message>
        <source>Select GRASS Vector Layer</source>
        <translation>GRASS ვექტორული შრის არჩევა</translation>
    </message>
    <message>
        <source>Select GRASS Raster Layer</source>
        <translation>GRASS რასტრული შრის არჩევა</translation>
    </message>
    <message>
        <source>Select GRASS mapcalc schema</source>
        <translation>GRASS რუკის მთვლელის სქემის არჩევა</translation>
    </message>
    <message>
        <source>Select GRASS Mapset</source>
        <translation>GRASS რუკის ნაკრების არჩევა</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot open vector on level 2 (topology not available).</source>
        <translation>შეუძლებელია 2 დონეზე ვექტორის გახსნა (ტოპოლოგია მიუწვდომელია).</translation>
    </message>
    <message>
        <source>Choose existing GISDBASE</source>
        <translation>აირჩიეთ არსებული GISDBASE</translation>
    </message>
    <message>
        <source>Wrong GISDBASE, no locations available.</source>
        <translation>მცდარი GISDBASE, ადგილმდებარეობა მიუწვდომელია.</translation>
    </message>
    <message>
        <source>Wrong GISDBASE</source>
        <translation>მცდარი GISDBASE</translation>
    </message>
    <message>
        <source>Select a map.</source>
        <translation>რუკის არჩევა.</translation>
    </message>
    <message>
        <source>No map</source>
        <translation>რუკა არ არის</translation>
    </message>
    <message>
        <source>No layer</source>
        <translation>შრე არ არის</translation>
    </message>
    <message>
        <source>No layers available in this map</source>
        <translation>ამ რუკაზე შრეები მიუწვდომელია</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelectBase</name>
    <message>
        <source>Add GRASS Layer</source>
        <translation>GRASS შრის დამატება</translation>
    </message>
    <message>
        <source>Gisdbase</source>
        <translation>Gisdbase-ი</translation>
    </message>
    <message>
        <source>Location</source>
        <translation>ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Mapset</source>
        <translation>რუკის ნაკრები</translation>
    </message>
    <message>
        <source>Select or type map name (wildcards &apos;*&apos; and &apos;?&apos; accepted for rasters)</source>
        <translation>აირჩიეთ ან აკრიფეთ რუკის სახელი (სპეციალური სიმბოლოები  &apos;*&apos; და &apos;?&apos; რასტრულებისთვის დაშვებულია)</translation>
    </message>
    <message>
        <source>Map name</source>
        <translation>რუკის სახელი</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>შრე</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>დათვალიერება</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>გაუქმება</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>QgsGrassShellBase</name>
    <message>
        <source>GRASS Shell</source>
        <translation>GRASS გარსი</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
</context>
<context>
    <name>QgsGrassTools</name>
    <message>
        <source>GRASS Tools</source>
        <translation>GRASS ხელსაწყოები</translation>
    </message>
    <message>
        <source>GRASS Tools: </source>
        <translation>GRASS ხელსაწყოები:</translation>
    </message>
    <message>
        <source>Browser</source>
        <translation>ინტერნეტ პროგრამა</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>Cannot find MSYS (</source>
        <translation type="obsolete">შეუძლებელია MSYS მოძებნა (</translation>
    </message>
    <message>
        <source>GRASS Shell is not compiled.</source>
        <translation>GRASS ფანჯარა არ დაკომპილირდა.</translation>
    </message>
    <message>
        <source>The config file (</source>
        <translation>კონფიგურაციის ფაილი (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) ვერ მოიძებნა.</translation>
    </message>
    <message>
        <source>Cannot open config file (</source>
        <translation>შეუძლებელია კონფიგურაციის ფაილის გახსნა (</translation>
    </message>
    <message>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <source>Cannot read config file (</source>
        <translation>შეუძლებელია კონფიგურაციის ფაილის წაკითხვა (</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>
ხაზზე</translation>
    </message>
    <message>
        <source> column </source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source>Cannot start command shell (%1)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassToolsBase</name>
    <message>
        <source>Grass Tools</source>
        <translation>Grass ინსტრუმენტები</translation>
    </message>
    <message>
        <source>Modules Tree</source>
        <translation>მოდულების ხე</translation>
    </message>
    <message>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <source>Modules List</source>
        <translation>მოდულების სია</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPlugin</name>
    <message>
        <source>&amp;Graticule Creator</source>
        <translation>&amp;საკოორდინატო ბადის შემქმნელი</translation>
    </message>
    <message>
        <source>Creates a graticule (grid) and stores the result as a shapefile</source>
        <translation>ქმნის საკოორდინატო ბადეს (ბადეს) და ინახავს შედეგებს როგორც shapefile</translation>
    </message>
    <message>
        <source>&amp;Graticules</source>
        <translation>&amp;საკოორდინატო ბადე</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGui</name>
    <message>
        <source>QGIS - Grid Maker</source>
        <translation>QGIS - ბადის შემქმნელი</translation>
    </message>
    <message>
        <source>Please enter the file name before pressing OK!</source>
        <translation>გთხოვთ შეიყვანოთ ფაილის სახელი დამუშავებამდე OK!</translation>
    </message>
    <message>
        <source>Please enter intervals before pressing OK!</source>
        <translation>გთხოვთ შეიყვანოთ ინტერვალები დამუშავებამდე OK!</translation>
    </message>
    <message>
        <source>Choose a file name to save under</source>
        <translation>აირჩიეთ ფაილის სახელი მის შესანახად</translation>
    </message>
    <message>
        <source>ESRI Shapefile (*.shp)</source>
        <translation>ESRI Shapefile (*.shp)</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGuiBase</name>
    <message>
        <source>QGIS Graticule Creator</source>
        <translation>QGIS საკოორდინატო ბადის შემქმნელი</translation>
    </message>
    <message>
        <source>Graticle size</source>
        <translation>საკოორდინატო ბადის ზომა</translation>
    </message>
    <message>
        <source>Y Interval:</source>
        <translation>Y ინტერვალი:</translation>
    </message>
    <message>
        <source>X Interval:</source>
        <translation>X ინტერვალი:</translation>
    </message>
    <message>
        <source>End point (upper right)</source>
        <translation>დასასრული წერტილი (ზედა მარკვენა)</translation>
    </message>
    <message>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <source>Origin (lower left)</source>
        <translation>საწყისი (ქვედა მარცხენა)</translation>
    </message>
    <message>
        <source>Output (shape) file</source>
        <translation>გასასვლელი (shape) ფაილი</translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation>შენახვა როგორც...</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>წერტილი</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>პოლიგონი</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;; font-size:11pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;This plugin will help you to build a graticule shapefile that you can use as an overlay within your qgis map viewer.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;;&quot;&gt;Please enter all units in decimal degrees&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;; font-size:11pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;ეს ჩანართი დაგეხმარებათ საკოორდინატო ბადის shapefile–ის შექმნაში ისე რომ თქვენ შეგიძლიათ გამოიყენოთ როგორც  გადაფარვა თქვენს qgis რუკის დამთვალიერებელში.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;;&quot;&gt;გთხოვთ შეიყვანოთ ყველა ერთეული ათობით გრადუსში&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Graticule Builder</source>
        <translation>საკოორდინატო ბადის ამგები</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewer</name>
    <message>
        <source>This help file does not exist for your language</source>
        <translation>ეს დამხმარე ფაილი თქვენ ენაზე არ არსებობს</translation>
    </message>
    <message>
        <source>If you would like to create it, contact the QGIS development team</source>
        <translation>თუ გსურთ მისი შექმნა, დაუკავშირდით QGIS განვითარების ჯგუფს</translation>
    </message>
    <message>
        <source>Quantum GIS Help</source>
        <translation>Quantum GIS დახმარება</translation>
    </message>
    <message>
        <source>Quantum GIS Help - </source>
        <translation>Quantum GIS დახმარება –</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>Failed to get the help text from the database</source>
        <translation>დამხმარე ტექსტის მიღება მონაცემთა ბაზიდან ვერ მოხერხდა</translation>
    </message>
    <message>
        <source>The QGIS help database is not installed</source>
        <translation>QGIS დამხმარე მონაცემთა ბაზა არ არის დაყენებული</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewerBase</name>
    <message>
        <source>QGIS Help</source>
        <translation>QGIS დახმარება</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;დახურვა</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;სახლში</translation>
    </message>
    <message>
        <source>Alt+H</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;წინ</translation>
    </message>
    <message>
        <source>Alt+F</source>
        <translation>Alt+F</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;უკან</translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
</context>
<context>
    <name>QgsHttpTransaction</name>
    <message>
        <source>WMS Server responded unexpectedly with HTTP Status Code %1 (%2)</source>
        <translation>WMS სერვერმა გამოაგზავნა უეცრად პასუხი HTTP სტატუსის კოდით %1 (%2)</translation>
    </message>
    <message>
        <source>HTTP response completed, however there was an error: %1</source>
        <translation>HTTP პასუხი დამთავრდა, ამგვარად იქ იყო შეცდომა: %1</translation>
    </message>
    <message>
        <source>HTTP transaction completed, however there was an error: %1</source>
        <translation>HTTP ტრანზაქცია დამთავრდა, ამგვარად იქ იყო შეცდომა: %1</translation>
    </message>
    <message>
        <source>Network timed out after %1 seconds of inactivity.
This may be a problem in your network connection or at the WMS server.</source>
        <translation type="obsolete">
        
        </translation>
    </message>
</context>
<context>
    <name>QgsIDWInterpolatorDialogBase</name>
    <message>
        <source>Dialog</source>
        <translation>დიალოგური ფანჯარა</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Inverse Distance Weighting&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400;&quot;&gt;The only parameter for the IDW interpolation method is the coefficient that describes the decrease of weights with distance.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;p, li { white-space: pre-wrap; }&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;შებრუნებული მანძილის წონა&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400;&quot;&gt;ერთადერთი პარამეტრი IDW –სთვის ინტერპოლაციის მეთოდი არის კოეფიციენტი რომელიც აღწერს წონების კლებას დისტანციების შესაბამისად.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Distance coefficient P:</source>
        <translation>დაშორების კოეფიციენტი  P:</translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResults</name>
    <message>
        <source>Feature</source>
        <translation>ობიექტი</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>მნიშვნელობა</translation>
    </message>
    <message>
        <source>(Derived)</source>
        <translation>(გადახრილი)</translation>
    </message>
    <message>
        <source>Run action</source>
        <translation>მოძრაობის გაშვება</translation>
    </message>
    <message>
        <source>Identify Results - </source>
        <translation>შედეგების იდენტიფიკაცია –</translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResultsBase</name>
    <message>
        <source>Identify Results</source>
        <translation>შედეგების იდენტიფიკაცია</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>დახმარება</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
</context>
<context>
    <name>QgsInterpolationDialog</name>
    <message>
        <source>Triangular interpolation (TIN)</source>
        <translation>სამკუთხა ინტერპოლაცია (TIN)</translation>
    </message>
    <message>
        <source>Inverse Distance Weighting (IDW)</source>
        <translation>შებრუნებული მანძილის წონა (IDW)</translation>
    </message>
</context>
<context>
    <name>QgsInterpolationDialogBase</name>
    <message>
        <source>Interpolation plugin</source>
        <translation>ინტერპოლაციის ჩანართი</translation>
    </message>
    <message>
        <source>Input</source>
        <translation>შემავალი</translation>
    </message>
    <message>
        <source>Input vector layer</source>
        <translation>შემავალი ვექტორული შრე</translation>
    </message>
    <message>
        <source>Use z-Coordinate for interpolation</source>
        <translation>გამოიყენეთ  z –კოორდინატი ინტერპოლაციისთვის</translation>
    </message>
    <message>
        <source>Interpolation attribute </source>
        <translation>ინტერპოლაციის ატრიბუტი</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>გამოსასვლელი</translation>
    </message>
    <message>
        <source>Interpolation method</source>
        <translation>ინტერპოლაციის მეთოდი</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Number of columns</source>
        <translation>სვეტების რაოდენობა</translation>
    </message>
    <message>
        <source>Number of rows</source>
        <translation>სტრიქონების რაოდენობა</translation>
    </message>
    <message>
        <source>Output file </source>
        <translation>გამოსასვლელი ფაილი</translation>
    </message>
</context>
<context>
    <name>QgsInterpolationPlugin</name>
    <message>
        <source>&amp;Interpolation</source>
        <translation>&amp;ინტერპოლაცია</translation>
    </message>
</context>
<context>
    <name>QgsLUDialogBase</name>
    <message>
        <source>Enter class bounds</source>
        <translation>შეიყვანეთ კლასის საზღვრები</translation>
    </message>
    <message>
        <source>Lower value</source>
        <translation>ქვედა მნიშვნელობა</translation>
    </message>
    <message>
        <source>Upper value</source>
        <translation>ზედა მნიშვნელობა</translation>
    </message>
    <message>
        <source>-</source>
        <translation>–</translation>
    </message>
</context>
<context>
    <name>QgsLabelDialog</name>
    <message>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLabelDialogBase</name>
    <message>
        <source>Form1</source>
        <translation>ფორმა 1</translation>
    </message>
    <message>
        <source>Field containing label</source>
        <translation>ველის შემცველი წარწერა</translation>
    </message>
    <message>
        <source>Default label</source>
        <translation>საწყისი წარწერა</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>შრიფტი</translation>
    </message>
    <message>
        <source>Buffer</source>
        <translation>ბუფერი</translation>
    </message>
    <message>
        <source>Position</source>
        <translation>პოზიცია</translation>
    </message>
    <message>
        <source>Data defined style</source>
        <translation>მონაცემით განსაზღვრული სტილი</translation>
    </message>
    <message>
        <source>Data defined alignment</source>
        <translation>მონაცემით განსაზღვრული ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Data defined buffer</source>
        <translation>მონაცემით განსაზღვრული ბუფერი</translation>
    </message>
    <message>
        <source>Data defined position</source>
        <translation>მონაცემით განსაზღვრული პოზიცია</translation>
    </message>
    <message>
        <source>Font transparency</source>
        <translation>შრიფტის გამჭვირვალობა</translation>
    </message>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>ფერი</translation>
    </message>
    <message>
        <source>Angle (deg)</source>
        <translation>კუთხე (გრად)</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Below Right</source>
        <translation>ქვემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>მარჯვენა</translation>
    </message>
    <message>
        <source>Below</source>
        <translation>ქვემოთ</translation>
    </message>
    <message>
        <source>Over</source>
        <translation>ზე</translation>
    </message>
    <message>
        <source>Above</source>
        <translation>ზემოთ</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>მარცხენა</translation>
    </message>
    <message>
        <source>Below Left</source>
        <translation>ქვემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Above Right</source>
        <translation>ზემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Above Left</source>
        <translation>ზემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Font size units</source>
        <translation>შრიფტის ზომის ერთეულები</translation>
    </message>
    <message>
        <source>Points</source>
        <translation>წერტილები</translation>
    </message>
    <message>
        <source>Map units</source>
        <translation>რუკის ელემენტები</translation>
    </message>
    <message>
        <source>Buffer labels?</source>
        <translation>ბუფერის წარწერები?</translation>
    </message>
    <message>
        <source>Buffer size</source>
        <translation>ბუფერის ზომა</translation>
    </message>
    <message>
        <source>Transparency</source>
        <translation>გამჭვირვალობა</translation>
    </message>
    <message>
        <source>Buffer size units</source>
        <translation>ბუფერის ზომის ერთეულები</translation>
    </message>
    <message>
        <source>Size is in points</source>
        <translation>ზომა არის წერტილებში</translation>
    </message>
    <message>
        <source>Size is in map units</source>
        <translation>ზომა არის რუკის ელემენტებში</translation>
    </message>
    <message>
        <source>Multiline labels?</source>
        <translation>მრავალხაზიანი წარწერები?</translation>
    </message>
    <message>
        <source>X Offset (pts)</source>
        <translation>X სიდიდე (pts)</translation>
    </message>
    <message>
        <source>Y Offset (pts)</source>
        <translation>Y სიდიდე (pts)</translation>
    </message>
    <message>
        <source>Offset units</source>
        <translation>სიდიდის ელემენტები</translation>
    </message>
    <message>
        <source>&amp;Font family</source>
        <translation>&amp;შრიფტის ოჯახი</translation>
    </message>
    <message>
        <source>&amp;Bold</source>
        <translation>&amp;გამუქებული</translation>
    </message>
    <message>
        <source>&amp;Italic</source>
        <translation>&amp;დახრილი</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;ხაზგასმული</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;ზომა</translation>
    </message>
    <message>
        <source>Size units</source>
        <translation>ზომის ერთეულები</translation>
    </message>
    <message>
        <source>Transparency:</source>
        <translation>გამჭვირვალობა:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>ზომა:</translation>
    </message>
    <message>
        <source>X Coordinate</source>
        <translation>X კოორდინატი</translation>
    </message>
    <message>
        <source>Y Coordinate</source>
        <translation>Y კოორდინატი</translation>
    </message>
    <message>
        <source>Preview:</source>
        <translation>დათვალიერება:</translation>
    </message>
    <message>
        <source>QGIS Rocks!</source>
        <translation>QGIS-ი მაგარია!</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use scale dependent rendering</source>
        <translation type="unfinished">მასშტაბზე დამოკიდებული ვიზუალიზაციის გამოყენება</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished">მაქსიმუმი</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished">მინიმუმი</translation>
    </message>
    <message>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message encoding="UTF-8">
        <source>°</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLegend</name>
    <message>
        <source>group</source>
        <translation>ჯგუფი</translation>
    </message>
    <message>
        <source>&amp;Make to toplevel item</source>
        <translation>&amp;მაღალი დონის ობიექტად გადაქცევა</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;წაშლა</translation>
    </message>
    <message>
        <source>Re&amp;name</source>
        <translation>გადარქ&amp;მევა</translation>
    </message>
    <message>
        <source>&amp;Add group</source>
        <translation>&amp;ჯგუფის დამატება</translation>
    </message>
    <message>
        <source>&amp;Expand all</source>
        <translation>&amp;ყველას გაშლა</translation>
    </message>
    <message>
        <source>&amp;Collapse all</source>
        <translation>&amp;ყველას შეკუმშვა</translation>
    </message>
    <message>
        <source>Show file groups</source>
        <translation>ფაილის ჯგუფების ჩვენება</translation>
    </message>
    <message>
        <source>No Layer Selected</source>
        <translation>შრე არაა არჩეული</translation>
    </message>
    <message>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation>ატრიბუტების ცხრილის გასახსნელად, თქვენ უნდა აირჩიოთ ვექტორული შრე ლეგენდაზე</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayer</name>
    <message>
        <source>&amp;Zoom to layer extent</source>
        <translation>&amp;შრის შანშლის გადიდება</translation>
    </message>
    <message>
        <source>&amp;Zoom to best scale (100%)</source>
        <translation>&amp;საუკეთესო სკალამდე  (100%) გადიდება</translation>
    </message>
    <message>
        <source>&amp;Show in overview</source>
        <translation>&amp;დათვალიერებაში ჩვენება</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;წაშლა</translation>
    </message>
    <message>
        <source>&amp;Open attribute table</source>
        <translation>&amp;ატრიბუტების ცხრილის გახსნა</translation>
    </message>
    <message>
        <source>Save as shapefile...</source>
        <translation>შენახვა როგორც shapefile...</translation>
    </message>
    <message>
        <source>Save selection as shapefile...</source>
        <translation>მონიშნულის შენახვა როგორც shapefile...</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;თვისებები</translation>
    </message>
    <message>
        <source>Multiple layers</source>
        <translation>მრავალჯერადი შრეები</translation>
    </message>
    <message>
        <source>This item contains multiple layers. Displaying multiple layers in the table is not supported.</source>
        <translation>ეს ობიექტი შეიცავს მრავალჯერად შრეებს. ამ ცხრილში მრავალჯერადი შრეების ჩვენება არ არის მხარდაჭერილი.</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayerFile</name>
    <message>
        <source>Save layer as...</source>
        <translation>შრის შენახვა როგორც...</translation>
    </message>
    <message>
        <source>Select the coordinate reference system for the saved shapefile.</source>
        <translation>აირჩიეთ საკოორდინატო სისტემა შენახული shapefile–სთვის.</translation>
    </message>
    <message>
        <source>The data points will be transformed from the layer coordinate reference system.</source>
        <translation>მონაცემის წერტილები იქნება გადაყვანილი შრიდან საკოორდინატო სისტემაში.</translation>
    </message>
    <message>
        <source>Saving done</source>
        <translation>შენახვა დასრულებულია</translation>
    </message>
    <message>
        <source>Export to Shapefile has been completed</source>
        <translation>Shapefile –ში ექსპორტირება დასრულებულია</translation>
    </message>
    <message>
        <source>Driver not found</source>
        <translation>წამყვანი ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>ESRI Shapefile driver is not available</source>
        <translation>ESRI Shapefile–ის წამყვანი არ არის ხელმისაწვდომი</translation>
    </message>
    <message>
        <source>Error creating shapefile</source>
        <translation>შეცდომა shapefile–ის შექმნისას</translation>
    </message>
    <message>
        <source>The shapefile could not be created (</source>
        <translation>შეუძლებელია shapefile –ის შექმნა (</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>Layer creation failed</source>
        <translation>შრის შექმნა ვერ განხორციელდა</translation>
    </message>
    <message>
        <source>Layer attribute table contains unsupported datatype(s)</source>
        <translation>შრის ატრიბუტების ცხრილი შეიცავს მხარდაუჭერელ მონაცემთა ტიპ(ებ)ს</translation>
    </message>
    <message>
        <source>&amp;Zoom to layer extent</source>
        <translation>&amp;შრის განშლის გადიდება</translation>
    </message>
    <message>
        <source>&amp;Show in overview</source>
        <translation>&amp;დათვალიერებაში ჩვენება</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;წაშლა</translation>
    </message>
    <message>
        <source>&amp;Open attribute table</source>
        <translation>&amp;ატრიბუტების ცხრილის გახსნა</translation>
    </message>
    <message>
        <source>Save as shapefile...</source>
        <translation>შენახვა როგორც shapefile...</translation>
    </message>
    <message>
        <source>Save selection as shapefile...</source>
        <translation>მონიშნულის შენახვა როგორც shapefile...</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;თვისებები</translation>
    </message>
</context>
<context>
    <name>QgsMapCanvas</name>
    <message>
        <source>Could not draw</source>
        <translation>შეუძლებელია დახატვა</translation>
    </message>
    <message>
        <source>because</source>
        <translation>იმიტომ რომ</translation>
    </message>
</context>
<context>
    <name>QgsMapLayer</name>
    <message>
        <source>%1 at line %2 column %3</source>
        <translation>%1 ხაზზე %2 სვეტი %3</translation>
    </message>
    <message>
        <source>style not found in database</source>
        <translation>სტილი ვერ მოიძებნა მონაცემთა ბაზაში</translation>
    </message>
    <message>
        <source>User database could not be opened.</source>
        <translation>შეუძლებელია მომხმარებლის მონაცემთა ბაზის გახსნა.</translation>
    </message>
    <message>
        <source>The style table could not be created.</source>
        <translation>სტილის ცხრილის შექმნა ვერ მოხერხდა.</translation>
    </message>
    <message>
        <source>The style %1 was saved to database</source>
        <translation>სტილი %1 შენახულია მონაცემთა ბაზაში</translation>
    </message>
    <message>
        <source>The style %1 was updated in the database.</source>
        <translation>სტილი %1 აიტვირთა მონაცემთა ბაზაში.</translation>
    </message>
    <message>
        <source>The style %1 could not be updated in the database.</source>
        <translation>სტილი %1 ვერ აიტვირთა მონაცემთა ბაზაში.</translation>
    </message>
    <message>
        <source>The style %1 could not be inserted into database.</source>
        <translation>სტილი %1 ვერ ჩაემატა მონაცემთა ბაზაში.</translation>
    </message>
</context>
<context>
    <name>QgsMapToolIdentify</name>
    <message>
        <source>(clicked coordinate)</source>
        <translation>(დაწკაპებული კოორდინატი)</translation>
    </message>
    <message>
        <source>WMS identify result for %1
%2</source>
        <translation>WMS ინდენტიფიკაციის შედეგები %1 –სთვის
%2</translation>
    </message>
    <message>
        <source>- %1 features found</source>
        <comment>Identify results window title</comment>
        <translation type="obsolete">
        
        </translation>
    </message>
</context>
<context>
    <name>QgsMapToolSplitFeatures</name>
    <message>
        <source>No feature split done</source>
        <translation>ობიექტის  გაყოფა არ შერსულდა</translation>
    </message>
    <message>
        <source>If there are selected features, the split tool only applies to the selected ones. If you like to split all features under the split line, clear the selection</source>
        <translation>თუ არსებოს არჩეული ობიექტები, დაყოფის ინსტრუმენტი დასაშვებია მხოლოდ მონიშნულებზე. თუ გსურთ ყველა ფუნქციის დაყოფა გამყოფი ხაზის ქვეშ, მაშინ გააუქმეთ მონიშვნა</translation>
    </message>
    <message>
        <source>Split error</source>
        <translation>დაყოფის შეცდომა</translation>
    </message>
    <message>
        <source>An error occured during feature splitting</source>
        <translation>შეცდომა წარმოიშვა ობიექტის გაყოფისას</translation>
    </message>
</context>
<context>
    <name>QgsMapToolVertexEdit</name>
    <message>
        <source>Snap tolerance</source>
        <translation>გადატანის დაშვება</translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation>არ გამოიტანო ეს შეცდომა კვლავ</translation>
    </message>
    <message>
        <source>Could not snap segment.</source>
        <translation>შეუძლებელია სეგმენტის გადაადგილება.</translation>
    </message>
    <message>
        <source>Have you set the tolerance in Settings &gt; Project Properties &gt; General?</source>
        <translation>თქვენ დააყენეთ დაშვება პარამეტრები &gt; პროექტის თვისებები &gt; ზოგადი?</translation>
    </message>
</context>
<context>
    <name>QgsMapserverExport</name>
    <message>
        <source>Overwrite File?</source>
        <translation>გადავაწერო ფაილი?</translation>
    </message>
    <message>
        <source> exists. 
Do you want to overwrite it?</source>
        <translation>არსებობს. 
გსურთ გადავაწერო?</translation>
    </message>
    <message>
        <source>Name for the map file</source>
        <translation>სახელი რუკის ფაილისთვის</translation>
    </message>
    <message>
        <source>MapServer map files (*.map);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation>MapServer რუკის ფაილები (*.map);;ყველა ფაილი (*.*)</translation>
    </message>
    <message>
        <source>Choose the QGIS project file</source>
        <translation>QGIS პროექტის ფაილის არჩევა</translation>
    </message>
    <message>
        <source>QGIS Project Files (*.qgs);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation>QGIS პროექტის ფაილები (*.qgs);;ყველა ფაილი (*.*)</translation>
    </message>
    <message>
        <source> exists. 
Do you want to overwrite it?</source>
        <comment>a fileName is prepended to this text, and appears in a dialog box</comment>
        <translation>არსებობს.
გსურთ გადავაწერო?</translation>
    </message>
</context>
<context>
    <name>QgsMapserverExportBase</name>
    <message>
        <source>Export to Mapserver</source>
        <translation>Mapserver –ში ექსპორტი</translation>
    </message>
    <message>
        <source>Web Interface Definition</source>
        <translation>ქსელის ინტერფეისის განსაზღვრება</translation>
    </message>
    <message>
        <source>Template</source>
        <translation>შაბლონი</translation>
    </message>
    <message>
        <source>Path to the MapServer template file</source>
        <translation>MapServer შაბლონის ფაილის გზა</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>დათვალიერება...</translation>
    </message>
    <message>
        <source>Header</source>
        <translation>ზედა კოლონტიტული</translation>
    </message>
    <message>
        <source>Footer</source>
        <translation>ქვედა კოლონტიტული</translation>
    </message>
    <message>
        <source>Map</source>
        <translation>რუკა</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>ერთეულები</translation>
    </message>
    <message>
        <source>dd</source>
        <translation>dd</translation>
    </message>
    <message>
        <source>feet</source>
        <translation>ფუტი</translation>
    </message>
    <message>
        <source>meters</source>
        <translation>მეტრები</translation>
    </message>
    <message>
        <source>miles</source>
        <translation>მილები</translation>
    </message>
    <message>
        <source>inches</source>
        <translation>დიუმები</translation>
    </message>
    <message>
        <source>kilometers</source>
        <translation>კილომეტრები</translation>
    </message>
    <message>
        <source>Image type</source>
        <translation>ნახატის ტიპი</translation>
    </message>
    <message>
        <source>gif</source>
        <translation>gif</translation>
    </message>
    <message>
        <source>gtiff</source>
        <translation>gtiff</translation>
    </message>
    <message>
        <source>jpeg</source>
        <translation>jpeg</translation>
    </message>
    <message>
        <source>png</source>
        <translation>png</translation>
    </message>
    <message>
        <source>swf</source>
        <translation>swf</translation>
    </message>
    <message>
        <source>userdefined</source>
        <translation>მომხმარებლის მიერ განსაზღვრული</translation>
    </message>
    <message>
        <source>wbmp</source>
        <translation>wbmp</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>სიგანე</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>სიმაღლე</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile</source>
        <translation>პრეფიქსი რომელიც მიერთებულია რუკაზე, სკალის ზოლი და GIF ფაილის სახელების ლეგენდა შექმნილია ამ MapFile–ის გამოყენებით</translation>
    </message>
    <message>
        <source>Map file</source>
        <translation>რუკის ფაილი</translation>
    </message>
    <message>
        <source>Name for the map file to be created from the QGIS project file</source>
        <translation>სახელი რუკის ფაილისთვის რომელიც უნდა შეიქმნას QGIS პროექტის ფაილისგან</translation>
    </message>
    <message>
        <source>Full path to the QGIS project file to export to MapServer map format</source>
        <translation>QGIS პროექტის ფაილის სრული გზა MapServer რუკის ფორმატის ექსპორტისთვის</translation>
    </message>
    <message>
        <source>QGIS project file</source>
        <translation>QGIS პროექტის ფაილი</translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation>შენახვა როგორც...</translation>
    </message>
    <message>
        <source>If checked, only the layer information will be processed</source>
        <translation>თუ მონიშნულია, მხოლოდ შრის ინფორმაცია იქნება დამუშავებული</translation>
    </message>
    <message>
        <source>Export LAYER information only</source>
        <translation>მხოლოდ LAYER ინფორმაციის ექსპორტი</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;დახმარება</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;თანხმობა</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;გაუქმება</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>MinScale</source>
        <translation>მინშკალა</translation>
    </message>
    <message>
        <source>MaxScale</source>
        <translation>მაქსშკალა</translation>
    </message>
    <message>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile. It should be kept short.</source>
        <translation>რუკაზე თანდართული პრეფიქსი, სკალის ზოლი და GIF ფაილის სახელების ლეგენდა შექმნილი ამ MapFile–ით. ის უნდა იყოს შენახული მოკლედ.</translation>
    </message>
</context>
<context>
    <name>QgsMeasureBase</name>
    <message>
        <source>Measure</source>
        <translation>გაზომვა</translation>
    </message>
    <message>
        <source>Total:</source>
        <translation>ჯამი:</translation>
    </message>
    <message>
        <source>Segments</source>
        <translation>სეგმენტები</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>დახმარება</translation>
    </message>
    <message>
        <source>New</source>
        <translation>ახალი</translation>
    </message>
    <message>
        <source>Cl&amp;ose</source>
        <translation>დახ&amp;ურვა</translation>
    </message>
</context>
<context>
    <name>QgsMeasureDialog</name>
    <message>
        <source>Segments (in meters)</source>
        <translation>სეგმენტები (მეტრებში)</translation>
    </message>
    <message>
        <source>Segments (in feet)</source>
        <translation>სეგმენტები (ფუტებში)</translation>
    </message>
    <message>
        <source>Segments (in degrees)</source>
        <translation>სეგმენტები (გრადუსებში)</translation>
    </message>
    <message>
        <source>Segments</source>
        <translation>სეგმენტები</translation>
    </message>
</context>
<context>
    <name>QgsMeasureTool</name>
    <message>
        <source>Incorrect measure results</source>
        <translation>გაზომვის არასწორი შედეგები</translation>
    </message>
    <message>
        <source>&lt;p&gt;This map is defined with a geographic coordinate system (latitude/longitude) but the map extents suggests that it is actually a projected coordinate system (e.g., Mercator). If so, the results from line or area measurements will be incorrect.&lt;/p&gt;&lt;p&gt;To fix this, explicitly set an appropriate map coordinate system using the &lt;tt&gt;Settings:Project Properties&lt;/tt&gt; menu.</source>
        <translation>&lt;p&gt;ეს რუკა არის განსაზღვრული გეოგრაფიული საკოორდინატო სისტემით (გრძედი/განედი) მაგრამ რუკის მიუთითებს რომ ის არის პრაქტიკულად დაპროექტებული საკოორდინატო სისტემა (მაგ.Mercator). თუ ასეა, ხაზის ან სიბრტყის გაზომვის შედეგები იქნება არასწორი.&lt;/p&gt;&lt;p&gt;ამის აღმოსაფხვრელად, დეტალურად დააყენეთ შესაბამისი რუკის საკოორდინატო სისტემა&lt;tt&gt;პარამეტრები:პროექტის თვისებები&lt;/tt&gt; მენიუს გამოყენებით.</translation>
    </message>
</context>
<context>
    <name>QgsMessageViewer</name>
    <message>
        <source>QGIS Message</source>
        <translation>QGIS-ის შეტყობინება</translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation>არ გამოიტანო ეს შეცდომა კვლავ</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>დახურვა</translation>
    </message>
</context>
<context>
    <name>QgsNewConnection</name>
    <message>
        <source>Test connection</source>
        <translation>კავშირის გამოცდა</translation>
    </message>
    <message>
        <source>Connection to %1 was successful</source>
        <translation>კავშირი %1 იყო წარმატებული</translation>
    </message>
    <message>
        <source>Connection failed - Check settings and try again.

Extended error information:
</source>
        <translation>კავშირი ვერ განხორციელდა – შეამოწმეთ პარამეტრები და სცადეთ თავიდან.

შეცდომის გავრცობილი ინფორმაცია:
</translation>
    </message>
</context>
<context>
    <name>QgsNewConnectionBase</name>
    <message>
        <source>Create a New PostGIS connection</source>
        <translation>ახალი PostGIS კავშირის შექმნა</translation>
    </message>
    <message>
        <source>Connection Information</source>
        <translation>ინფორმაცია კავშირის შესახებ</translation>
    </message>
    <message>
        <source>Restrict the search to the public schema for spatial tables not in the geometry_columns table</source>
        <translation>მოძებნის აკრძალვა ღია სქემისთვის სივრცული ცხრილებისთვის, არა geometry_columns ცხრილში</translation>
    </message>
    <message>
        <source>When searching for spatial tables that are not in the geometry_columns tables, restrict the search to tables that are in the public schema (for some databases this can save lots of time)</source>
        <translation>იმ სივრცული ცხრილების მოძებნისას რომლებიც არ არიან geometry_columns ცხრილები, აკრძალე ცხრილების მოძებნა რომლებიც არიან ღია სქემაში (ზოგიერთი მონაცემთა ბაზისთვის ამას შეუძლია დაზოგოს დიდი დრო)</translation>
    </message>
    <message>
        <source>Only look in the &apos;public&apos; schema</source>
        <translation>მხოლოდ მოძებნე &apos;ღია&apos; სქემა</translation>
    </message>
    <message>
        <source>Restrict the displayed tables to those that are in the geometry_columns table</source>
        <translation>ნაჩვენების ცხრილების შეზღუდვა geometry_columns ცხრილში მყოფ ცხრილებზე</translation>
    </message>
    <message>
        <source>Restricts the displayed tables to those that are in the geometry_columns table. This can speed up the initial display of spatial tables.</source>
        <translation>ზღუდავს ნაჩვენებ ცხრილებს მათზე, რომლებიც მოცემულია geometry_columns ცხრილში. ამას შეუძლია ააჩქაროს სივრცითი ცხრილების საწყისი ჩვენება.</translation>
    </message>
    <message>
        <source>Only look in the geometry_columns table</source>
        <translation>მხოლოდ geometry_columns ცხრილში ჩახედვა</translation>
    </message>
    <message>
        <source>Save Password</source>
        <translation>პაროლის შენახვა</translation>
    </message>
    <message>
        <source>Test Connect</source>
        <translation>სატესტო კავშირი</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Host</source>
        <translation>ჰოსტი</translation>
    </message>
    <message>
        <source>Database</source>
        <translation>მონაცემთა ბაზა</translation>
    </message>
    <message>
        <source>Port</source>
        <translation>პორტი</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>მომხმარებლის სახელი</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>პაროლი</translation>
    </message>
    <message>
        <source>Name of the new connection</source>
        <translation>ახალი კავშის სახელი</translation>
    </message>
    <message>
        <source>5432</source>
        <translation>5432</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>გაუქმება</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>დახმარება</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
</context>
<context>
    <name>QgsNewHttpConnectionBase</name>
    <message>
        <source>Create a new WMS connection</source>
        <translation>ქმნის ახალ WMS კავშირს</translation>
    </message>
    <message>
        <source>Connection details</source>
        <translation>კავშირის დეტალები</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Name of the new connection</source>
        <translation>ახალი კავშირის სახელი</translation>
    </message>
    <message>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <source>HTTP address of the Web Map Server</source>
        <translation>ვებ რუკის სერვერის HTTP მისამართი</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation>ქვემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>ზემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>ზემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>ქვემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>&amp;North Arrow</source>
        <translation>&amp;ჩრდილოეთ ისარი</translation>
    </message>
    <message>
        <source>Creates a north arrow that is displayed on the map canvas</source>
        <translation>ქმნის ჩრდილოეთ ისარს, რომელიც გამოისახება რუკის ნახატზე</translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation>&amp;დეკორაციები</translation>
    </message>
    <message>
        <source>North arrow pixmap not found</source>
        <translation>ჩრდილოეთ ისრის pixmap ვერ მოიძებნა</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGui</name>
    <message>
        <source>Pixmap not found</source>
        <translation>Pixmap ვერ მოიძებნა</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGuiBase</name>
    <message>
        <source>North Arrow Plugin</source>
        <translation>ჩრდილოეთ ისარის ჩანართი</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>თვისებები</translation>
    </message>
    <message>
        <source>Angle</source>
        <translation>კუთხე</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>ადგილმდებარეობა</translation>
    </message>
    <message>
        <source>Set direction automatically</source>
        <translation>მიმართულების ავტომატურად მითითება</translation>
    </message>
    <message>
        <source>Enable North Arrow</source>
        <translation>ჩრდილოეთ ისრის დაშვება</translation>
    </message>
    <message>
        <source>Placement on screen</source>
        <translation>ადგილმდებარეობა ეკრანზე</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>ზემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>ზემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>ქვემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>ქვემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Preview of north arrow</source>
        <translation>ჩრდილოეთ ისრის დათვალიერება</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>ხატულა</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>დათვალიერება...</translation>
    </message>
</context>
<context>
    <name>QgsOptions</name>
    <message>
        <source>Detected active locale on your system: </source>
        <translation>თქვენს სისტემაში დაფიქსირდა აქტიური მოქმედების არე.</translation>
    </message>
    <message>
        <source>to vertex</source>
        <translation>წვეროსთან</translation>
    </message>
    <message>
        <source>to segment</source>
        <translation>სეგმენტთან</translation>
    </message>
    <message>
        <source>to vertex and segment</source>
        <translation>წვეროსთან და სეგმენტთან</translation>
    </message>
    <message>
        <source>Semi transparent circle</source>
        <translation>ნაწილობრივ გამჭვირვალე წრე</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>ჯვარი</translation>
    </message>
    <message>
        <source>Show all features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show selected features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show features in current canvas</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsOptionsBase</name>
    <message>
        <source>QGIS Options</source>
        <translation>QGIS ფუნქციები</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation>&amp;ზოგადი</translation>
    </message>
    <message>
        <source>Project files</source>
        <translation>პროექტის ფაილები</translation>
    </message>
    <message>
        <source>Prompt to save project changes when required</source>
        <translation>შეტყობინება პროექტის ცვლილებების შენახვისას როდესაც მოთხოვნილია</translation>
    </message>
    <message>
        <source>Warn when opening a project file saved with an older version of QGIS</source>
        <translation>გაბრთხილება პროექტის ფაილის გახსნისას, რომელიც შენახულია QGIS –ის ძველი ვერსიით</translation>
    </message>
    <message>
        <source>Default Map Appearance (overridden by project properties)</source>
        <translation>საწყისი რუკის გარეგნობა ( პროექტის თვისებების გაუთვალისწინებლად)</translation>
    </message>
    <message>
        <source>Selection color</source>
        <translation>არჩეული ფერი</translation>
    </message>
    <message>
        <source>Background color</source>
        <translation>ფონის ფერი</translation>
    </message>
    <message>
        <source>&amp;Application</source>
        <translation>&amp;პროგრამა</translation>
    </message>
    <message>
        <source>Icon theme</source>
        <translation>ხატულას თემა</translation>
    </message>
    <message>
        <source>&lt;b&gt;Note: &lt;/b&gt;Theme changes take effect the next time QGIS is started</source>
        <translation>&lt;b&gt;შენიშვნა: &lt;/b&gt;თემის ცვლილებები აისახება QGIS –ის შემდეგი ჩატვირთვისას</translation>
    </message>
    <message>
        <source>Capitalise layer names in legend</source>
        <translation>ლეგენდაზე შრის სახელების ასომთავრულზე გადაყვანა</translation>
    </message>
    <message>
        <source>Display classification attribute names in legend</source>
        <translation>კლასიფიცირებული ატრიბუტის სახელების ჩვენება ლეგენდაზე</translation>
    </message>
    <message>
        <source>Hide splash screen at startup</source>
        <translation>მისალმების დამალვა ჩართვისას</translation>
    </message>
    <message>
        <source>Open attribute table in a dock window</source>
        <translation>ატრიბუტების ცხრილის გახსნა მისაბმელ ფანჯარაში</translation>
    </message>
    <message>
        <source>&amp;Rendering</source>
        <translation>&amp;ვიზუალიზაცია</translation>
    </message>
    <message>
        <source>Rendering behavior</source>
        <translation>ვიზუალიზაციის რეჟიმი</translation>
    </message>
    <message>
        <source>By default new la&amp;yers added to the map should be displayed</source>
        <translation>საწყისად რუკაზე დამატებული ახალი &amp;შრეები უნდა გამოჩნდეს</translation>
    </message>
    <message>
        <source>Number of features to draw before updating the display</source>
        <translation>ფუნქციების რაოდენობა რომლებიც უნდა დაიხატოს ეკრანზე განახლებამდე</translation>
    </message>
    <message>
        <source>Map display will be updated (drawn) after this many features have been read from the data source</source>
        <translation>რუკის ჩვენება განახლდება (დაიხატება ხელახლა) მრავალი მოცემული ობიექტის მონაცემთა წყაროდან კითხვის დასრულების შემდეგ</translation>
    </message>
    <message>
        <source>&lt;b&gt;Note:&lt;/b&gt; Use zero to prevent display updates until all features have been rendered</source>
        <translation>&lt;b&gt;შენიშვნა:&lt;/b&gt; გამოიყენეთ ნული რათა აიცილოთ განახლება მანამ, სანამ ყველა ობიექტი არ იქნება ვიზუალიზირებული</translation>
    </message>
    <message>
        <source>Rendering quality</source>
        <translation>ვიზუალიზაციის ხარისხი</translation>
    </message>
    <message>
        <source>Make lines appear less jagged at the expense of some drawing performance</source>
        <translation>დახატვის გარკვეული სისწრაფის ხარჯზე ხაზების ნაკლებად დაკლაკნილად ჩვენება</translation>
    </message>
    <message>
        <source>Selecting this will unselect the &apos;make lines less&apos; jagged toggle</source>
        <translation>ამის არჩევა გადაირჩევს ”ხაზების ნაკლებად დაკლაკნილად გარდაქმნის” ვარიანტს</translation>
    </message>
    <message>
        <source>Fix problems with incorrectly filled polygons</source>
        <translation>არასწორად შევსებული პოლიგონების პრობლემების აღმოფხვრა</translation>
    </message>
    <message>
        <source>Continuously redraw the map when dragging the legend/map divider</source>
        <translation>ლეგენდა/რუკის გამყოფის გადათრევისას რუკის მუდმივად ხელახლა დახატვა</translation>
    </message>
    <message>
        <source>&amp;Map tools</source>
        <translation>&amp;რუკის ხელსაწყოები</translation>
    </message>
    <message>
        <source>Panning and zooming</source>
        <translation>გადაადგილება და გადიდება</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>გადიდება</translation>
    </message>
    <message>
        <source>Zoom and recenter</source>
        <translation>ზომის ცვლილება და ცენტრირება</translation>
    </message>
    <message>
        <source>Zoom to mouse cursor</source>
        <translation>მაუსის კურსორის გადიდება</translation>
    </message>
    <message>
        <source>Nothing</source>
        <translation>არაფერი</translation>
    </message>
    <message>
        <source>Zoom factor</source>
        <translation>ზომის ცვლილების ფაქტორი</translation>
    </message>
    <message>
        <source>Mouse wheel action</source>
        <translation>მაუსის ბორბლის მოქმედება</translation>
    </message>
    <message>
        <source>Measure tool</source>
        <translation>საზომი ხელსაწყო</translation>
    </message>
    <message>
        <source>Rubberband color</source>
        <translation>Rubberband ფერი</translation>
    </message>
    <message>
        <source>Ellipsoid for distance calculations</source>
        <translation>ელიფსოიდი მანძილის გამოსათვლელად</translation>
    </message>
    <message>
        <source>Search radius</source>
        <translation>საძებნი რადიუსი</translation>
    </message>
    <message>
        <source>&lt;b&gt;Note:&lt;/b&gt; Specify the search radius as a percentage of the map width</source>
        <translation>&lt;b&gt;შენიშვნა:&lt;/b&gt; მიუთითეთ საძიებო რადიუსი როგორც რუკის სიგანის პროცენტი</translation>
    </message>
    <message>
        <source>Search radius for identifying features and displaying map tips</source>
        <translation>საძიებო რადიუსი ფუნქციების იდენტიფიკაციისა და რუკის აღნიშნის საჩვენებლად</translation>
    </message>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation>აციფვრა</translation>
    </message>
    <message>
        <source>Rubberband</source>
        <translation>Rubberband</translation>
    </message>
    <message>
        <source>Line width</source>
        <translation>ხაზის სისქე</translation>
    </message>
    <message>
        <source>Line width in pixels</source>
        <translation>ხაზის სისქე პიქსელებში</translation>
    </message>
    <message>
        <source>Line colour</source>
        <translation>ხაზის ფერი</translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation>მიბმა</translation>
    </message>
    <message>
        <source>Default snap mode</source>
        <translation>მიბმის საწყისი რეჟიმი</translation>
    </message>
    <message>
        <source>Default snapping tolerance in layer units</source>
        <translation>შრის ერთეულებში მიბმის საწყისი სიმკაცრე</translation>
    </message>
    <message>
        <source>Search radius for vertex edits in layer units</source>
        <translation>შრის ერთეულებში წვეროს რედაქტირებიისთვის ძებნის რადიუსი</translation>
    </message>
    <message>
        <source>Vertex markers</source>
        <translation>წვეროს სანიშნეები</translation>
    </message>
    <message>
        <source>Marker style</source>
        <translation>სანიშნეს სტილი</translation>
    </message>
    <message>
        <source>CRS</source>
        <translation>CRS</translation>
    </message>
    <message>
        <source>Select Global Default ...</source>
        <translation>გლობალური საწყისის არჩევა ...</translation>
    </message>
    <message>
        <source>When layer is loaded that has no coordinate reference system (CRS)</source>
        <translation>როდესაც შრე არის ჩატვირთული მას არ გააჩნია საკოორდინატო სისტემა (CRS)</translation>
    </message>
    <message>
        <source>Prompt for CRS</source>
        <translation>კარნახი CRS–სთვის</translation>
    </message>
    <message>
        <source>Project wide default CRS will be used</source>
        <translation>პროექტის ფართო საწყისი CRS იქნება გამოყენებული</translation>
    </message>
    <message>
        <source>Global default CRS displa&amp;yed below will be used</source>
        <translation>ქვემოთ გამო&amp;სახული გლობალური საწყისი CRS იქნება გამოყენებული</translation>
    </message>
    <message>
        <source>Locale</source>
        <translation>ადგილობრივი</translation>
    </message>
    <message>
        <source>Override system locale</source>
        <translation>სისტემის ლოკალიზაციის გადაჯაბნა</translation>
    </message>
    <message>
        <source>Locale to use instead</source>
        <translation>სამაგიერო ლოკალიზაციის გამოყენება</translation>
    </message>
    <message>
        <source>&lt;b&gt;Note:&lt;/b&gt; Enabling / changing overide on local requires an application restart</source>
        <translation>&lt;b&gt;შენიშვნა:&lt;/b&gt; ჩართვა / შეცვლა ლოკალიზაციის გადაფარვის ითოვს პროგრამის ხელახლა ჩატვირთვას</translation>
    </message>
    <message>
        <source>Additional Info</source>
        <translation>დამატებითი ინფორმაცია</translation>
    </message>
    <message>
        <source>Detected active locale on your system:</source>
        <translation>თქვენს სისტემაში აქტიური ლოკალიზაციის პარამეტრების აღმოჩენა:</translation>
    </message>
    <message>
        <source>Proxy</source>
        <translation>Proxy</translation>
    </message>
    <message>
        <source>Use proxy for web access</source>
        <translation>proxy–ის გამოყენება ქსელის წვდომისთვის</translation>
    </message>
    <message>
        <source>Host</source>
        <translation>ჰოსტი</translation>
    </message>
    <message>
        <source>Port</source>
        <translation>პორტი</translation>
    </message>
    <message>
        <source>User</source>
        <translation>მომხმარებელი</translation>
    </message>
    <message>
        <source>Leave this blank if no proxy username / password are required</source>
        <translation>დატოვე ცარიელი თუ proxy–ის მომხმარებლის სახელი/პაროლი არ არის მოთხოვნილი</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>პაროლი</translation>
    </message>
    <message>
        <source>Attribute table behaviour</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPasteTransformationsBase</name>
    <message>
        <source>Paste Transformations</source>
        <translation>გარდაქმნების ჩასმა</translation>
    </message>
    <message>
        <source>&lt;b&gt;Note: This function is not useful yet!&lt;/b&gt;</source>
        <translation>&lt;b&gt;შენიშვნა: ეს ფუნქცია ჯერ–ჯერობით გამოუსადეგია!&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>წყარო</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>დანიშნულების ადგილი</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;დახმარება</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Add New Transfer</source>
        <translation>ახალი გადაყვანის ფორმირება</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>QgsPgGeoprocessing</name>
    <message>
        <source>&amp;Buffer features</source>
        <translation>ობიექტების &amp;ბუფერირება</translation>
    </message>
    <message>
        <source>Create a buffer for a PostgreSQL layer. </source>
        <translation>ბუფერის შექმნა PostgreSQL შრისთვის.</translation>
    </message>
    <message>
        <source>A new layer is created in the database with the buffered features.</source>
        <translation>ბაზაში შეიქმნა ახალი შრე ბუფერირებული ობიექტებით.</translation>
    </message>
    <message>
        <source>&amp;Geoprocessing</source>
        <translation>&amp;გეოდამუშავება</translation>
    </message>
    <message>
        <source>Buffer features in layer %1</source>
        <translation>%1 შრეში ობიექტების ბუფერირება</translation>
    </message>
    <message>
        <source>Unable to add geometry column</source>
        <translation>შეუძლებელია გეომეტრიული სვეტისდამატება</translation>
    </message>
    <message>
        <source>Unable to add geometry column to the output table </source>
        <translation>შეუძლებელია გამომავალ ცხრილზე გეომეტრიული სვეტის დამატება</translation>
    </message>
    <message>
        <source>Unable to create table</source>
        <translation>შეუძლებელია ცხრილის შექმნა</translation>
    </message>
    <message>
        <source>Failed to create the output table </source>
        <translation>გამომავალი ცხრილის შექმნა ვერ განხორციელდა</translation>
    </message>
    <message>
        <source>Error connecting to the database</source>
        <translation>შეცდომა მონაცემთა ბაზასთან დაკავშირებისას</translation>
    </message>
    <message>
        <source>No GEOS support</source>
        <translation>არ არსებობს GEOS მხარდაჭერა </translation>
    </message>
    <message>
        <source>Buffer function requires GEOS support in PostGIS</source>
        <translation>ბუფერის ფუნქცია ითხოვს GEOS მხარდაჭერას PostGIS -ში</translation>
    </message>
    <message>
        <source>Not a PostgreSQL/PostGIS Layer</source>
        <translation>არ არის PostgreSQL/PostGIS შრე </translation>
    </message>
    <message>
        <source> is not a PostgreSQL/PostGIS layer.
</source>
        <translation>არ არის PostgreSQL/PostGIS შრე. 
</translation>
    </message>
    <message>
        <source>Geoprocessing functions are only available for PostgreSQL/PostGIS Layers</source>
        <translation>გეოდამუშავების ფუნქციები ხელმისაწვდომია მხოლოდ  PostgreSQL/PostGIS შრეებისთვის</translation>
    </message>
    <message>
        <source>No Active Layer</source>
        <translation>არ არის აქტიური შრე</translation>
    </message>
    <message>
        <source>You must select a layer in the legend to buffer</source>
        <translation>თქვენ უნდა მონიშნოთ შრე ლეგენდაზე ბუფერისთვის</translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilder</name>
    <message>
        <source>Table &lt;b&gt;%1&lt;/b&gt; in database &lt;b&gt;%2&lt;/b&gt; on host &lt;b&gt;%3&lt;/b&gt;, user &lt;b&gt;%4&lt;/b&gt;</source>
        <translation>ცხრილი &lt;b&gt;%1&lt;/b&gt; მონაცემთა ბაზაში &lt;b&gt;%2&lt;/b&gt; ჰოსტზე &lt;b&gt;%3&lt;/b&gt;, მომხმარებელი &lt;b&gt;%4&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Connection Failed</source>
        <translation>კავშირი ვერ შედგა</translation>
    </message>
    <message>
        <source>Connection to the database failed:</source>
        <translation>კავშირი მონაცემთა ბაზასთან ვერ შედგა:</translation>
    </message>
    <message>
        <source>Database error</source>
        <translation>მონაცემთა ბაზის შეცდომა</translation>
    </message>
    <message>
        <source>&lt;p&gt;Failed to get sample of field values using SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation>&lt;p&gt;ველის მნიშვნელობების მიღება SQL-ის საშუალებით ვერ განხორციელდა: &lt;/p&gt;&lt;p&gt;</translation>
    </message>
    <message>
        <source>No Query</source>
        <translation>არ არის მოთხოვნა</translation>
    </message>
    <message>
        <source>You must create a query before you can test it</source>
        <translation>ტესტირებამდე თქვენ უნდა შექმნათ მოთხოვნა</translation>
    </message>
    <message>
        <source>Query Result</source>
        <translation>მოთხოვნის შედეგი</translation>
    </message>
    <message>
        <source>The where clause returned </source>
        <translation>დაბრუნდა where clause  </translation>
    </message>
    <message>
        <source> rows.</source>
        <translation>სტრიქონები.</translation>
    </message>
    <message>
        <source>Query Failed</source>
        <translation>მოთხოვნა ვერ შედგა</translation>
    </message>
    <message>
        <source>An error occurred when executing the query:</source>
        <translation>შეცდომა წარმოიქმნა მოთხოვნის გაშვებისას:</translation>
    </message>
    <message>
        <source>Error in Query</source>
        <translation>შეცდომაა მოთხოვნაში</translation>
    </message>
    <message>
        <source>No Records</source>
        <translation>არ არსებობს ჩანაწერები</translation>
    </message>
    <message>
        <source>The query you specified results in zero records being returned. Valid PostgreSQL layers must have at least one feature.</source>
        <translation>მოთხოვნამ რომელიც თქვენ მიუთითეთ დააბრუნა შედეგები ნულოვან ჩანაწერებში. დასაშვებ PostgreSQL შრეს უნდა ჰქონდეს მინიმუმ ერთი ობიექტი.</translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilderBase</name>
    <message>
        <source>PostgreSQL Query Builder</source>
        <translation>PostgreSQL Query Builder</translation>
    </message>
    <message>
        <source>Datasource</source>
        <translation>მონაცემთა წყარო</translation>
    </message>
    <message>
        <source>Fields</source>
        <translation>ველები</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;List of fields in this vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ველების სია ამ ვექტორულ ფაილში&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Values</source>
        <translation>მნიშვნელობები</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;List of values for the current field.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;მნიშვნელობების სია მიმდინარე ველისთვის.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Take a &lt;span style=&quot; font-weight:600;&quot;&gt;sample&lt;/span&gt; of records in the vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;სანიმუშო  &lt;span style=&quot; font-weight:600;&quot;&gt;ჩანაწერების აღება&lt;/span&gt; ვექტორულ ფაილში&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>ნიმუში</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Retrieve &lt;span style=&quot; font-weight:600;&quot;&gt;all&lt;/span&gt; the record in the vector file (&lt;span style=&quot; font-style:italic;&quot;&gt;if the table is big, the operation can consume some time&lt;/span&gt;)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ყველა &lt;span style=&quot; font-weight:600;&quot;&gt;ჩანაწერის &lt;/span&gt;მოთხოვნა ვექტორულ ფაილში (&lt;span style=&quot; font-style:italic;&quot;&gt;თუ ცხრილი არის დიდი მოცულობის, ოპერაციამ შეიძლება მოიხმაროს გარკვეული დრო&lt;/span&gt;)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>All</source>
        <translation>ყველა</translation>
    </message>
    <message>
        <source>Operators</source>
        <translation>ოპერატორები</translation>
    </message>
    <message>
        <source>=</source>
        <translation>=</translation>
    </message>
    <message>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <source>NOT</source>
        <translation>NOT</translation>
    </message>
    <message>
        <source>OR</source>
        <translation>OR</translation>
    </message>
    <message>
        <source>AND</source>
        <translation>AND</translation>
    </message>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>IN</source>
        <translation>IN</translation>
    </message>
    <message>
        <source>NOT IN</source>
        <translation>NOT IN</translation>
    </message>
    <message>
        <source>!=</source>
        <translation>!=</translation>
    </message>
    <message>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <source>LIKE</source>
        <translation>LIKE</translation>
    </message>
    <message>
        <source>ILIKE</source>
        <translation>ILIKE</translation>
    </message>
    <message>
        <source>&gt;=</source>
        <translation>&gt;=</translation>
    </message>
    <message>
        <source>&lt;=</source>
        <translation>&lt;=</translation>
    </message>
    <message>
        <source>SQL where clause</source>
        <translation>SQL where clause</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>გასუფთავება</translation>
    </message>
    <message>
        <source>Test</source>
        <translation>ტესტირება</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>თანხმობა</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>გაუქმებაგაუქმება</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstaller</name>
    <message>
        <source>Couldn&apos;t parse output from the repository</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t open the system plugin directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t open the local plugin directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fetch Python Plugins...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Install more plugins from remote repositories</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Looking for new plugins...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There is a new plugin available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There is a plugin update available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Python Plugin Installer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error reading repository:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nothing to remove! Plugin directory doesn&apos;t exist:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to remove the directory:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check permissions or remove it manually</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerDialog</name>
    <message>
        <source>QGIS Python Plugin Installer</source>
        <translation>QGIS Python -ის ჩანართის ინსტალატორი</translation>
    </message>
    <message>
        <source>QGIS Plugin Installer</source>
        <translation type="obsolete">QGIS-ის ჩანართების ინსტალატორი</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation type="obsolete">ჩანართები</translation>
    </message>
    <message>
        <source>List of available and installed plugins</source>
        <translation type="obsolete">ხელმისაწვდომი და დაინსტალირებული ჩანართების სია</translation>
    </message>
    <message>
        <source>Filter:</source>
        <translation type="obsolete">ფილტრი:</translation>
    </message>
    <message>
        <source>Display only plugins containing this word in their metadata</source>
        <translation type="obsolete">მხოლოდ იმ ჩანართების ჩვენება რომელიც შეიცავს ამ სიტყვას მათ metadata -ში</translation>
    </message>
    <message>
        <source>Display only plugins from given repository</source>
        <translation type="obsolete">მხოლოდ იმ ჩანართების ჩვენება რომლებიც არის მოცემულ საცავში </translation>
    </message>
    <message>
        <source>all repositories</source>
        <translation>ყველა საცავი</translation>
    </message>
    <message>
        <source>Display only plugins with matching status</source>
        <translation type="obsolete">მხოლოდ დამთხვევის სტატუსით ჩანართების ჩვენება</translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="obsolete">სტატუსი</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">სახელი</translation>
    </message>
    <message>
        <source>Version</source>
        <translation type="obsolete">ვერსია</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="obsolete">აღწერა</translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="obsolete">ავტორი</translation>
    </message>
    <message>
        <source>Repository</source>
        <translation type="obsolete">საცავი</translation>
    </message>
    <message>
        <source>Install, reinstall or upgrade the selected plugin</source>
        <translation type="obsolete">არჩეული ჩანართის დაინსტალირება, ხელახლა დაინსტალირება ან განახლება</translation>
    </message>
    <message>
        <source>Install/upgrade plugin</source>
        <translation>ჩანართის დაინსტალირება/განახლება</translation>
    </message>
    <message>
        <source>Uninstall the selected plugin</source>
        <translation type="obsolete">არჩეული ჩანართის დეინსტალირება</translation>
    </message>
    <message>
        <source>Uninstall plugin</source>
        <translation type="obsolete">ჩანართის დეინსტალირება</translation>
    </message>
    <message>
        <source>Repositories</source>
        <translation type="obsolete">საცავები</translation>
    </message>
    <message>
        <source>List of plugin repositories</source>
        <translation type="obsolete">ჩანართების საცავების სია</translation>
    </message>
    <message>
        <source>URL</source>
        <translation type="obsolete">URL (მისამართი)</translation>
    </message>
    <message>
        <source>Allow the Installer to look for updates and news in enabled repositories on QGIS startup</source>
        <translation type="obsolete">Installer -სთვის ნების დართვა QGIS დაწყებისთანავე ხელმისაწვდომი საცავებისთვის განახლების და სიახლეების შემოწმების</translation>
    </message>
    <message>
        <source>Check for updates on startup</source>
        <translation type="obsolete">დაწყებისთანავე განახლებების შემოწმება</translation>
    </message>
    <message>
        <source>Add third party plugin repositories to the list</source>
        <translation type="obsolete">მესამე მხარის ჩანართის საცავების სიაში დამატება</translation>
    </message>
    <message>
        <source>Add 3rd party repositories</source>
        <translation type="obsolete">მესამე მხარის ჩანართის საცავები</translation>
    </message>
    <message>
        <source>Add a new plugin repository</source>
        <translation type="obsolete">ჩანართის ახალი საცავის დამატება</translation>
    </message>
    <message>
        <source>Add...</source>
        <translation type="obsolete">დამატება...</translation>
    </message>
    <message>
        <source>Edit the selected repository</source>
        <translation type="obsolete">არჩეული საცავის რედაქტირება</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation type="obsolete">რედაქტირება...</translation>
    </message>
    <message>
        <source>Remove the selected repository</source>
        <translation type="obsolete">მონიშნული საცავის ამოღება</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">წაშლა</translation>
    </message>
    <message>
        <source>The plugins will be installed to ~/.qgis/python/plugins</source>
        <translation type="obsolete">ჩანართი დაინსტალირდება აქ ~/.qgis/python/plugins</translation>
    </message>
    <message>
        <source>Close the Installer window</source>
        <translation type="obsolete">ინსტალატორის ფანჯრის დახურვა</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">დახურვა</translation>
    </message>
    <message>
        <source>Error reading repository:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This repository is connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unavailable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This repository is enabled, but unavailable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This repository is disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This repository is blocked due to incompatibility with your Quantum GIS version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>orphans</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>any status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>not installed</source>
        <comment>plural</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>installed</source>
        <comment>plural</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>upgradeable and news</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is not installed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is installed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is installed, but there is an updated version available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is installed, but I can&apos;t find it in any enabled repository</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is not installed and is seen for the first time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is installed and is newer than its version available in a repository</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is incompatible with your Quantum GIS version and probably won&apos;t work.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The required Python module is not installed.
For more information, please visit its homepage and Quantum GIS wiki.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin seems to be broken.
It has been installed but can&apos;t be loaded.
Here is the error message:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>not installed</source>
        <comment>singular</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>installed</source>
        <comment>singular</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>upgradeable</source>
        <comment>singular</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>new!</source>
        <comment>singular</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>invalid</source>
        <comment>singular</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Note that it&apos;s an uninstallable core plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>installed version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>available version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>That&apos;s the newest available version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There is no version available for download</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin is broken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin requires a newer version of Quantum GIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This plugin requires a missing module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>only locally available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Install plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reinstall plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Upgrade plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Downgrade plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Are you sure you want to downgrade the plugin to the latest available version? The installed one is newer!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin installation failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin has disappeared</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The plugin seems to have been installed but I don&apos;t know where. Probably the plugin package contained a wrong named directory.
Please search the list of installed plugins. I&apos;m nearly sure you&apos;ll find the plugin there, but I just can&apos;t determine which of them it is. It also means that I won&apos;t be able to determine if this plugin is installed and inform you about available updates. However the plugin may work. Please contact the plugin author and submit this issue.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin installed successfully</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python plugin installed.
Now you need to enable it in Plugin Manager.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin reinstalled successfully</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python plugin reinstalled.
You need to restart Quantum GIS in order to reload it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The plugin is designed for a newer version of Quantum GIS. The minimum required version is:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The plugin depends on some components missing on your system. You need to install the following Python module in order to enable it:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The plugin is broken. Python said:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin uninstall failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Are you sure you want to uninstall the following plugin?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning: this plugin isn&apos;t available in any accessible repository!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin uninstalled successfully</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python plugin uninstalled. Note that you may need to restart Quantum GIS in order to remove it completely.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to add another repository with the same URL!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Are you sure you want to remove the following repository?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You are about to add several plugin repositories that are neither authorized nor supported by the Quantum GIS team. Plugin authors generally make efforts to ensure that their work is useful and safe, however, we can assume no responsibility for them.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerDialogBase</name>
    <message>
        <source>QGIS Python Plugin Installer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation type="unfinished">ჩანართები</translation>
    </message>
    <message>
        <source>List of available and installed plugins</source>
        <translation type="unfinished">ხელმისაწვდომი და დაინსტალირებული ჩანართების სია</translation>
    </message>
    <message>
        <source>Filter:</source>
        <translation type="unfinished">ფილტრი:</translation>
    </message>
    <message>
        <source>Display only plugins containing this word in their metadata</source>
        <translation type="unfinished">მხოლოდ იმ ჩანართების ჩვენება რომელიც შეიცავს ამ სიტყვას მათ metadata -ში</translation>
    </message>
    <message>
        <source>Display only plugins from given repository</source>
        <translation type="unfinished">მხოლოდ იმ ჩანართების ჩვენება რომლებიც არის მოცემულ საცავში </translation>
    </message>
    <message>
        <source>all repositories</source>
        <translation type="unfinished">ყველა საცავი</translation>
    </message>
    <message>
        <source>Display only plugins with matching status</source>
        <translation type="unfinished">მხოლოდ დამთხვევის სტატუსით ჩანართების ჩვენება</translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="unfinished">სტატუსი</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">სახელი</translation>
    </message>
    <message>
        <source>Version</source>
        <translation type="unfinished">ვერსია</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="unfinished">ავტორი</translation>
    </message>
    <message>
        <source>Repository</source>
        <translation type="unfinished">საცავი</translation>
    </message>
    <message>
        <source>Install, reinstall or upgrade the selected plugin</source>
        <translation type="unfinished">არჩეული ჩანართის დაინსტალირება, ხელახლა დაინსტალირება ან განახლება</translation>
    </message>
    <message>
        <source>Install/upgrade plugin</source>
        <translation type="unfinished">ჩანართის დაინსტალირება/განახლება</translation>
    </message>
    <message>
        <source>Uninstall the selected plugin</source>
        <translation type="unfinished">არჩეული ჩანართის დეინსტალირება</translation>
    </message>
    <message>
        <source>Uninstall plugin</source>
        <translation type="unfinished">ჩანართის დეინსტალირება</translation>
    </message>
    <message>
        <source>Repositories</source>
        <translation type="unfinished">საცავები</translation>
    </message>
    <message>
        <source>List of plugin repositories</source>
        <translation type="unfinished">ჩანართების საცავების სია</translation>
    </message>
    <message>
        <source>URL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow the Installer to look for updates and news in enabled repositories on QGIS startup</source>
        <translation type="unfinished">Installer -სთვის ნების დართვა QGIS დაწყებისთანავე ხელმისაწვდომი საცავებისთვის განახლების და სიახლეების შემოწმების</translation>
    </message>
    <message>
        <source>Check for updates on startup</source>
        <translation type="unfinished">დაწყებისთანავე განახლებების შემოწმება</translation>
    </message>
    <message>
        <source>Add third party plugin repositories to the list</source>
        <translation type="unfinished">მესამე მხარის ჩანართის საცავების სიაში დამატება</translation>
    </message>
    <message>
        <source>Add 3rd party repositories</source>
        <translation type="unfinished">მესამე მხარის ჩანართის საცავები</translation>
    </message>
    <message>
        <source>Add a new plugin repository</source>
        <translation type="unfinished">ჩანართის ახალი საცავის დამატება</translation>
    </message>
    <message>
        <source>Add...</source>
        <translation type="unfinished">დამატება...</translation>
    </message>
    <message>
        <source>Edit the selected repository</source>
        <translation type="unfinished">არჩეული საცავის რედაქტირება</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation type="unfinished">რედაქტირება...</translation>
    </message>
    <message>
        <source>Remove the selected repository</source>
        <translation type="unfinished">მონიშნული საცავის ამოღება</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished">წაშლა</translation>
    </message>
    <message>
        <source>The plugins will be installed to ~/.qgis/python/plugins</source>
        <translation type="unfinished">ჩანართი დაინსტალირდება აქ ~/.qgis/python/plugins</translation>
    </message>
    <message>
        <source>Close the Installer window</source>
        <translation type="unfinished">ინსტალატორის ფანჯრის დახურვა</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">დახურვა</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="obsolete">თვისებები</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerFetchingDialog</name>
    <message>
        <source>Fetching repositories</source>
        <translation type="obsolete">საცავების ამორჩევა</translation>
    </message>
    <message>
        <source>Overall progress:</source>
        <translation type="obsolete">მთლიანი მახასიათებელის პროგრესი:</translation>
    </message>
    <message>
        <source>Abort fetching</source>
        <translation type="obsolete">ამორჩევის გაუქმება</translation>
    </message>
    <message>
        <source>Repository</source>
        <translation type="obsolete">საცავი</translation>
    </message>
    <message>
        <source>State</source>
        <translation type="obsolete">მდგომარეობა</translation>
    </message>
    <message>
        <source>Success</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resolving host name...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connecting...</source>
        <translation type="unfinished">დაკავშირება...</translation>
    </message>
    <message>
        <source>Host connected. Sending request...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Downloading data...</source>
        <translation type="unfinished">მონაცემების ჩამოტვირთვა...</translation>
    </message>
    <message>
        <source>Idle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Closing connection...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">შეცდომა</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerFetchingDialogBase</name>
    <message>
        <source>Fetching repositories</source>
        <translation type="unfinished">საცავების ამორჩევა</translation>
    </message>
    <message>
        <source>Overall progress:</source>
        <translation type="unfinished">მთლიანი მახასიათებელის პროგრესი:</translation>
    </message>
    <message>
        <source>Abort fetching</source>
        <translation type="unfinished">ამორჩევის გაუქმება</translation>
    </message>
    <message>
        <source>Repository</source>
        <translation type="unfinished">საცავი</translation>
    </message>
    <message>
        <source>State</source>
        <translation type="unfinished">მდგომარეობა</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerInstallingDialog</name>
    <message>
        <source>QGIS Python Plugin Installer</source>
        <translation type="obsolete">QGIS Python Plugin Installer</translation>
    </message>
    <message>
        <source>Installing plugin:</source>
        <translation type="obsolete">მიმდინარეობს ჩანართის ინსტალაცია:</translation>
    </message>
    <message>
        <source>Connecting...</source>
        <translation>დაკავშირება...</translation>
    </message>
    <message>
        <source>Installing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resolving host name...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Host connected. Sending request...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Downloading data...</source>
        <translation type="unfinished">მონაცემების ჩამოტვირთვა...</translation>
    </message>
    <message>
        <source>Idle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Closing connection...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">შეცდომა</translation>
    </message>
    <message>
        <source>Failed to unzip the plugin package. Probably it&apos;s broken or missing from the repository. You may also want to make sure that you have write permission to the plugin directory:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Aborted by user</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerInstallingDialogBase</name>
    <message>
        <source>QGIS Python Plugin Installer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Installing plugin:</source>
        <translation type="unfinished">მიმდინარეობს ჩანართის ინსტალაცია:</translation>
    </message>
    <message>
        <source>Connecting...</source>
        <translation type="unfinished">დაკავშირება...</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerPluginErrorDialog</name>
    <message>
        <source>Error loading plugin</source>
        <translation type="obsolete">შეცდომა ჩანართის ჩატვირთვისას</translation>
    </message>
    <message>
        <source>The plugin seems to be invalid or have unfulfilled dependencies. It has been installed, but can&apos;t be loaded. If you really need this plugin, you can contact its author or &lt;a href=&quot;http://lists.osgeo.org/mailman/listinfo/qgis-user&quot;&gt;QGIS users group&lt;/a&gt; and try to solve the problem. If not, you can just uninstall it. Here is the error message below:</source>
        <translation type="obsolete">ჩანართი ჩანს არასწორი ან აქვს არასრული დამოკიდებულებები. ის დაინსტალირდა, მაგრამ შეუძლებელია მის ჩატვირთვა. თუ მართლაც გჭირდებათ ეს ჩანართი, შეგიძლიათ დაუკავშირდეთ მის ავტორს მისამართზე  &lt;a href=&quot;http://lists.osgeo.org/mailman/listinfo/qgis-user&quot;&gt; ან QGIS მომხმარებლების ჯგუფს &lt;/a&gt; და სცადოთ პრობლემის გადაწყვეტა. თუ არა, თქვენ შეგიძლიათ მისი დეინსტალაცია. ქვემოთ მოყვანილია შეცდომის შეტყობინება:</translation>
    </message>
    <message>
        <source>Do you want to uninstall this plugin now? If you&apos;re unsure, probably you would like to do this.</source>
        <translation type="obsolete">გსურთ ახლა ამ ჩანართის დეინსტალაცია? თუ არ ხართ დარწმუნებული, შესაძლოა თქვენ მოისურვოთ ამის გაკეთება.</translation>
    </message>
    <message>
        <source>no error message received</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerPluginErrorDialogBase</name>
    <message>
        <source>Error loading plugin</source>
        <translation type="unfinished">შეცდომა ჩანართის ჩატვირთვისას</translation>
    </message>
    <message>
        <source>The plugin seems to be invalid or have unfulfilled dependencies. It has been installed, but can&apos;t be loaded. If you really need this plugin, you can contact its author or &lt;a href=&quot;http://lists.osgeo.org/mailman/listinfo/qgis-user&quot;&gt;QGIS users group&lt;/a&gt; and try to solve the problem. If not, you can just uninstall it. Here is the error message below:</source>
        <translation type="unfinished">ჩანართი ჩანს არასწორი ან აქვს არასრული დამოკიდებულებები. ის დაინსტალირდა, მაგრამ შეუძლებელია მის ჩატვირთვა. თუ მართლაც გჭირდებათ ეს ჩანართი, შეგიძლიათ დაუკავშირდეთ მის ავტორს მისამართზე  &lt;a href=&quot;http://lists.osgeo.org/mailman/listinfo/qgis-user&quot;&gt; ან QGIS მომხმარებლების ჯგუფს &lt;/a&gt; და სცადოთ პრობლემის გადაწყვეტა. თუ არა, თქვენ შეგიძლიათ მისი დეინსტალაცია. ქვემოთ მოყვანილია შეცდომის შეტყობინება:</translation>
    </message>
    <message>
        <source>Do you want to uninstall this plugin now? If you&apos;re unsure, probably you would like to do this.</source>
        <translation type="unfinished">გსურთ ახლა ამ ჩანართის დეინსტალაცია? თუ არ ხართ დარწმუნებული, შესაძლოა თქვენ მოისურვოთ ამის გაკეთება.</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerRepositoryDetailsDialog</name>
    <message>
        <source>Repository details</source>
        <translation type="obsolete">საცავის დეტალები</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">სახელი:</translation>
    </message>
    <message>
        <source>Enter a name for the repository</source>
        <translation type="obsolete">შეიყვანეთ სახელი საცავისთვის</translation>
    </message>
    <message>
        <source>URL:</source>
        <translation type="obsolete">URL:</translation>
    </message>
    <message>
        <source>Enter the repository URL, beginning with &quot;http://&quot;</source>
        <translation type="obsolete">შეიყვანეთ საცავის URL, დაწყებული &quot;http://&quot; -ით</translation>
    </message>
    <message>
        <source>Enable or disable the repository (disabled repositories will be omitted)</source>
        <translation type="obsolete">საცავის ჩართვა ან გამორთვა (გამორთული საცავები იქნებიან გამოტოვებულნი)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">ჩართული</translation>
    </message>
    <message>
        <source>[place for a warning message]</source>
        <translation type="obsolete">[ადგილი გამაბრთხილებელი შეტყობინებისთვის]</translation>
    </message>
</context>
<context>
    <name>QgsPluginInstallerRepositoryDetailsDialogBase</name>
    <message>
        <source>Repository details</source>
        <translation type="unfinished">საცავის დეტალები</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">სახელი:</translation>
    </message>
    <message>
        <source>Enter a name for the repository</source>
        <translation type="unfinished">შეიყვანეთ სახელი საცავისთვის</translation>
    </message>
    <message>
        <source>URL:</source>
        <translation type="unfinished">URL:</translation>
    </message>
    <message>
        <source>Enter the repository URL, beginning with &quot;http://&quot;</source>
        <translation type="unfinished">შეიყვანეთ საცავის URL, დაწყებული &quot;http://&quot; -ით</translation>
    </message>
    <message>
        <source>Enable or disable the repository (disabled repositories will be omitted)</source>
        <translation type="unfinished">საცავის ჩართვა ან გამორთვა (გამორთული საცავები იქნებიან გამოტოვებულნი)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished">ჩართული</translation>
    </message>
</context>
<context>
    <name>QgsPluginManager</name>
    <message>
        <source>&amp;Select All</source>
        <translation>&amp;ყველას მონიშვნა</translation>
    </message>
    <message>
        <source>&amp;Clear All</source>
        <translation>&amp;ყველას გასუფთავება</translation>
    </message>
    <message>
        <source>No Plugins</source>
        <translation>ჩანართები არ არის</translation>
    </message>
    <message>
        <source>No QGIS plugins found in </source>
        <translation>QGIS ჩანართები ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>[ incompatible ]</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginManagerBase</name>
    <message>
        <source>QGIS Plugin Manager</source>
        <translation>QGIS-ის ჩანართების მენეჯერი</translation>
    </message>
    <message>
        <source>To enable / disable a plugin, click its checkbox or description</source>
        <translation>ჩანართის ჩასართავად / გამოსართავად დააწკაპუნეთ მის თოლიაზე ან აღწერილობაზე</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;ფილტრი</translation>
    </message>
    <message>
        <source>Plugin Directory:</source>
        <translation>ჩანართის დირექტორია:</translation>
    </message>
    <message>
        <source>Directory</source>
        <translation>დირექტორია</translation>
    </message>
</context>
<context>
    <name>QgsPointDialog</name>
    <message>
        <source>Linear</source>
        <translation>წრფივი</translation>
    </message>
    <message>
        <source>Choose a name for the world file</source>
        <translation>აირჩიეთ სახელი world ფაილისთვის</translation>
    </message>
    <message>
        <source>Helmert</source>
        <translation>Helmert</translation>
    </message>
    <message>
        <source>-modified</source>
        <comment>Georeferencer:QgsPointDialog.cpp - used to modify a user given file name</comment>
        <translation>-შეცვლილი</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>გაბრთხილება</translation>
    </message>
    <message>
        <source>&lt;p&gt;A Helmert transform requires modifications in the raster layer.&lt;/p&gt;&lt;p&gt;The modified raster will be saved in a new file and a world file will be generated for this new file instead.&lt;/p&gt;&lt;p&gt;Are you sure that this is what you want?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Helmert გარდაქმნა მოითხოვს ცვლილებებს რასტრულ შრეში.&lt;/p&gt;&lt;p&gt;შეცვლილი რასტრი იქნება შენახული ახალ ფაილში და world ფაილი დაგენერირდება  ამ ახლის მაგივრად.&lt;/p&gt;&lt;p&gt;დარწმუნებული ხართ რომ ეს გსურთ?&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Currently all modified files will be written in TIFF format.</source>
        <translation>ამჟამად ყველა შეცვლილი ფაილი იქნება ჩაწერილი TIFF ფორმატში.</translation>
    </message>
    <message>
        <source>Affine</source>
        <translation>Affine</translation>
    </message>
    <message>
        <source>Not implemented!</source>
        <translation>არაა დანერგილი!</translation>
    </message>
    <message>
        <source>&lt;p&gt;An affine transform requires changing the original raster file. This is not yet supported.&lt;/p&gt;</source>
        <translation>&lt;p&gt;affine გარდაქმნა ითხოვს საწყისი რასტრული ფაილის შეცვლას. ეს არი არის ჯერ–ჯერობით შესაძლებელი.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;The </source>
        <translation>&lt;p&gt; </translation>
    </message>
    <message>
        <source> transform is not yet supported.&lt;/p&gt;</source>
        <translation>გარდაქმნა არ არის ჯერ მხარდაჭერილი.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>შეცდომა</translation>
    </message>
    <message>
        <source>Could not write to </source>
        <translation>შეუძლებელია ჩაწერა</translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation>გადიდება</translation>
    </message>
    <message>
        <source>z</source>
        <translation>z</translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>დაპატარავება</translation>
    </message>
    <message>
        <source>Z</source>
        <translation>Z</translation>
    </message>
    <message>
        <source>Zoom To Layer</source>
        <translation>შრის გადიდება</translation>
    </message>
    <message>
        <source>Zoom to Layer</source>
        <translation>შრის გადიდება</translation>
    </message>
    <message>
        <source>Pan Map</source>
        <translation>რუკის გადაადგილება</translation>
    </message>
    <message>
        <source>Pan the map</source>
        <translation>რუკის გადაადგილება</translation>
    </message>
    <message>
        <source>Add Point</source>
        <translation>წერტილის დამატება</translation>
    </message>
    <message>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <source>Capture Points</source>
        <translation>წერტილების აღება</translation>
    </message>
    <message>
        <source>Delete Point</source>
        <translation>წერტილის წაშლა</translation>
    </message>
    <message>
        <source>Delete Selected</source>
        <translation>მონიშნულის წაშლა</translation>
    </message>
</context>
<context>
    <name>QgsPointDialogBase</name>
    <message>
        <source>Reference points</source>
        <translation>შესაბამისი წერტილები</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Modified raster:</source>
        <translation>შეცვლილი რასტრი:</translation>
    </message>
    <message>
        <source>World file:</source>
        <translation>World ფაილი:</translation>
    </message>
    <message>
        <source>Transform type:</source>
        <translation>გარდაქმნის ტიპი:</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>შექმნა</translation>
    </message>
    <message>
        <source>Add points</source>
        <translation>წერტილების დამატება</translation>
    </message>
    <message>
        <source>Delete points</source>
        <translation>წერტილების წაშლა</translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation>გადიდება</translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation>დაპატარავება</translation>
    </message>
    <message>
        <source>Zoom to the raster extents</source>
        <translation>რასტრული განშლის გადიდება</translation>
    </message>
    <message>
        <source>Pan</source>
        <translation>გადაადგილება</translation>
    </message>
    <message>
        <source>Create and load layer</source>
        <translation>შრის შექმნა და ჩატვირთვა</translation>
    </message>
</context>
<context>
    <name>QgsPostgresProvider</name>
    <message>
        <source>Unable to access relation</source>
        <translation>შეუძლებელია კავშირის წვდომა</translation>
    </message>
    <message>
        <source>Unable to access the </source>
        <translation>შეუძლებელია წვდომა</translation>
    </message>
    <message>
        <source> relation.
The error message from the database was:
</source>
        <translation>კავშირი. 
შეცდომის შეტყობინება მონაცემთა ბაზისგან იყო:
</translation>
    </message>
    <message>
        <source>Unable to determine table access privileges for the </source>
        <translation>შეუძლებელია ცხრილის წვდომის პრივილეგიების განსაზღვრა</translation>
    </message>
    <message>
        <source>No suitable key column in table</source>
        <translation>ცხრილში არათავსებადი გასაღების სვეტი</translation>
    </message>
    <message>
        <source>The table has no column suitable for use as a key.

Qgis requires that the table either has a column of type
int4 with a unique constraint on it (which includes the
primary key) or has a PostgreSQL oid column.
</source>
        <translation>ცხრილს არ გააჩნია გასაღების გამოსაყენებლად თავსებადი სვეტი.

Qgis მოითხოვს რომ ცხრილში არსებობდეს int4 ტიპის სვეტი მასზე უნიკალური შეზღუდვით (რომელიც შეიცავს ძირითად გასაღებს) ან აქვს PostgreSQL oid სვეტი.
</translation>
    </message>
    <message>
        <source>The unique index on column</source>
        <translation>სვეტის უნიკალური ინდექსი</translation>
    </message>
    <message>
        <source>is unsuitable because Qgis does not currently support non-int4 type columns as a key into the table.
</source>
        <translation>არათავსებადია, იმიტომ რომ Qgis ჯერ-ჯერობით არ აქვს non-int4 ტიპის სვეტების მხარდაჭერა როგორც ცხრილში გასაღების.
</translation>
    </message>
    <message>
        <source>and </source>
        <translation>და</translation>
    </message>
    <message>
        <source>The unique index based on columns </source>
        <translation>სვეტებზე დაფუძნებული უნიკალური ინდექსი</translation>
    </message>
    <message>
        <source> is unsuitable because Qgis does not currently support multiple columns as a key into the table.
</source>
        <translation>არათავსებადია, იმიტომ რომ Qgis ჯერ-ჯერობით არ აქვს მრავალი სვეტის მხარდაჭერა როგორც ცხრილში გასაღების.</translation>
    </message>
    <message>
        <source>Unable to find a key column</source>
        <translation>შეუძლებელია გასაღების სვეტის პოვნა</translation>
    </message>
    <message>
        <source> derives from </source>
        <translation>იწარმოება</translation>
    </message>
    <message>
        <source>and is suitable.</source>
        <translation>და არის თავსებადი.</translation>
    </message>
    <message>
        <source>and is not suitable </source>
        <translation>და არ არის თავსებადი</translation>
    </message>
    <message>
        <source>type is </source>
        <translation>ტიპი არის</translation>
    </message>
    <message>
        <source> and has a suitable constraint)</source>
        <translation>და აქვს თავსებადი შეზღუდვა)</translation>
    </message>
    <message>
        <source> and does not have a suitable constraint)</source>
        <translation>და არ აქვს თავსებადი შეზღუდვა)</translation>
    </message>
    <message>
        <source>Note: </source>
        <translation>შენიშვნა:</translation>
    </message>
    <message>
        <source>initially appeared suitable but does not contain unique data, so is not suitable.
</source>
        <translation>თავდაპირველად ჩანდა თავსებადი მაგრამ არ შეიცავდა უნიკალურ მონაცემებს, ასე რომ ის არ არის თავსებადი.
</translation>
    </message>
    <message>
        <source>The view you selected has the following columns, none of which satisfy the above conditions:</source>
        <translation>არჩეულ ხედს გააჩნია შემდეგი სვეტები, არცერთი მათგანი არ აკმაყოფილებს ზემოთ არსებულ პირობებს:</translation>
    </message>
    <message>
        <source>Qgis requires that the view has a column that can be used as a unique key. Such a column should be derived from a table column of type int4 and be a primary key, have a unique constraint on it, or be a PostgreSQL oid column. To improve performance the column should also be indexed.
</source>
        <translation>Qgis მოითხოვს რომ ხედს ჰქონდეს ისეთი სვეტი რომელიც იქნება გამოყენებული როგორც გასაღები. ასეთი სვეტი უნდა იყოს ნაწარმოები ცხრილის int4 ტიპის სვეტისგან რათა ის იყოს ძირითადი გასაღები, გქონდეს მასზე უნიკალური შეზღუდვა, ან იყოს PostgreSQL oid სვეტი. შესაბამისი სვეტის გასაუმჯობესებლად ის დამატებით უნდა იყოს ინდექსირებული.
</translation>
    </message>
    <message>
        <source>The view </source>
        <translation>ხედი</translation>
    </message>
    <message>
        <source>has no column suitable for use as a unique key.
</source>
        <translation>არ აქვს შესაბამისი სვეტი გამოსაყენებლად როგორც უნიკალური გასაღები.
 </translation>
    </message>
    <message>
        <source>No suitable key column in view</source>
        <translation>ხედში არათავსებადი გასაღების სვეტი</translation>
    </message>
    <message>
        <source>Error while adding features</source>
        <translation>შეცდომა ობიექტების დამატებისას</translation>
    </message>
    <message>
        <source>Error while deleting features</source>
        <translation>შეცდომა ობიექტების წაშლისას</translation>
    </message>
    <message>
        <source>Error while adding attributes</source>
        <translation>შეცდომა ატრიბუტების დამატებისას</translation>
    </message>
    <message>
        <source>Error while deleting attributes</source>
        <translation>შეცდომა ატრიბუტების წაშლისას</translation>
    </message>
    <message>
        <source>Error while changing attributes</source>
        <translation>შეცდომა ატრიბუტების ცვლილებისას</translation>
    </message>
    <message>
        <source>Error while changing geometry values</source>
        <translation>შეცდომა გეომეტრიული მნიშვნელობების ცვლილებისას</translation>
    </message>
    <message>
        <source>Unknown geometry type</source>
        <translation>უცნობი გეომეტრიული ტიპი</translation>
    </message>
    <message>
        <source>Column </source>
        <translation>სვეტი</translation>
    </message>
    <message>
        <source> in </source>
        <translation>ში</translation>
    </message>
    <message>
        <source> has a geometry type of </source>
        <translation>აქვს გეომეტრიული ტიპი</translation>
    </message>
    <message>
        <source>, which Qgis does not currently support.</source>
        <translation>, რომელიც არ არის ამჟამად მხარდაჭერილი Qgis მიერ.</translation>
    </message>
    <message>
        <source>Qgis was unable to determine the type and srid of column </source>
        <translation>Qgis იყო უძლური განესაზღვრა ტიპი და სვეტის srid</translation>
    </message>
    <message>
        <source>. The database communication log was:
</source>
        <translation>. მონაცემთა ბაზასთან კომუნიკაციის ჩანაწერი იყო:
</translation>
    </message>
    <message>
        <source>Unable to get feature type and srid</source>
        <translation>შეუძლებელია ობიექტის ტიპის და srid მიღება</translation>
    </message>
    <message>
        <source>unexpected PostgreSQL error</source>
        <translation>მოულოდნელი PostgreSQL შეცდომა</translation>
    </message>
</context>
<context>
    <name>QgsPostgresProvider::Conn</name>
    <message>
        <source>No GEOS Support!</source>
        <translation>GEOS -ის მხარდაჭერა არ არ არსებობს!</translation>
    </message>
    <message>
        <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
        <translation>თქვენს PostGIS ინსტალაციას არ აქვს GEOS მხარდაჭერა.
ობიექტის არჩევა და იდენტიფიკაცია არ იმუშავებს შესაბამისად.
გთხოვთ დააინსტალიროთ PostGIS GEOS მხარდაჭერასთან ერთად (http://geos.refractions.net)</translation>
    </message>
</context>
<context>
    <name>QgsProjectPropertiesBase</name>
    <message>
        <source>Project Properties</source>
        <translation>პროექტის თვისებები</translation>
    </message>
    <message>
        <source>General</source>
        <translation>ზოგადი</translation>
    </message>
    <message>
        <source>Title and colors</source>
        <translation>სათაური და ფერები</translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>პროექტის სათაური</translation>
    </message>
    <message>
        <source>Descriptive project name</source>
        <translation>პროექტის გამომხატავი სახელი</translation>
    </message>
    <message>
        <source>Default project title</source>
        <translation>პროექტის საწყისი სახელი</translation>
    </message>
    <message>
        <source>Selection color</source>
        <translation>არჩევის ფერი</translation>
    </message>
    <message>
        <source>Background color</source>
        <translation>ფონის ფერი</translation>
    </message>
    <message>
        <source>Map units</source>
        <translation>რუკის ერთეულები</translation>
    </message>
    <message>
        <source>Meters</source>
        <translation>მეტრი</translation>
    </message>
    <message>
        <source>Feet</source>
        <translation>ფუტი</translation>
    </message>
    <message>
        <source>Decimal degrees</source>
        <translation>მეათედი გრადუსები</translation>
    </message>
    <message>
        <source>Precision</source>
        <translation>სიზუსტე</translation>
    </message>
    <message>
        <source>Automatically sets the number of decimal places in the mouse position display</source>
        <translation>აყენებს ათეულებისთვის საჭირო ადგილების რაოდენობას მაუსის ადგილმდებარეობის დისპლეიში</translation>
    </message>
    <message>
        <source>The number of decimal places that are used when displaying the mouse position is automatically set to be enough so that moving the mouse by one pixel gives a change in the position display</source>
        <translation>ათეულების ადგილების რაოდენობა რომელიც გამოიყენება მაუსის პოზიციის ჩვენებისას ავტომატურად ყენდება საკმარისად, ამიტომ მაუსის გადატანა ერთი პიქსელით იწვევს ცვლილებებს დისპლეის ადგილმდებარეობაზე</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>ავტომატური</translation>
    </message>
    <message>
        <source>Sets the number of decimal places to use for the mouse position display</source>
        <translation>აყენებს ათეულებისთვის საჭირო ადგილების რაოდენობას მაუსის ადგილმდებარეობის დისპლეიში</translation>
    </message>
    <message>
        <source>Manual</source>
        <translation>სახელმძღვანელო</translation>
    </message>
    <message>
        <source>The number of decimal places for the manual option</source>
        <translation>ათეულებისთვის საჭირო ადგილების რაოდენობა ხელით დასაყენებელი თვისებებისთვის</translation>
    </message>
    <message>
        <source>decimal places</source>
        <translation>მეათედის ადგილები</translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation>აციფვრა</translation>
    </message>
    <message>
        <source>Enable topological editing</source>
        <translation>ტოპოლოგიური რედაქტირების ჩართვა</translation>
    </message>
    <message>
        <source>Avoid intersections of new polygons</source>
        <translation>ახალი პოლიგონების გადაკვეთის თავიდან აცილება</translation>
    </message>
    <message>
        <source>Snapping options...</source>
        <translation>მიბმის თვისებები...</translation>
    </message>
    <message>
        <source>Coordinate Reference System (CRS)</source>
        <translation>Coordinate Reference System (CRS)</translation>
    </message>
    <message>
        <source>Enable &apos;on the fly&apos; CRS transformation</source>
        <translation>პირდაპირი ”on the fly” CRS გარდაქმნის ჩართვა</translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelector</name>
    <message>
        <source>User Defined Coordinate Systems</source>
        <translation>მომხმარებლის მიერ განსაზღვრული საკოორდინატო სისტემა</translation>
    </message>
    <message>
        <source>Geographic Coordinate Systems</source>
        <translation>გეოგრაფიული საკოორდინატო სისტემა</translation>
    </message>
    <message>
        <source>Projected Coordinate Systems</source>
        <translation>პროექტირებული საკოორდინატო სისტემა</translation>
    </message>
    <message>
        <source>Resource Location Error</source>
        <translation>რესურსების ადგილმდებარეობის შეცდომა</translation>
    </message>
    <message>
        <source>Error reading database file from: 
 %1
Because of this the projection selector will not work...</source>
        <translation>შეცდომა მონაცემთა ბაზის წაკითხვისას:
%1
ამის გამო პროექციის ამომრჩევი არ იმუშავებს...</translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelectorBase</name>
    <message>
        <source>Coordinate Reference System Selector</source>
        <translation>რეფერენსული საკოორდინატო  სისტემის ამრჩევი</translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation>რეფერენსული საკოორდინატო  სისტემა</translation>
    </message>
    <message>
        <source>EPSG</source>
        <translation>EPSG</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>ძებნა</translation>
    </message>
    <message>
        <source>EPSG ID</source>
        <translation>EPSG ID</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Find</source>
        <translation>პოვნა</translation>
    </message>
</context>
<context>
    <name>QgsPythonDialog</name>
    <message>
        <source>Python console</source>
        <translation>Python-ის კონსოლი</translation>
    </message>
    <message>
        <source>To access Quantum GIS environment from this python console use object from global scope which is an instance of QgisInterface class.&lt;br&gt;Usage e.g.: iface.zoomFull()</source>
        <translation>იმისათვის, რომ მიმართოთ Quantum GIS გარემოს python კონსოლიდან, გამოიყენეთ ობიექტი გლობალური ჩარჩოებიდან რომელიც არის QgisInterface კლასის ეგზემპლარი. .&lt;br&gt;გამოყენება: iface.zoomFull()</translation>
    </message>
    <message>
        <source>&gt;&gt;&gt;</source>
        <translation>&gt;&gt;&gt;</translation>
    </message>
</context>
<context>
    <name>QgsQuickPrint</name>
    <message>
        <source> km</source>
        <translation>კმ</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>მმ</translation>
    </message>
    <message>
        <source> cm</source>
        <translation>სმ</translation>
    </message>
    <message>
        <source> m</source>
        <translation>მ</translation>
    </message>
    <message>
        <source> miles</source>
        <translation>მილი</translation>
    </message>
    <message>
        <source> mile</source>
        <translation>მილი</translation>
    </message>
    <message>
        <source> inches</source>
        <translation>დიუმი</translation>
    </message>
    <message>
        <source> foot</source>
        <translation>ფუტი</translation>
    </message>
    <message>
        <source> feet</source>
        <translation>ფუტი</translation>
    </message>
    <message>
        <source> degree</source>
        <translation>გრადუსი</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation>გრადუსი</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation>უცნობი</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayer</name>
    <message>
        <source>and all other files</source>
        <translation type="obsolete">და სხვა ყველა ფაილი</translation>
    </message>
    <message>
        <source>Not Set</source>
        <translation>არ არის დაყენებული</translation>
    </message>
    <message>
        <source>Driver:</source>
        <translation>წამყვანი:</translation>
    </message>
    <message>
        <source>Dataset Description</source>
        <translation>Dataset აღწერილობა</translation>
    </message>
    <message>
        <source>Band %1</source>
        <translation>სპექტრი %1</translation>
    </message>
    <message>
        <source>Dimensions:</source>
        <translation>განზომილებები:</translation>
    </message>
    <message>
        <source>X: </source>
        <translation type="obsolete">X: </translation>
    </message>
    <message>
        <source> Y: </source>
        <translation type="obsolete"> Y: </translation>
    </message>
    <message>
        <source> Bands: </source>
        <translation type="obsolete">სპექტრები: </translation>
    </message>
    <message>
        <source>No Data Value</source>
        <translation>არ არის მონაცემთა მნიშვნელობა</translation>
    </message>
    <message>
        <source>NoDataValue not set</source>
        <translation>NoDataValue არ არის დაყენებული</translation>
    </message>
    <message>
        <source>Data Type:</source>
        <translation>მონაცემის ტიპი:</translation>
    </message>
    <message>
        <source>GDT_Byte - Eight bit unsigned integer</source>
        <translation>GDT_Byte - რვა ბიტიანი უნიშნო მთელი</translation>
    </message>
    <message>
        <source>GDT_UInt16 - Sixteen bit unsigned integer </source>
        <translation>GDT_UInt16 - თექვსმეტ ბიტიანი უნიშნო მთელი</translation>
    </message>
    <message>
        <source>GDT_Int16 - Sixteen bit signed integer </source>
        <translation>GDT_Int16 - თექვსმეტ ბიტიანი ნიშნიანი მთელი</translation>
    </message>
    <message>
        <source>GDT_UInt32 - Thirty two bit unsigned integer </source>
        <translation>GDT_UInt32 - ოცდათორმეტ ბიტიანი უნიშნო მთელი</translation>
    </message>
    <message>
        <source>GDT_Int32 - Thirty two bit signed integer </source>
        <translation>GDT_Int32 - ოცდათორმეტ ბიტიანი ნიშნიანი მთელი</translation>
    </message>
    <message>
        <source>GDT_Float32 - Thirty two bit floating point </source>
        <translation>GDT_Float32 - ოცდათორმეტ ბიტიანი მოძრავმძიმიანი წერტილი</translation>
    </message>
    <message>
        <source>GDT_Float64 - Sixty four bit floating point </source>
        <translation>GDT_Float64 - სამოცდაოთხ ბიტიანი მოძრავმძიმიანი წერტილი</translation>
    </message>
    <message>
        <source>GDT_CInt16 - Complex Int16 </source>
        <translation>GDT_CInt16 - Complex Int16 </translation>
    </message>
    <message>
        <source>GDT_CInt32 - Complex Int32 </source>
        <translation>GDT_CInt32 - Complex Int32 </translation>
    </message>
    <message>
        <source>GDT_CFloat32 - Complex Float32 </source>
        <translation>GDT_CFloat32 - Complex Float32 </translation>
    </message>
    <message>
        <source>GDT_CFloat64 - Complex Float64 </source>
        <translation>GDT_CFloat64 - Complex Float64 </translation>
    </message>
    <message>
        <source>Could not determine raster data type.</source>
        <translation>შეუძლებელია რასტრული ტიპის მონაცემის განსაზღვრა.</translation>
    </message>
    <message>
        <source>Pyramid overviews:</source>
        <translation>პირამიდული დათვალიერება:</translation>
    </message>
    <message>
        <source>Layer Spatial Reference System: </source>
        <translation>შრის სივრცული რეფერენსული სისტემა:</translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation>საწყისი:</translation>
    </message>
    <message>
        <source>Pixel Size:</source>
        <translation>პიქსელის ზომა:</translation>
    </message>
    <message>
        <source>Band</source>
        <translation>სპექტრი</translation>
    </message>
    <message>
        <source>Band No</source>
        <translation>სპექტრის ნომერი</translation>
    </message>
    <message>
        <source>No Stats</source>
        <translation>არ არის სტატისტიკა</translation>
    </message>
    <message>
        <source>No stats collected yet</source>
        <translation>სტატისტიკა ჯერ არ შეგროვებულა</translation>
    </message>
    <message>
        <source>Min Val</source>
        <translation>Min Val</translation>
    </message>
    <message>
        <source>Max Val</source>
        <translation>მაქს მნიშვ</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>დიაპაზონი</translation>
    </message>
    <message>
        <source>Mean</source>
        <translation>საშუალო</translation>
    </message>
    <message>
        <source>Sum of squares</source>
        <translation>კვადრატების ჯამი</translation>
    </message>
    <message>
        <source>Standard Deviation</source>
        <translation>სტანდარტული გადახრა</translation>
    </message>
    <message>
        <source>Sum of all cells</source>
        <translation>ყველა უჯრის ჯამი</translation>
    </message>
    <message>
        <source>Cell Count</source>
        <translation>უჯრების რაოდენობა</translation>
    </message>
    <message>
        <source>Average Magphase</source>
        <translation>Magphase საშუალო</translation>
    </message>
    <message>
        <source>Average</source>
        <translation>საშუალო</translation>
    </message>
    <message>
        <source>out of extent</source>
        <translation>განშლის გარეთ</translation>
    </message>
    <message>
        <source>null (no data)</source>
        <translation>null (მონაცემი არ არის)</translation>
    </message>
    <message>
        <source>%1 and all other files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Band%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: %1 Y: %2 Bands: %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Project Spatial Reference System: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerProperties</name>
    <message>
        <source>Not Set</source>
        <translation>არ არის დაყენებული</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>რუხის გრადაცია</translation>
    </message>
    <message>
        <source>Pseudocolor</source>
        <translation>ფსევდო ფერი</translation>
    </message>
    <message>
        <source>Freak Out</source>
        <translation>გამოვარდნილი (Freak Out)</translation>
    </message>
    <message>
        <source>Colormap</source>
        <translation>ფერადი რუკა</translation>
    </message>
    <message>
        <source>No Stretch</source>
        <translation>არ არის გაწელილი</translation>
    </message>
    <message>
        <source>Stretch To MinMax</source>
        <translation>MinMax–მდე გაწელვა</translation>
    </message>
    <message>
        <source>Stretch And Clip To MinMax</source>
        <translation>MinMax –ზე მიკვრა და გაწელვა</translation>
    </message>
    <message>
        <source>Clip To MinMax</source>
        <translation>MinMax–ზე მიკვრა</translation>
    </message>
    <message>
        <source>Discrete</source>
        <translation>დისკრეტული</translation>
    </message>
    <message>
        <source>Linear</source>
        <translation>წრფივი</translation>
    </message>
    <message>
        <source>Exact</source>
        <translation>ზუსტი</translation>
    </message>
    <message>
        <source>Equal interval</source>
        <translation>თანაბარი ინტერვალი</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>აღწერა</translation>
    </message>
    <message>
        <source>Large resolution raster layers can slow navigation in QGIS.</source>
        <translation>QGIS–ში შესაძლებელია ფართე რეზოლუციის მქონე რასტრული შრეების ნელი ნავიგაცია.</translation>
    </message>
    <message>
        <source>By creating lower resolution copies of the data (pyramids) performance can be considerably improved as QGIS selects the most suitable resolution to use depending on the level of zoom.</source>
        <translation>მონაცემთა (პირამიდების) უფრო დაბალი რეზოლუციის მქონე ასლების შექმნისას შესრულება შეიძება მნიშვნელოვნად გაუმჯობესდეს როგორც QGIS ირჩევს ყველაზე ხელსაყრელ რეზოლუციას გადიდების ხარისხის დამოკიდებულების გამოსაყენებლად.</translation>
    </message>
    <message>
        <source>You must have write access in the directory where the original data is stored to build pyramids.</source>
        <translation>პირამიდების ასაგებად, თქვენ უნდა გქონდეთ წვდომა იმ დირექტორიაზე, სადაც საწყისი მონაცემები ინახება.</translation>
    </message>
    <message>
        <source>Please note that building internal pyramids may alter the original data file and once created they cannot be removed!</source>
        <translation>გთხოვთ შენიშნოთ რომ შიდა პირამიდების აგებამ შესაძლოა შეცვალოს საწყისი მონაცემთა ფაილი და შექმნის შემდეგ მათი წაშლა შეუძლებელი იქნება!</translation>
    </message>
    <message>
        <source>Please note that building internal pyramids could corrupt your image - always make a backup of your data first!</source>
        <translation>გთხოვთ შენიშნოთ რომ შიდა პირამიდების აგებამ შესაძლოა დააზიანოს თქვენი ნახატი – ყოველთვის გააკეთეთ თქვენი პირველი მონაცემის ასლი!</translation>
    </message>
    <message>
        <source>Red</source>
        <translation>წითელი</translation>
    </message>
    <message>
        <source>Green</source>
        <translation>მწვანე</translation>
    </message>
    <message>
        <source>Blue</source>
        <translation>ლურჯი</translation>
    </message>
    <message>
        <source>Percent Transparent</source>
        <translation>გამჭვირვალობის პროცენტი</translation>
    </message>
    <message>
        <source>Gray</source>
        <translation>ნაცრისფერი</translation>
    </message>
    <message>
        <source>Indexed Value</source>
        <translation>ინდექსირებული მნიშვნელობა</translation>
    </message>
    <message>
        <source>User Defined</source>
        <translation>მომხმარებლის მიერ განსაზღვრული</translation>
    </message>
    <message>
        <source>Default</source>
        <translation>საწყისი</translation>
    </message>
    <message>
        <source>Columns: </source>
        <translation>სვეტები:</translation>
    </message>
    <message>
        <source>Rows: </source>
        <translation>სტრიქონები:</translation>
    </message>
    <message>
        <source>No-Data Value: </source>
        <translation>არა მონაცემის მნიშვნელობა:</translation>
    </message>
    <message>
        <source>No-Data Value: Not Set</source>
        <translation>არა მონაცემის მნიშვნელობა: არ არის დაყენებული</translation>
    </message>
    <message>
        <source>n/a</source>
        <translation>n/a</translation>
    </message>
    <message>
        <source>Write access denied</source>
        <translation>ჩაწერის უფლება უარყოფილია</translation>
    </message>
    <message>
        <source>Write access denied. Adjust the file permissions and try again.

</source>
        <translation>ჩაწერის უფლება უარყოფილია. შეცვალეთ ფაილის უფლებები და სცადეთ თავიდან.

</translation>
    </message>
    <message>
        <source>Building pyramids failed.</source>
        <translation>პირამიდების აგება ვერ განხორციელდა.</translation>
    </message>
    <message>
        <source>The file was not writeable. Some formats do not support pyramid overviews. Consult the GDAL documentation if in doubt.</source>
        <translation>ფაილის არ არის ჩაწერის უფლებით. ზოგიერთ ფორმატს არ გააჩნია პირამიდის დათვალიერების მხარდაჭერა. გადახედეთ GDAL დოკუმენტაციას თუ გაქვთ ეჭვი.</translation>
    </message>
    <message>
        <source>Building pyramid overviews is not supported on this type of raster.</source>
        <translation>პირამიდების დათვალიერების აგება არ არის მხარდაჭრილი რასტრის ამ ტიპში.</translation>
    </message>
    <message>
        <source>Save file</source>
        <translation>ფაილის შენახვა</translation>
    </message>
    <message>
        <source>Textfile (*.txt)</source>
        <translation>ტექსტური ფაილი (*.txt)</translation>
    </message>
    <message>
        <source>QGIS Generated Transparent Pixel Value Export File</source>
        <translation>QGIS დააგენერირა გამჭვირვალე პიქსელის მნიშვნელობის ექსპორტის ფაილი</translation>
    </message>
    <message>
        <source>Open file</source>
        <translation>ფაილის გახსნა</translation>
    </message>
    <message>
        <source>Import Error</source>
        <translation>შეცდომა იმპორტირებისას</translation>
    </message>
    <message>
        <source>The following lines contained errors

</source>
        <translation>შემდეგი ხაზები შეიცავენ შეცდომებს

</translation>
    </message>
    <message>
        <source>Read access denied</source>
        <translation>წაკითხვის უფლება უარყოფილია</translation>
    </message>
    <message>
        <source>Read access denied. Adjust the file permissions and try again.

</source>
        <translation>წაკითხვის უფლება უარყოფილია. შეცვალეთ ფაილის უფლებები და სცადეთ თავიდან.

</translation>
    </message>
    <message>
        <source>Color Ramp</source>
        <translation>ფერების გრადაცია</translation>
    </message>
    <message>
        <source>Quantiles</source>
        <translation>Quantil-ები</translation>
    </message>
    <message>
        <source>Custom color map entry</source>
        <translation>შედგენილი ფერადი რუკის კომპონენტი</translation>
    </message>
    <message>
        <source>QGIS Generated Color Map Export File</source>
        <translation>QGIS-მა დააგენერირა ფერადი რუკის ექსპორტის ფაილი</translation>
    </message>
    <message>
        <source>Load Color Map</source>
        <translation>ფერადი რუკის ჩატვირთვა</translation>
    </message>
    <message>
        <source>The color map for Band %n failed to load</source>
        <translation type="obsolete">
        
        </translation>
    </message>
    <message>
        <source>Default Style</source>
        <translation>საწყისი სტილი</translation>
    </message>
    <message>
        <source>QGIS Layer Style File (*.qml)</source>
        <translation>QGIS შრის სტილის ფაილი (*.qml)</translation>
    </message>
    <message>
        <source>Saved Style</source>
        <translation>შენახული სტილი</translation>
    </message>
    <message>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <source>Unknown style format: </source>
        <translation>უცნობი სტილის ფორმატი:</translation>
    </message>
    <message>
        <source>Note: Minimum Maximum values are estimates or user defined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Note: Minimum Maximum values are actual values computed from the band(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Building internal pyramid overviews is not supported on raster layers with JPEG compression.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerPropertiesBase</name>
    <message>
        <source>Raster Layer Properties</source>
        <translation>რასტრული შრის თვისებები</translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation>სიმბოლიკა</translation>
    </message>
    <message>
        <source>Render as</source>
        <translation>ვიზუალიზაცია როგორც</translation>
    </message>
    <message>
        <source>Single band gray</source>
        <translation>ერთ დიაპაზონიანი რუხი</translation>
    </message>
    <message>
        <source>Three band color</source>
        <translation>სამ დიაპაზონონიანი ფერი</translation>
    </message>
    <message>
        <source>Invert color map</source>
        <translation>რუკის ფერის შებრუნება</translation>
    </message>
    <message>
        <source>RGB mode band selection and scaling</source>
        <translation>RGB რეჟიმის დიაპაზონის მონიშვნა და სკალირება</translation>
    </message>
    <message>
        <source>Red band</source>
        <translation>წითელი სპექტრი</translation>
    </message>
    <message>
        <source>Green band</source>
        <translation>მწვანე სპექტრი</translation>
    </message>
    <message>
        <source>Blue band</source>
        <translation>ლურჯი სპექტრი</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Default R:1 G:2 B:3</source>
        <translation>საწყისი R:1 G:2 B:3</translation>
    </message>
    <message>
        <source>Custom min / max values</source>
        <translation>შედგენილი მინ /მაქს მნიშვნელობები</translation>
    </message>
    <message>
        <source>Red min</source>
        <translation>წითელი მინ</translation>
    </message>
    <message>
        <source>Red max</source>
        <translation>წითელი მაქს</translation>
    </message>
    <message>
        <source>Green min</source>
        <translation>მწვანე მინ</translation>
    </message>
    <message>
        <source>Green max</source>
        <translation>მწვანე მაქს</translation>
    </message>
    <message>
        <source>Blue min</source>
        <translation>ლურჯი მინ</translation>
    </message>
    <message>
        <source>Blue max</source>
        <translation>ლურჯი მაქს</translation>
    </message>
    <message>
        <source>Use standard deviation</source>
        <translation>სტანდარტული გადახრის გამოყენება</translation>
    </message>
    <message>
        <source>Single band properties</source>
        <translation>მარტივი სპექტრის თვისებები</translation>
    </message>
    <message>
        <source>Gray band</source>
        <translation>ნაცრისფერი სპექტრი</translation>
    </message>
    <message>
        <source>Color map</source>
        <translation>ფერადი სპექტრი</translation>
    </message>
    <message>
        <source>Min</source>
        <translation>მინ</translation>
    </message>
    <message>
        <source>Max</source>
        <translation>მაქს</translation>
    </message>
    <message>
        <source>Note:</source>
        <translation>შენიშვნა:</translation>
    </message>
    <message>
        <source>Load min / max values from band</source>
        <translation>სპექტრიდან მინ/მაქს მნიშვნელობების ჩატვირთვა</translation>
    </message>
    <message>
        <source>Estimate (faster)</source>
        <translation>შეფასება (სწრაფად)</translation>
    </message>
    <message>
        <source>Actual (slower)</source>
        <translation>ფაქტიური (უფრო ნელი)</translation>
    </message>
    <message>
        <source>Load</source>
        <translation>ჩატვირთვა</translation>
    </message>
    <message>
        <source>Contrast enhancement</source>
        <translation>კონტრასტრის გაძლიერება</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>მიმდინარე</translation>
    </message>
    <message>
        <source>Save current contrast enhancement algorithm as default. This setting will be persistent between QGIS sessions.</source>
        <translation>მიმდინარე კონტრასტის გაძლიერების ალგორითმის შენახვა საწყისად. პარამეტრები იქნება მუდმივი QGIS სესიებს შორის.</translation>
    </message>
    <message>
        <source>Saves current contrast enhancement algorithm as a default. This setting will be persistent between QGIS sessions.</source>
        <translation>მიმდინარე კონტრასტის გაძლიერების ალგორითმის შენახვა საწყისად. პარამეტრები იქნება მუდმივი QGIS სესიებს შორის.</translation>
    </message>
    <message>
        <source>Default</source>
        <translation>საწყისი</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>ტექსტური წარწერა</translation>
    </message>
    <message>
        <source>Transparency</source>
        <translation>გამჭვირვალობა</translation>
    </message>
    <message>
        <source>Global transparency</source>
        <translation>გლობალური გამჭვირვალობა</translation>
    </message>
    <message>
        <source>None</source>
        <translation>არაფერი</translation>
    </message>
    <message>
        <source> 00%</source>
        <translation> 00%</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;Full&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Full&lt;/p&gt;</translation>
    </message>
    <message>
        <source>No data value</source>
        <translation>არ არის მონაცემის მნიშვნელობა</translation>
    </message>
    <message>
        <source>Reset no data value</source>
        <translation>არა მონაცემის მნიშვნელობის აღდგენა</translation>
    </message>
    <message>
        <source>Custom transparency options</source>
        <translation>შედგენილი გამჭვირვალობის თვისებები</translation>
    </message>
    <message>
        <source>Transparency band</source>
        <translation>გამჭვირვალობის სპექტრი</translation>
    </message>
    <message>
        <source>Transparent pixel list</source>
        <translation>გამჭვირვალე პიქსელის სია</translation>
    </message>
    <message>
        <source>Add values manually</source>
        <translation>მნიშვნელობების ხელით დამატება</translation>
    </message>
    <message>
        <source>Add Values from display</source>
        <translation>ეკრანიდან მნიშვნელობების დამატება</translation>
    </message>
    <message>
        <source>Remove selected row</source>
        <translation>არჩეული სტრიქონის გაუქმება</translation>
    </message>
    <message>
        <source>Default values</source>
        <translation>საწყისი მნიშვნელობები</translation>
    </message>
    <message>
        <source>Import from file</source>
        <translation>იმპორტი ფაილიდან</translation>
    </message>
    <message>
        <source>Export to file</source>
        <translation>ექსპორტი ფაილში</translation>
    </message>
    <message>
        <source>Colormap</source>
        <translation>ფერადი რუკა</translation>
    </message>
    <message>
        <source>Color interpolation</source>
        <translation>ფერადი ინტერპოლაცია</translation>
    </message>
    <message>
        <source>Add entry</source>
        <translation> ჩანაწერის დამატება</translation>
    </message>
    <message>
        <source>Delete entry</source>
        <translation>ჩანაწერის წაშლა</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>დახარისხება</translation>
    </message>
    <message>
        <source>Load color map from band</source>
        <translation>ფერადი რუკის ჩატვირთვა სპექტრიდან</translation>
    </message>
    <message>
        <source>Load color map from file</source>
        <translation>ფერადი რუკის ჩატვირთვა ფაილიდან</translation>
    </message>
    <message>
        <source>Export color map to file</source>
        <translation>ფერადი რუკის ექსპორტი ფაილში</translation>
    </message>
    <message>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <source>Generate new color map</source>
        <translation>ახალი ფერადი რუკის გენერაცია</translation>
    </message>
    <message>
        <source>Number of entries</source>
        <translation>ჩანაწერების რაოდენობა</translation>
    </message>
    <message>
        <source>Classification mode</source>
        <translation>კლასიფიკაციის რეჟიმი</translation>
    </message>
    <message>
        <source>Classify</source>
        <translation>კლასიფიკაცია</translation>
    </message>
    <message>
        <source>General</source>
        <translation>ზოგადი</translation>
    </message>
    <message>
        <source>Display name</source>
        <translation>სახელის ჩვენება</translation>
    </message>
    <message>
        <source>Layer source</source>
        <translation>შრის წყარო</translation>
    </message>
    <message>
        <source>Columns:</source>
        <translation>სვეტები:</translation>
    </message>
    <message>
        <source>Rows:</source>
        <translation>სტრიქონები:</translation>
    </message>
    <message>
        <source>No Data:</source>
        <translation>არ არის მონაცემი:</translation>
    </message>
    <message>
        <source>Scale dependent visibility</source>
        <translation>დამოკიდებული ხილვადობის მასშტაბირება</translation>
    </message>
    <message>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>მაქსიმალური მასშტაბი რომელზეც ეს შრე გამოჩნდება.</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation>მაქსიმუმი</translation>
    </message>
    <message>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>მინიმალური მასშტაბი რომელზეც ეს შრე გამოჩნდება.</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation>მინიმუმი</translation>
    </message>
    <message>
        <source>Coordinate reference system</source>
        <translation>კოორიდანტთა რეფერენსული სისტემა</translation>
    </message>
    <message>
        <source>Change ...</source>
        <translation>ცვლილება ...</translation>
    </message>
    <message>
        <source>Thumbnail</source>
        <translation>ესკიზი</translation>
    </message>
    <message>
        <source>Legend</source>
        <translation>ლეგენდა</translation>
    </message>
    <message>
        <source>Palette</source>
        <translation>პალიტრა</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>მეტამონაცემები</translation>
    </message>
    <message>
        <source>Pyramids</source>
        <translation>პირამიდები</translation>
    </message>
    <message>
        <source>Notes</source>
        <translation>შენიშვნები</translation>
    </message>
    <message>
        <source>Pyramid resolutions</source>
        <translation>პირამიდის რეზოლუციები</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="obsolete">&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Verdana&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Build pyramids internally if possible</source>
        <translation>პირამიდების შიგნიდან აგება, თუ შესაძლებელია </translation>
    </message>
    <message>
        <source>Resampling method</source>
        <translation>ხელახალი არჩევის მეთოდი</translation>
    </message>
    <message>
        <source>Average</source>
        <translation>საშუალო</translation>
    </message>
    <message>
        <source>Nearest Neighbour</source>
        <translation>უახლოესი მეზობელი</translation>
    </message>
    <message>
        <source>Build pyramids</source>
        <translation>პირამიდების აგება</translation>
    </message>
    <message>
        <source>Histogram</source>
        <translation>ჰისტოგრამა</translation>
    </message>
    <message>
        <source>Chart Type</source>
        <translation>დიაგრამის ტიპი</translation>
    </message>
    <message>
        <source>Line graph</source>
        <translation>ხაზის გრაფი</translation>
    </message>
    <message>
        <source>Bar chart</source>
        <translation>ზოლის დიაგრამა</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>თვისებები</translation>
    </message>
    <message>
        <source>Column count</source>
        <translation>სვეტების დათვლა</translation>
    </message>
    <message>
        <source>Out of range OK?</source>
        <translation>დიაპაზონის გარეთაა კარგი?</translation>
    </message>
    <message>
        <source>Allow approximation</source>
        <translation>მიახლოების დაშვება</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>განახლება</translation>
    </message>
    <message>
        <source>Restore Default Style</source>
        <translation>საწყისი სტილის აღდგენა</translation>
    </message>
    <message>
        <source>Save As Default</source>
        <translation>შენახვა როგორც საწყისი</translation>
    </message>
    <message>
        <source>Load Style ...</source>
        <translation>სტილის ჩატვირთვა ...</translation>
    </message>
    <message>
        <source>Save Style ...</source>
        <translation>სტილის შენახვა ...</translation>
    </message>
    <message>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRunProcess</name>
    <message>
        <source>Starting</source>
        <translation>დაწყება</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>მოქმედება</translation>
    </message>
    <message>
        <source>Unable to run command</source>
        <translation>შეუძლებელია ბრძანების გაშვება</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>დასრულებულია</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation>ქვემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>ზემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>ზემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>ქვემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Tick Down</source>
        <translation>ქვემოთ მონიშვნა</translation>
    </message>
    <message>
        <source>Tick Up</source>
        <translation>ზემოთ მონიშვნა</translation>
    </message>
    <message>
        <source>Bar</source>
        <translation>ზოლი</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>ყუთი</translation>
    </message>
    <message>
        <source>&amp;Scale Bar</source>
        <translation>&amp;სკალის ზოლი</translation>
    </message>
    <message>
        <source>Creates a scale bar that is displayed on the map canvas</source>
        <translation>ქმნის სკალის ზოლს რომელიც გამოისახებს რუკის ნახატზე</translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation>&amp;დეკორაციები</translation>
    </message>
    <message>
        <source> metres/km</source>
        <translation>მეტრი/კმ</translation>
    </message>
    <message>
        <source> feet/miles</source>
        <translation>ფუტები/მილები</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation>გრადუსები</translation>
    </message>
    <message>
        <source> km</source>
        <translation>კმ</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>მმ</translation>
    </message>
    <message>
        <source> cm</source>
        <translation>სმ</translation>
    </message>
    <message>
        <source> m</source>
        <translation>მ</translation>
    </message>
    <message>
        <source> miles</source>
        <translation>მილი</translation>
    </message>
    <message>
        <source> mile</source>
        <translation>მილი</translation>
    </message>
    <message>
        <source> inches</source>
        <translation>დიუმი</translation>
    </message>
    <message>
        <source> foot</source>
        <translation>ფუტი</translation>
    </message>
    <message>
        <source> feet</source>
        <translation>ფუტები</translation>
    </message>
    <message>
        <source> degree</source>
        <translation>გრადუსი</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation>უცნობი</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPluginGuiBase</name>
    <message>
        <source>Scale Bar Plugin</source>
        <translation>სკალის ზოლის ჩანართი</translation>
    </message>
    <message>
        <source>Click to select the colour</source>
        <translation>დააწკაპუნეთ ფერის ასარჩევად</translation>
    </message>
    <message>
        <source>Size of bar:</source>
        <translation>ზოლის ზომა:</translation>
    </message>
    <message>
        <source>Automatically snap to round number on resize</source>
        <translation>ზომის შეცვლისას დამრგვალებულ რიცხვთან ავტომატურად მიკვრა </translation>
    </message>
    <message>
        <source>Colour of bar:</source>
        <translation>ზოლის ფერი:</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>ზემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>ზემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>ქვემოთ მარცხნივ</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>ქვემოთ მარჯვნივ</translation>
    </message>
    <message>
        <source>Enable scale bar</source>
        <translation>სკალის ზოლის ჩართვა</translation>
    </message>
    <message>
        <source>Scale bar style:</source>
        <translation>სკალის ზოლის სტილი:</translation>
    </message>
    <message>
        <source>Select the style of the scale bar</source>
        <translation>სკალის ზოლის სტილის არჩევა</translation>
    </message>
    <message>
        <source>Tick Down</source>
        <translation>ქვემოთ მონიშვნა</translation>
    </message>
    <message>
        <source>Tick Up</source>
        <translation>ზემოთ მონიშვნა</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>უჯრა</translation>
    </message>
    <message>
        <source>Bar</source>
        <translation>ზოლი</translation>
    </message>
    <message>
        <source>Placement:</source>
        <translation>ადგილმდებარეობა:</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This plugin draws a scale bar on the map. Please note the size option below is a &apos;preferred&apos; size and may have to be altered by QGIS depending on the level of zoom.  The size is measured according to the map units specified in the project properties.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ეს ჩანართი ხატავს სკალის ზოლს რუკაზე. გთხოვთ შენიშნოთ რომ ზომის თვისება ქვემოთ არის  &apos;უპირატესი&apos; ზომი და შეიძლება იყოს შეცვლილი QGIS–ის დამოკიდებულებით ზომის შეცვლის დონეზე.  ეს ზომა იზომება იმ რუკის ერთეულების შესაბამისად, რომელიც არის პროექტის თვისებებში.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsSearchQueryBuilder</name>
    <message>
        <source>Search query builder</source>
        <translation>საძიებო მოთხოვნის აგება</translation>
    </message>
    <message>
        <source>Found %d matching features.</source>
        <translation type="obsolete">
        </translation>
    </message>
    <message>
        <source>No matching features found.</source>
        <translation>მსგავსი ობიექტი არ მოიძებნა.</translation>
    </message>
    <message>
        <source>Search results</source>
        <translation>ძებნის შედეგები</translation>
    </message>
    <message>
        <source>Search string parsing error</source>
        <translation>სტრინგის დამუშავების შეცდომის მოძებნა</translation>
    </message>
    <message>
        <source>No Records</source>
        <translation>არ არის ჩანაწერები</translation>
    </message>
    <message>
        <source>The query you specified results in zero records being returned.</source>
        <translation>მოთხოვნამ რომელიც თქვენ განსაზღვრეთ შედეგად დააბრუნა ნულოვანი ჩანაწერები.</translation>
    </message>
    <message>
        <source>Found %1 matching features.</source>
        <translation type="obsolete">
        </translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelect</name>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation>დარწმუნებული ხართ რომ გსურთ გაუქმება</translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation>კავშირის და მასთან დაკავშირებული ყველა პარამეტრი?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>წაშლის დადასტურება</translation>
    </message>
    <message>
        <source>WMS Provider</source>
        <translation>WMS პროვაიდერი</translation>
    </message>
    <message>
        <source>Could not open the WMS Provider</source>
        <translation>შეუძლებელია WMS პროვაიდერის გახსნა</translation>
    </message>
    <message>
        <source>Select Layer</source>
        <translation>შრის არჩევა</translation>
    </message>
    <message>
        <source>You must select at least one layer first.</source>
        <translation>თქვენ უნდა აირჩიოთ თავიდან ერთი შრე მაინც.</translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation>Coordinate Reference System</translation>
    </message>
    <message>
        <source>There are no available coordinate reference system for the set of layers you&apos;ve selected.</source>
        <translation>არ არსებობს ხელმისაწვდომი საკოორდინატო სისტემა იმ შრეთა ნაკრებისთვის რომელიც თქვენ აირჩიეთ.</translation>
    </message>
    <message>
        <source>Coordinate Reference System (%1 available)</source>
        <translation type="obsolete">
        
        </translation>
    </message>
    <message>
        <source>Could not understand the response.  The</source>
        <translation>შეუძლებელია პასუხის გაგება. ეს</translation>
    </message>
    <message>
        <source>provider said</source>
        <translation>პროვაიდერის პასუხია</translation>
    </message>
    <message>
        <source>WMS proxies</source>
        <translation>WMS პროქსები</translation>
    </message>
    <message>
        <source>Several WMS servers have been added to the server list. Note that if you access the internet via a web proxy, you will need to set the proxy settings in the QGIS options dialog.</source>
        <translation>სერვერების სიას დაემატა რამდენიმე WMS სერვერი. შევნიშნოთ რომ თუ თქვენ გაქვთ ინტერნეტთან წვდომა web პროქსის მეშვეობით, თქვენ დაგჭირდებათ პროქსის პარამეტრების დაყენება QGIS თვისებების დიალოგში.</translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelectBase</name>
    <message>
        <source>Add Layer(s) from a Server</source>
        <translation>სერვერიდან შრის (შრეების) დამატება</translation>
    </message>
    <message>
        <source>Server Connections</source>
        <translation>სერვერთან კავშირები</translation>
    </message>
    <message>
        <source>Adds a few example WMS servers</source>
        <translation>ამატებს რამდენიმე მაგალითს WMS სერვერებს</translation>
    </message>
    <message>
        <source>Add default servers</source>
        <translation>ამატებს საწყისს სერვერებს</translation>
    </message>
    <message>
        <source>C&amp;onnect</source>
        <translation>და&amp;კავშირება</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>რედაქტირება</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>წაშლა</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;ახალი</translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation>კოორდინატის რეფერენსული სისტემა</translation>
    </message>
    <message>
        <source>Change ...</source>
        <translation>ცვლილება ...</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>მზადაა</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;დამატება</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation>შრეები</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>სათაური</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation>აბსტრაქტული</translation>
    </message>
    <message>
        <source>Image encoding</source>
        <translation>ნახატის კოდირება</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>დახმარება</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>C&amp;lose</source>
        <translation>&amp;დახურვა</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
</context>
<context>
    <name>QgsShapeFile</name>
    <message>
        <source>Scanning </source>
        <translation>სკანირება</translation>
    </message>
    <message>
        <source>The database gave an error while executing this SQL:</source>
        <translation>მონაცემთა ბაზამ მოგვცა შეცდომა ამ SQL –ის გაშვებისას:</translation>
    </message>
    <message>
        <source>The error was:</source>
        <translation>შეცდომა იყო:</translation>
    </message>
    <message>
        <source>... (rest of SQL trimmed)</source>
        <comment>is appended to a truncated SQL statement</comment>
        <translation>... (დარჩენილი SQL –დან დამუშავებულიდან )</translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialog</name>
    <message>
        <source>Solid Line</source>
        <translation>მყარი ხაზი</translation>
    </message>
    <message>
        <source>Dash Line</source>
        <translation>პუნქტირი</translation>
    </message>
    <message>
        <source>Dot Line</source>
        <translation>წერტილოვანი ხაზი</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>წერტილიანი პუნქტირი</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>ორ წერტილიანი პუნქტირი</translation>
    </message>
    <message>
        <source>No Pen</source>
        <translation>არა კალამი</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>მყარი</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>ჰორიზონტალური</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>ვერტიკალური</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>ჯვარი</translation>
    </message>
    <message>
        <source>BDiagonal</source>
        <translation>B-დიაგონალი</translation>
    </message>
    <message>
        <source>FDiagonal</source>
        <translation>Fდიაგონალი</translation>
    </message>
    <message>
        <source>Diagonal X</source>
        <translation>X დიაგონალი</translation>
    </message>
    <message>
        <source>Dense1</source>
        <translation>სიმჭიდროვე1</translation>
    </message>
    <message>
        <source>Dense2</source>
        <translation>სიმჭიდროვე2</translation>
    </message>
    <message>
        <source>Dense3</source>
        <translation>სიმჭიდროვე3</translation>
    </message>
    <message>
        <source>Dense4</source>
        <translation>სიმჭიდროვე4</translation>
    </message>
    <message>
        <source>Dense5</source>
        <translation>სიმჭიდროვე5</translation>
    </message>
    <message>
        <source>Dense6</source>
        <translation>სიმჭიდროვე6</translation>
    </message>
    <message>
        <source>Dense7</source>
        <translation>სიმჭიდროვე7</translation>
    </message>
    <message>
        <source>No Brush</source>
        <translation>არა ფუნჯი</translation>
    </message>
    <message>
        <source>Texture</source>
        <translation>ტექსტურა</translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialogBase</name>
    <message>
        <source>Single Symbol</source>
        <translation>ერთი სიმბოლო</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>წარწერა</translation>
    </message>
    <message>
        <source>Point Symbol</source>
        <translation>წერტილის სიმბოლო</translation>
    </message>
    <message>
        <source>Rotation field</source>
        <translation>გადმობრუნების ველი</translation>
    </message>
    <message>
        <source>Area scale field</source>
        <translation>არეს სკალის ველი</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>ზომა</translation>
    </message>
    <message>
        <source>Style Options</source>
        <translation>სტილის თვისებები</translation>
    </message>
    <message>
        <source>Outline style</source>
        <translation>კონტურის სტილი</translation>
    </message>
    <message>
        <source>Outline color</source>
        <translation>კონტურის ფერი</translation>
    </message>
    <message>
        <source>Outline width</source>
        <translation>კონტურის სისქე</translation>
    </message>
    <message>
        <source>Fill color</source>
        <translation>ფერით შევსება</translation>
    </message>
    <message>
        <source>Fill style</source>
        <translation>შევსების სტილი</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialog</name>
    <message>
        <source>to vertex</source>
        <translation>წვეროსთან</translation>
    </message>
    <message>
        <source>to segment</source>
        <translation>სეგმენტთან</translation>
    </message>
    <message>
        <source>to vertex and segment</source>
        <translation>წვეროსთან და სეგმენტთან</translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialogBase</name>
    <message>
        <source>Snapping options</source>
        <translation>გადაადგილების თვისებები</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>შრე</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>რეჟიმი</translation>
    </message>
    <message>
        <source>Tolerance</source>
        <translation>გამძლეობა</translation>
    </message>
</context>
<context>
    <name>QgsSpit</name>
    <message>
        <source>File Name</source>
        <translation>ფაილის სახელი</translation>
    </message>
    <message>
        <source>Feature Class</source>
        <translation>ობიექტების კლასი</translation>
    </message>
    <message>
        <source>Features</source>
        <translation>ობიექტები</translation>
    </message>
    <message>
        <source>DB Relation Name</source>
        <translation>DB კავშირის სახელი</translation>
    </message>
    <message>
        <source>Schema</source>
        <translation>სქემა</translation>
    </message>
    <message>
        <source>Are you sure you want to remove the [</source>
        <translation>დარწმუნებული ხართ რომ გსურთ გააუქმოთ [</translation>
    </message>
    <message>
        <source>] connection and all associated settings?</source>
        <translation>] კავშირი და ყველა შესაბამისი პარამეტრები?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>წაშლის დადასრუტება</translation>
    </message>
    <message>
        <source>Add Shapefiles</source>
        <translation>ყველა Shapefile –ი</translation>
    </message>
    <message>
        <source>Shapefiles (*.shp);;All files (*.*)</source>
        <translation>Shapefile-ები (*.shp);;ყველა ფაილი (*.*)</translation>
    </message>
    <message>
        <source>The following Shapefile(s) could not be loaded:

</source>
        <translation>შემდეგი Shapefile(s) –ის ჩატვირთვა შეუძლებელია:

</translation>
    </message>
    <message>
        <source>REASON: File cannot be opened</source>
        <translation>მიზეზი:  ფაილის გახსნა შეუძლებელია</translation>
    </message>
    <message>
        <source>REASON: One or both of the Shapefile files (*.dbf, *.shx) missing</source>
        <translation>მიზეზი: ერთი ან ორივე Shapefile ფაილები (*.dbf, *.shx) აკლია</translation>
    </message>
    <message>
        <source>General Interface Help:</source>
        <translation>ზოგადი ინტერფეისის დახმარება:</translation>
    </message>
    <message>
        <source>PostgreSQL Connections:</source>
        <translation>PostgreSQL კავშირები:</translation>
    </message>
    <message>
        <source>[New ...] - create a new connection</source>
        <translation>[ახალი ...] - ახალი კავშირის შექმნა</translation>
    </message>
    <message>
        <source>[Edit ...] - edit the currently selected connection</source>
        <translation>[რედაქტირება ...] - ამჟამად მონიშნული კავშირის რედაქტირება</translation>
    </message>
    <message>
        <source>[Remove] - remove the currently selected connection</source>
        <translation>[გაუქმება] - ამჟამად არჩეული კავშირის გაუქმება</translation>
    </message>
    <message>
        <source>-you need to select a connection that works (connects properly) in order to import files</source>
        <translation>–საჭიროა აირჩიოთ ისეთი კავშირი რომელიც მუშაობს (უკავშირდება სწორად) ფაილების დასაიმპორტირებლად</translation>
    </message>
    <message>
        <source>-when changing connections Global Schema also changes accordingly</source>
        <translation>–კავშირების ცვლილებისას აგრეთვე იცვლება შესაბამისად Global Schema</translation>
    </message>
    <message>
        <source>Shapefile List:</source>
        <translation>Shapefile-ების სია:</translation>
    </message>
    <message>
        <source>[Add ...] - open a File dialog and browse to the desired file(s) to import</source>
        <translation>[დამატება ...] - გახსენით File დიალოგური ფანჯარა და დაათვალიერეთ სასურველი ფაილ(ებ)ი იმპორტირებისთვის</translation>
    </message>
    <message>
        <source>[Remove] - remove the currently selected file(s) from the list</source>
        <translation>[წაშლა] - ამჟამად არჩეული ფაილ(ებ)ის სიიდან წაშლა</translation>
    </message>
    <message>
        <source>[Remove All] - remove all the files in the list</source>
        <translation>[ყველას წაშლა] - სიიდან ყველა ფაილის წაშლა</translation>
    </message>
    <message>
        <source>[SRID] - Reference ID for the shapefiles to be imported</source>
        <translation>[SRID] - მიმმართავი ID shapefiles–სთვის იმპორტირებისათვის</translation>
    </message>
    <message>
        <source>[Use Default (SRID)] - set SRID to -1</source>
        <translation>[საწყისი (SRID)–ს გამოყენება] - SRID–ის დაყენება -1</translation>
    </message>
    <message>
        <source>[Geometry Column Name] - name of the geometry column in the database</source>
        <translation>[გეომეტრიული სვეტის სახელი] - მონაცემთა ბაზაში გეომეტრიული სვეტის სახელი</translation>
    </message>
    <message>
        <source>[Use Default (Geometry Column Name)] - set column name to &apos;the_geom&apos;</source>
        <translation>[საწყისი (Geometry Column Name)–ის გამოყენება] - სვეტის სახელის დაყენება &apos;the_geom&apos;</translation>
    </message>
    <message>
        <source>[Glogal Schema] - set the schema for all files to be imported into</source>
        <translation>[გლობალური სქემა] - სქემის დაყენება ყველა ფაილის იმპორტირებისთვის</translation>
    </message>
    <message>
        <source>[Import] - import the current shapefiles in the list</source>
        <translation>[იმპორტი] - სიაში მიმდინარე shapefile–ების იმპორტი</translation>
    </message>
    <message>
        <source>[Quit] - quit the program
</source>
        <translation>[გამოსვლა] - გამოდის პროგრამიდან
</translation>
    </message>
    <message>
        <source>[Help] - display this help dialog</source>
        <translation>[დახმარება] - ამ დახმარებლის დიალოგური ფანჯრის ჩვენება</translation>
    </message>
    <message>
        <source>Import Shapefiles</source>
        <translation>Shapefile–ების იმპორტი</translation>
    </message>
    <message>
        <source>You need to specify a Connection first</source>
        <translation>თავდაპირველად თქვენ უნდა მიუთითოთ კავშირი</translation>
    </message>
    <message>
        <source>Password for </source>
        <translation>პაროლი</translation>
    </message>
    <message>
        <source>Please enter your password:</source>
        <translation>გთხოვთ შეიყვანოთ თქვენი პაროლი:</translation>
    </message>
    <message>
        <source>Connection failed - Check settings and try again</source>
        <translation>კავშირი ვერ შედგა – შეამოწმეთ პარამეტრები და სცადეთ თავიდან</translation>
    </message>
    <message>
        <source>PostGIS not available</source>
        <translation>PostGIS მიუწვდომელია</translation>
    </message>
    <message>
        <source>&lt;p&gt;The chosen database does not have PostGIS installed, but this is required for storage of spatial data.&lt;/p&gt;</source>
        <translation>&lt;p&gt;არჩეულ მონაცემთა ბაზაში არ არის დაინსტალირებული PostGIS, მაგრამ ეს არის მოთხოვნილი სივრცული მონაცემების შესანახად.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>You need to add shapefiles to the list first</source>
        <translation>თავდაპირველად საჭიროა სიაში shapefile– ების დამატება</translation>
    </message>
    <message>
        <source>Importing files</source>
        <translation>ფაილების იმპორტი</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>გაუქმება</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>პროგრესი</translation>
    </message>
    <message>
        <source>Problem inserting features from file:</source>
        <translation>პრობლემა ფაილიდან ობიექტების  ჩასმისას:</translation>
    </message>
    <message>
        <source>Invalid table name.</source>
        <translation>ცხრილის არასწორი სახელი.</translation>
    </message>
    <message>
        <source>No fields detected.</source>
        <translation>ველები არ აღმოჩნდა.</translation>
    </message>
    <message>
        <source>The following fields are duplicates:</source>
        <translation>შემდეგი ველები არის გამეორებული:</translation>
    </message>
    <message>
        <source>&lt;p&gt;Error while executing the SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation>&lt;p&gt;შეცდომა SQL –ის გაშვებისას:&lt;/p&gt;&lt;p&gt;</translation>
    </message>
    <message>
        <source>&lt;/p&gt;&lt;p&gt;The database said:</source>
        <translation>&lt;/p&gt;&lt;p&gt;მონაცემთა ბაზის პასუხი:</translation>
    </message>
    <message>
        <source>Import Shapefiles - Relation Exists</source>
        <translation>Shapefile–ების იმპორტი - კავშირი არსებობს</translation>
    </message>
    <message>
        <source>The Shapefile:</source>
        <translation>Shapefile-ი:</translation>
    </message>
    <message>
        <source>will use [</source>
        <translation>გამოიყენებს [</translation>
    </message>
    <message>
        <source>] relation for its data,</source>
        <translation>] კავშირს მისი მონაცემისთვის,</translation>
    </message>
    <message>
        <source>which already exists and possibly contains data.</source>
        <translation>რომელიც უკვე არსებობს და შესაძლოა შეიცავს მონაცემს.</translation>
    </message>
    <message>
        <source>To avoid data loss change the &quot;DB Relation Name&quot;</source>
        <translation>მონაცემის დაკარგვის თავიდან აცილების მიზნით შეცვალეთ &quot;&quot;DB კავშირის სახელი&quot;</translation>
    </message>
    <message>
        <source>for this Shapefile in the main dialog file list.</source>
        <translation>ამ Shapefile –სთვის ძირითად დიალოგურ ფაილურ სიაში.</translation>
    </message>
    <message>
        <source>Do you want to overwrite the [</source>
        <translation>გსურთ გადააწეროთ [</translation>
    </message>
    <message>
        <source>] relation?</source>
        <translation>] კავშირი?</translation>
    </message>
    <message>
        <source>%1 of %2 shapefiles could not be imported.</source>
        <translation>%2–დან %1  shapefile–ების იმპორტი შეუძლებელია.</translation>
    </message>
</context>
<context>
    <name>QgsSpitBase</name>
    <message>
        <source>SPIT - Shapefile to PostGIS Import Tool</source>
        <translation>SPIT - Shapefile PostGIS იმპორტირების ხელსაწყოთა ყუთისთვის</translation>
    </message>
    <message>
        <source>PostgreSQL Connections</source>
        <translation>PostgreSQL კავშირები</translation>
    </message>
    <message>
        <source>Edit the current PostGIS connection</source>
        <translation>მიმდინარე PostGIS კავშირის რედაქტირება</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>რედაქტირება</translation>
    </message>
    <message>
        <source>Remove the current PostGIS connection</source>
        <translation>მიმდინარე PostGIS კავშირის გაუქმება</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>გაუქმება</translation>
    </message>
    <message>
        <source>Create a new PostGIS connection</source>
        <translation>ახალი PostGIS კავშირის შექმნა</translation>
    </message>
    <message>
        <source>New</source>
        <translation>ახალი</translation>
    </message>
    <message>
        <source>Connect to PostGIS</source>
        <translation>PostGIS–თან კავშირი</translation>
    </message>
    <message>
        <source>Connect</source>
        <translation>კავშირი</translation>
    </message>
    <message>
        <source>Import options and shapefile list</source>
        <translation>იმპორტის თვისებები და shapefile სია</translation>
    </message>
    <message>
        <source>Add a shapefile to the list of files to be imported</source>
        <translation>shapefile –ის დამატება ფაილების სიისთვის რომლებიც უნდა დაიმპორტდეს</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>დამატება</translation>
    </message>
    <message>
        <source>Remove the selected shapefile from the import list</source>
        <translation>არჩეული shapefile–ის წაშლა იმპორტის სიიდან</translation>
    </message>
    <message>
        <source>Remove all the shapefiles from the import list</source>
        <translation>ყველა shapefile–ის წაშლა იმპორტის სიიდან</translation>
    </message>
    <message>
        <source>Remove All</source>
        <translation>ყველას წაშლა</translation>
    </message>
    <message>
        <source>Set the SRID to the default value</source>
        <translation>საწყისი მნიშვნელობის დაყენება SRID –სთვის</translation>
    </message>
    <message>
        <source>Use Default SRID or specify here</source>
        <translation>გამოიყენეთ საწყისი SRID  ან  განსაზღვრეთ აქ</translation>
    </message>
    <message>
        <source>Set the geometry column name to the default value</source>
        <translation>გეომეტრიული სვეტის სახელის დაყენება საწყისი მნიშვნელობისთვის</translation>
    </message>
    <message>
        <source>Use Default Geometry Column Name or specify here</source>
        <translation>გამოიყენეთ საწყისი გეომეტრიული სვეტის სახელი ან განსაზღვრეთ აქ</translation>
    </message>
    <message>
        <source>Primary Key Column Name</source>
        <translation>ძირითადი გასაღები სვეტის სახელი</translation>
    </message>
    <message>
        <source>Global Schema</source>
        <translation>გლობალური სქემა</translation>
    </message>
</context>
<context>
    <name>QgsSpitPlugin</name>
    <message>
        <source>&amp;Import Shapefiles to PostgreSQL</source>
        <translation>Shapefile–ების &amp;იმპორტი PostgreSQL–ში</translation>
    </message>
    <message>
        <source>Import shapefiles into a PostGIS-enabled PostgreSQL database. The schema and field names can be customized on import</source>
        <translation>shapefile–ების იმპორტი PostGIS-სის არსებულ PostgreSQL მონაცემთა ბაზაში. სქემა და ველების სახელები შეიძლება გადაკეთდეს იმპორტირებისას</translation>
    </message>
    <message>
        <source>&amp;Spit</source>
        <translation>&amp;დაყოფა</translation>
    </message>
</context>
<context>
    <name>QgsTINInterpolatorDialog</name>
    <message>
        <source>Linear interpolation</source>
        <translation>წრფივი ინრერპოლაცია</translation>
    </message>
</context>
<context>
    <name>QgsTINInterpolatorDialogBase</name>
    <message>
        <source>Triangle based interpolation</source>
        <translation>სამკუთხედზე დაფუძნებული ინტერპოლაცია</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This interpolator provides different methods for interpolation in a triangular irregular network (TIN).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;ეს ინტერპოლაცია წარმოადგენს განსხვავებულ მეთოდებს არაწესიერი სამკუთხა ქსელისგან (TIN).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Interpolation method:</source>
        <translation>ინტერპოლაციის მეთოდი:</translation>
    </message>
</context>
<context>
    <name>QgsUniqueValueDialog</name>
    <message>
        <source>Confirm Delete</source>
        <translation>წაშლის დადასტურება</translation>
    </message>
    <message>
        <source>The classification field was changed from &apos;%1&apos; to &apos;%2&apos;.
Should the existing classes be deleted before classification?</source>
        <translation>კლასიფიკაციის ველი შეიცვალა &apos;%2&apos; –დან &apos;%1&apos;–ზე.
უნდა წაიშალოს თუ არა არსებული კლასები კლასიფიცირებამდე?</translation>
    </message>
</context>
<context>
    <name>QgsUniqueValueDialogBase</name>
    <message>
        <source>Form1</source>
        <translation>ფორმა 1</translation>
    </message>
    <message>
        <source>Classification field</source>
        <translation>კლასიფიკაციის ველი</translation>
    </message>
    <message>
        <source>Classify</source>
        <translation>კლასიფიკაცია</translation>
    </message>
    <message>
        <source>Add class</source>
        <translation>კლასის დამატება</translation>
    </message>
    <message>
        <source>Delete classes</source>
        <translation>კლასის წაშლა</translation>
    </message>
    <message>
        <source>Randomize Colors</source>
        <translation>შემთხვევითად აღებული ფერები</translation>
    </message>
    <message>
        <source>Reset Colors</source>
        <translation>ფერების აღდგენა</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayer</name>
    <message>
        <source>No renderer object</source>
        <translation>არ არის ვიზუალიზაციის ობიექტი</translation>
    </message>
    <message>
        <source>Classification field not found</source>
        <translation>კლასიფიკაციის ველი ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>ERROR: no provider</source>
        <translation>ERROR: წარმოებელი არ არის</translation>
    </message>
    <message>
        <source>ERROR: layer not editable</source>
        <translation>ERROR: წარწერის რედაქტირება შეუძლებელია</translation>
    </message>
    <message>
        <source>SUCCESS: %1 attributes added.</source>
        <translation>SUCCESS: %1 ატრიბუტი დაემატა.</translation>
    </message>
    <message>
        <source>ERROR: %1 new attributes not added</source>
        <translation>ERROR: %1 ახალი ატრიბუტი არ დაემატა</translation>
    </message>
    <message>
        <source>SUCCESS: %1 attributes deleted.</source>
        <translation>SUCCESS: %1 ატრიბუტი წაიშალა.</translation>
    </message>
    <message>
        <source>ERROR: %1 attributes not deleted.</source>
        <translation>ERROR: %1 ატრიბუტი არ წაიშალა.</translation>
    </message>
    <message>
        <source>SUCCESS: attribute %1 was added.</source>
        <translation>SUCCESS: %1 ატრიბუტი დაემატა.</translation>
    </message>
    <message>
        <source>ERROR: attribute %1 not added</source>
        <translation>ERROR:%1 ატრიბუტი არ დაემატა</translation>
    </message>
    <message>
        <source>SUCCESS: %1 attribute values changed.</source>
        <translation>SUCCESS: %1 ატრიბუტის მნიშვნელობა შეიცვალა.</translation>
    </message>
    <message>
        <source>ERROR: %1 attribute value changes not applied.</source>
        <translation>ERROR: %1 ატრიბუტის მნიშვნელობის შეცვლა არ განხორციელდა.</translation>
    </message>
    <message>
        <source>SUCCESS: %1 features added.</source>
        <translation>SUCCESS: %1 ობიექტი დაემატა.</translation>
    </message>
    <message>
        <source>ERROR: %1 features not added.</source>
        <translation>ERROR: %1 ობიექტი არ დაემატა.</translation>
    </message>
    <message>
        <source>SUCCESS: %1 geometries were changed.</source>
        <translation>SUCCESS: %1 კონფიგურაციები შეიცვალა.</translation>
    </message>
    <message>
        <source>ERROR: %1 geometries not changed.</source>
        <translation>ERROR: %1 კონფიგურაციები არ შეცვლილა.</translation>
    </message>
    <message>
        <source>SUCCESS: %1 features deleted.</source>
        <translation>SUCCESS: %1 ობიექტი წაიშალა.</translation>
    </message>
    <message>
        <source>ERROR: %1 features not deleted.</source>
        <translation>ERROR: %1 ობიექტი არ წაიშალა.</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerProperties</name>
    <message>
        <source>id</source>
        <translation>უნიკალური ნომერი</translation>
    </message>
    <message>
        <source>name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>length</source>
        <translation>სიგრძე</translation>
    </message>
    <message>
        <source>precision</source>
        <translation>სიზუსტე</translation>
    </message>
    <message>
        <source>comment</source>
        <translation>კომენტარი</translation>
    </message>
    <message>
        <source>edit widget</source>
        <translation>widget–ის რედაქტირება</translation>
    </message>
    <message>
        <source>values</source>
        <translation>მნიშვნელობები</translation>
    </message>
    <message>
        <source>line edit</source>
        <translation>ხაზის რედაქტირება</translation>
    </message>
    <message>
        <source>unique values</source>
        <translation>უნიკალური მნიშვნელობები</translation>
    </message>
    <message>
        <source>unique values (editable)</source>
        <translation>უნიკალური მნიშვნელობები (რედაქტირების შესაძლებლობით)</translation>
    </message>
    <message>
        <source>value map</source>
        <translation>მნიშვნელოვანი რუკა</translation>
    </message>
    <message>
        <source>classification</source>
        <translation>კლასიფიკაცია</translation>
    </message>
    <message>
        <source>range (editable)</source>
        <translation>დიაპაზონი (რედაქტირების შესაძლებლობით)</translation>
    </message>
    <message>
        <source>range (slider)</source>
        <translation>დიაპაზონი (სლაიდერი)</translation>
    </message>
    <message>
        <source>file name</source>
        <translation>ფაილის სახელი</translation>
    </message>
    <message>
        <source>Name conflict</source>
        <translation>სახელის კონფლიქტი</translation>
    </message>
    <message>
        <source>The attribute could not be inserted. The name already exists in the table.</source>
        <translation>ატრიბუტის ჩამატება შეუძლებელია. მონაცემთა ბაზაში სახელი უკვე არსებობს.</translation>
    </message>
    <message>
        <source>Transparency: </source>
        <translation>გამჭვირვალობა:</translation>
    </message>
    <message>
        <source>Single Symbol</source>
        <translation>ერთი სიმბოლო</translation>
    </message>
    <message>
        <source>Graduated Symbol</source>
        <translation>დასრულებული სიმბოლო</translation>
    </message>
    <message>
        <source>Continuous Color</source>
        <translation>უწყვეტი ფერი</translation>
    </message>
    <message>
        <source>Unique Value</source>
        <translation>უნიკალური მნიშვნელობა</translation>
    </message>
    <message>
        <source>This button opens the PostgreSQL query builder and allows you to create a subset of features to display on the map canvas rather than displaying all features in the layer</source>
        <translation>ღილაკი ხსნის PostgreSQL მოთხოვნის ამგებს და თქვენ საშუალებას გაძლევთ შექმნათ იმ ობიექტების ქვე–ნაკრები, რომლებიც უნდა გამოჩნდეს რუკის ნახატზე, ამ შრეში არსებული ყველა ფუნქციის მაგივრად</translation>
    </message>
    <message>
        <source>The query used to limit the features in the layer is shown here. This is currently only supported for PostgreSQL layers. To enter or modify the query, click on the Query Builder button</source>
        <translation>ეს მოთხოვნა გამოიყენება ამ შრეში ნაჩვენები ობიექტების შესაზღუდად. ამჟამად ეს მხოლოდ შესაძლებელია PostgreSQL შრეებისთვის. მოთხოვნის შესაყვანად ან შესაცვლელად დააწკაპუნეთ Query Builder ღილაკს</translation>
    </message>
    <message>
        <source>Spatial Index</source>
        <translation>სივრცული ინდექსი</translation>
    </message>
    <message>
        <source>Creation of spatial index successful</source>
        <translation>სივრცული ინდექსის შექმნა წარმატებულია</translation>
    </message>
    <message>
        <source>Creation of spatial index failed</source>
        <translation>სივრცული ინდექსის შექმნა ვერ განხორციელდა</translation>
    </message>
    <message>
        <source>General:</source>
        <translation>გენერალური:</translation>
    </message>
    <message>
        <source>Layer comment: </source>
        <translation>შრის კომეტარი:</translation>
    </message>
    <message>
        <source>Storage type of this layer : </source>
        <translation>ამ შრის შენახული ტიპი:</translation>
    </message>
    <message>
        <source>Source for this layer : </source>
        <translation>ამ შრის წყარო:</translation>
    </message>
    <message>
        <source>Geometry type of the features in this layer : </source>
        <translation>ამ შრეში ობიექტის გეომეტრიული ტიპი : </translation>
    </message>
    <message>
        <source>The number of features in this layer : </source>
        <translation>ამ შრეში ობიექტების რაოდენობა:</translation>
    </message>
    <message>
        <source>Editing capabilities of this layer : </source>
        <translation>ამ შრის შესაძლებლობების რედაქტირება :</translation>
    </message>
    <message>
        <source>Extents:</source>
        <translation>განშლა:</translation>
    </message>
    <message>
        <source>In layer spatial reference system units : </source>
        <translation>შრეში სივრცული მიმთითებელი სისტემის ერთეულები:</translation>
    </message>
    <message>
        <source>xMin,yMin </source>
        <translation>xMin,yMin </translation>
    </message>
    <message>
        <source> : xMax,yMax </source>
        <translation> : xMax,yMax </translation>
    </message>
    <message>
        <source>Layer Spatial Reference System:</source>
        <translation>შრის სივრცული რეფერენსული სისტემა:</translation>
    </message>
    <message>
        <source>In project spatial reference system units : </source>
        <translation>პროექტში სივრცული მიმთითებელი სისტემის ერთეულები:</translation>
    </message>
    <message>
        <source>Attribute field info:</source>
        <translation>ატრიბუტის ველის ინფო:</translation>
    </message>
    <message>
        <source>Field</source>
        <translation>ველი</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ტიპი</translation>
    </message>
    <message>
        <source>Length</source>
        <translation>სიგრძე</translation>
    </message>
    <message>
        <source>Precision</source>
        <translation>სიზუსტე</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>კომენტარი</translation>
    </message>
    <message>
        <source>Default Style</source>
        <translation>საწყისი სტილი</translation>
    </message>
    <message>
        <source>QGIS Layer Style File (*.qml)</source>
        <translation>QGIS შრის სტილის ფაილი (*.qml)</translation>
    </message>
    <message>
        <source>Saved Style</source>
        <translation>შენახული სტილი</translation>
    </message>
    <message>
        <source>QGIS</source>
        <translation>QGIS</translation>
    </message>
    <message>
        <source>Unknown style format: </source>
        <translation>უცნობი სტილის ფორმატი:</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerPropertiesBase</name>
    <message>
        <source>Layer Properties</source>
        <translation>შრის თვისებები</translation>
    </message>
    <message>
        <source>Restore Default Style</source>
        <translation>საწყისი სტილის აღდგენა</translation>
    </message>
    <message>
        <source>Save As Default</source>
        <translation>შენახვა როგორც საწყისი</translation>
    </message>
    <message>
        <source>Load Style ...</source>
        <translation>სტილის ჩატვირთვა ...</translation>
    </message>
    <message>
        <source>Save Style ...</source>
        <translation>სტილის შენახვა ...</translation>
    </message>
    <message>
        <source>General</source>
        <translation>ზიგადი</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>თვისებები</translation>
    </message>
    <message>
        <source>Display name</source>
        <translation>სახელის ჩვენება</translation>
    </message>
    <message>
        <source>Display field for the Identify Results dialog box</source>
        <translation>ველის ჩვენება შედეგების იდენტიფიკაციის დიალოგური ფანჯრისთვის</translation>
    </message>
    <message>
        <source>This sets the display field for the Identify Results dialog box</source>
        <translation>ეს აყენებს ველის ჩვენებას შედეგების იდენტიფიკაციის დიალოგური ფანჯრისთვის</translation>
    </message>
    <message>
        <source>Display field</source>
        <translation>ველის ჩვენება</translation>
    </message>
    <message>
        <source>Use this control to set which field is placed at the top level of the Identify Results dialog box.</source>
        <translation>ამ კონტროლის გამოყენება აყენებს თუ რომელი ვალი უნდა მდებარეობდეს იდენტიფიკაციის დიალოგური ფანჯრის ზედა დონეზე.</translation>
    </message>
    <message>
        <source>Create Spatial Index</source>
        <translation>სივრცული ინდექსის შექმნა</translation>
    </message>
    <message>
        <source>Change CRS</source>
        <translation>CRS –ის ცვლილება</translation>
    </message>
    <message>
        <source>Use scale dependent rendering</source>
        <translation>მასშტაბზე დამოკიდებული ვიზუალიზაციის გამოყენება</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation>მაქსიმუმი</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation>მინიმუმი</translation>
    </message>
    <message>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>მაქსიმალური მასშტაბი რომელზეც ეს შრე უნდა გამოჩნდეს.</translation>
    </message>
    <message>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>მინიმალური მასშტაბი რომელზეც ეს შრე უნდა გამოჩნდეს.</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation>ქვესიმრავლე</translation>
    </message>
    <message>
        <source>Query Builder</source>
        <translation>მოთხოვნის ამგები</translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation>სიმბოლიკა</translation>
    </message>
    <message>
        <source>Legend type</source>
        <translation>ლეგენდის ტიპი</translation>
    </message>
    <message>
        <source>Transparency</source>
        <translation>გამჭვირვალობა</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>მეტამონაცემები (Metadata)</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>წარწერები</translation>
    </message>
    <message>
        <source>Display labels</source>
        <translation>წარწერების ჩვენება</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>მოქმედებები</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>ატრიბუტები</translation>
    </message>
    <message>
        <source>New column</source>
        <translation>ახალი სვეტი</translation>
    </message>
    <message>
        <source>Ctrl+N</source>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <source>Delete column</source>
        <translation>სვეტის წაშლა</translation>
    </message>
    <message>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <source>Toggle editing mode</source>
        <translation>რედაქტირების რეჟიმის ჩართვა/გამორთვა</translation>
    </message>
    <message>
        <source>Click to toggle table editing</source>
        <translation>ცხრილის რედაქტირების ჩართვა/გამორთვისთვის დააწკაპუნეთ </translation>
    </message>
</context>
<context>
    <name>QgsWFSPlugin</name>
    <message>
        <source>&amp;Add WFS layer</source>
        <translation>WFS შრეების &amp;დამატება</translation>
    </message>
</context>
<context>
    <name>QgsWFSProvider</name>
    <message>
        <source>unknown</source>
        <translation>უცნობი</translation>
    </message>
    <message>
        <source>received %1 bytes from %2</source>
        <translation>%2–დან %1 ბაიტის მიღება</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelect</name>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation>დარწმუნებული ხართ თუ არა, რომ გსურთ წაშალოთ</translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation>კავშირი და ყველა შესაბამისი ატრიბუტი?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>წაშლის დადასტურება</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelectBase</name>
    <message>
        <source>Add WFS Layer from a Server</source>
        <translation>სერვერიდან WFS შრის დამატება</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>სათაური</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation>აბსტრაქტული</translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation>კოორდინატთა რეფერენსული სისტემა</translation>
    </message>
    <message>
        <source>Change ...</source>
        <translation>ცვლილება ...</translation>
    </message>
    <message>
        <source>Server Connections</source>
        <translation>სერვერთან კავშირები</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;ახალი</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>წაშლა</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>რედაქტირება</translation>
    </message>
    <message>
        <source>C&amp;onnect</source>
        <translation>კა&amp;ვშირი</translation>
    </message>
</context>
<context>
    <name>QgsWmsProvider</name>
    <message>
        <source>Tried URL: </source>
        <translation>ნაცადი URL:</translation>
    </message>
    <message>
        <source>HTTP Exception</source>
        <translation>HTTP შეცდომა</translation>
    </message>
    <message>
        <source>WMS Service Exception</source>
        <translation>WMS სერვისის შეცდომა</translation>
    </message>
    <message>
        <source>Dom Exception</source>
        <translation>Dom გამონაკლისი</translation>
    </message>
    <message>
        <source>Could not get WMS capabilities: %1 at line %2 column %3</source>
        <translation>შეუძლებელი WMS შესაძლებლობების მიღება: %1 ხაზზე %2 სვეტი %3</translation>
    </message>
    <message>
        <source>This is probably due to an incorrect WMS Server URL.</source>
        <translation>შესაძლოა ეს არის განპირობებული არასწორი WMS სერვერის URL–ით.</translation>
    </message>
    <message>
        <source>Could not get WMS capabilities in the expected format (DTD): no %1 or %2 found</source>
        <translation>შეუძლებელი WMS შესაძლებლობების მიღება ამ მოსალოდნელ ფორმატში (DTD): %1 ან  %2 ვერ მოიძებნა</translation>
    </message>
    <message>
        <source>Could not get WMS Service Exception at %1: %2 at line %3 column %4</source>
        <translation>შეუძლებელია WMS სერვისის შეცდომის მიღება %1–ზე: %2 ხაზზე %3 სვეტი %4</translation>
    </message>
    <message>
        <source>Request contains a Format not offered by the server.</source>
        <translation>მოთხოვნა შეიცავს ფორმატს, რომელიც არ არის შემოთავაზებული სერვერის მიერ.</translation>
    </message>
    <message>
        <source>Request contains a CRS not offered by the server for one or more of the Layers in the request.</source>
        <translation>მოთხოვნა შეიცავს CRS, რომელიც არ არის შემოთავაზებული სერვერის მიერ ერთი ან მეტი შრისთვის ამ მოთხოვნაში.</translation>
    </message>
    <message>
        <source>Request contains a SRS not offered by the server for one or more of the Layers in the request.</source>
        <translation>მოთხოვნა შეიცავს SRS, რომელიც არ არის შემოთავაზებული სერვერის მიერ ერთი ან მეტი შრისთვის ამ მოთხოვნაში.</translation>
    </message>
    <message>
        <source>GetMap request is for a Layer not offered by the server, or GetFeatureInfo request is for a Layer not shown on the map.</source>
        <translation>GetMap მოთხოვნა არის შრისთვის რომელიც არი არის შემოთავაზებული სერვერის მიერ, ან GetFeatureInfo მოთხოვნა არის იმ შრისთვის რომელიც არ არის ნაჩვენები რუკაზე.</translation>
    </message>
    <message>
        <source>Request is for a Layer in a Style not offered by the server.</source>
        <translation>მოთხოვნა არის შრისთვის სტილში რომელიც არ არის შემოთავაზებული სერვერის მიერ.</translation>
    </message>
    <message>
        <source>GetFeatureInfo request is applied to a Layer which is not declared queryable.</source>
        <translation>GetFeatureInfo მოთხოვნა არის მიღებული შრისთვის რომელიც არ არის განცხადებული queryable.</translation>
    </message>
    <message>
        <source>GetFeatureInfo request contains invalid X or Y value.</source>
        <translation>GetFeatureInfo მოთხოვნა შეიცავს არასწორ X ან Y მნიშვნელობას.</translation>
    </message>
    <message>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is equal to current value of service metadata update sequence number.</source>
        <translation>UpdateSequence პარამეტრის მნიშვნელობა (არა აუცილებელი) GetCapabilities მოთხოვნაში არის ტოლი სერვისის  metadata განახლების გამომდინარეობის მიმდინარე რიცხვითი მნიშვნელობის.</translation>
    </message>
    <message>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is greater than current value of service metadata update sequence number.</source>
        <translation>UpdateSequence პარამეტრის მნიშვნელობა (არა აუცილებელი) GetCapabilities მოთხოვნაში არის მეტი სერვისის  metadata განახლების გამომდინარეობის მიმდინარე რიცხვით მნიშვნელობაზე.</translation>
    </message>
    <message>
        <source>Request does not include a sample dimension value, and the server did not declare a default value for that dimension.</source>
        <translation>მოთხოვნა არ შეიცავს სამაგალითო განზომილების მნიშვნელობას, და სერვერს არ აქვს განცხადებული ამ განზომილების საწყისი მნიშვნელობა.</translation>
    </message>
    <message>
        <source>Request contains an invalid sample dimension value.</source>
        <translation>მოთხოვნა შეიცავს არასწორ სამაგალითო განზომილების მნიშვნელობას.</translation>
    </message>
    <message>
        <source>Request is for an optional operation that is not supported by the server.</source>
        <translation>მოთხოვნა არის არა აუცილებელი ოპერაციისთვის რომელიც არ არის მხარდაჭერილი სერვერის მიერ.</translation>
    </message>
    <message>
        <source>(Unknown error code from a post-1.3 WMS server)</source>
        <translation>(უცნობი შეცდომის კოდი post-1.3 WMS სერვერიდან)</translation>
    </message>
    <message>
        <source>The WMS vendor also reported: </source>
        <translation>WMS ვენდორმა ასევე უპასუხა:</translation>
    </message>
    <message>
        <source>Server Properties:</source>
        <translation>სერვერის თვისებები:</translation>
    </message>
    <message>
        <source>Property</source>
        <translation>თვისება</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>მნიშვნელობა</translation>
    </message>
    <message>
        <source>WMS Version</source>
        <translation>WMS ვერსია</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>სათაური</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation>აბსტრაქტული</translation>
    </message>
    <message>
        <source>Keywords</source>
        <translation>სიტყვა-გასაღებები (Keywords)</translation>
    </message>
    <message>
        <source>Online Resource</source>
        <translation>ონლაინ რესურსები</translation>
    </message>
    <message>
        <source>Contact Person</source>
        <translation>საკონტაქტო პიროვნება</translation>
    </message>
    <message>
        <source>Fees</source>
        <translation>შენატანი (Fees)</translation>
    </message>
    <message>
        <source>Access Constraints</source>
        <translation>წვდომის შეზღუდვები</translation>
    </message>
    <message>
        <source>Image Formats</source>
        <translation>ნახატის ფორმატები</translation>
    </message>
    <message>
        <source>Identify Formats</source>
        <translation>ინდენტიფიკაციის ფორმატები</translation>
    </message>
    <message>
        <source>Layer Count</source>
        <translation>შრის დათვლა</translation>
    </message>
    <message>
        <source>Layer Properties: </source>
        <translation>შრის თვისებები:</translation>
    </message>
    <message>
        <source>Selected</source>
        <translation>არჩეული</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>დიახ</translation>
    </message>
    <message>
        <source>No</source>
        <translation>არა</translation>
    </message>
    <message>
        <source>Visibility</source>
        <translation>ხილვადობა</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>ხილვადი</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>დამალული</translation>
    </message>
    <message>
        <source>n/a</source>
        <translation>n/a</translation>
    </message>
    <message>
        <source>Can Identify</source>
        <translation>შესაძლებელია იდენტიფიცირება</translation>
    </message>
    <message>
        <source>Can be Transparent</source>
        <translation>შეიძლება გახდეს გამჭვირვალე</translation>
    </message>
    <message>
        <source>Can Zoom In</source>
        <translation>შესაძლებელია გადიდება</translation>
    </message>
    <message>
        <source>Cascade Count</source>
        <translation>კასკადური დათვლა</translation>
    </message>
    <message>
        <source>Fixed Width</source>
        <translation>ფიქსირებული სიგანე</translation>
    </message>
    <message>
        <source>Fixed Height</source>
        <translation>ფიქსირებული სიმაღლე</translation>
    </message>
    <message>
        <source>WGS 84 Bounding Box</source>
        <translation>WGS 84 შემომსაზღვრავი ჩარჩო</translation>
    </message>
    <message>
        <source>Available in CRS</source>
        <translation type="obsolete">ხელმისაწვდომია CRS –ში</translation>
    </message>
    <message>
        <source>Available in style</source>
        <translation>ხელმისაწვდომია სტილში</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>სახელი</translation>
    </message>
    <message>
        <source>Layer cannot be queried.</source>
        <translation>შრის ფორმირება შეუძლებელია.</translation>
    </message>
</context>
<context>
    <name>QuickPrintGui</name>
    <message>
        <source>Portable Document Format (*.pdf)</source>
        <translation>გადასატანი დოკუმენტის ფორმატი (*.pdf)</translation>
    </message>
    <message>
        <source>quickprint</source>
        <translation>სწრაფი ბეჭდვა</translation>
    </message>
    <message>
        <source>Unknown format: </source>
        <translation>უცნობი ფორმატი:</translation>
    </message>
</context>
<context>
    <name>QuickPrintGuiBase</name>
    <message>
        <source>QGIS Quick Print Plugin</source>
        <translation>QGIS სწრაფი ბეჭდვის ჩანართი</translation>
    </message>
    <message>
        <source>Note: If you want more control over the map layout please use the map composer function in QGIS.</source>
        <translation>შენიშვნა: თუ გსურთ გქონდეთ მეტი ცვლილებების საშუალება რუკის სქემაზე გთხოვთ გამოიყენოთ რუკის შემქმნელი ფუნქცია QGIS–ში.</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>გამომავალი</translation>
    </message>
    <message>
        <source>Use last filename but incremented.</source>
        <translation>გამოიყენე ბოლო სახელი მაგრამ ერთით მომატებული.</translation>
    </message>
    <message>
        <source>last used filename but incremented will be shown here</source>
        <translation>ბოლოს გამოყენებული სახელი,  მაგრამ ერთით მომატებული იქნება აქ ნაჩვენები</translation>
    </message>
    <message>
        <source>Prompt for file name</source>
        <translation>ფაილის სახელის შეკითხვა</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>გვერდის ზომა</translation>
    </message>
    <message>
        <source>Copyright</source>
        <translation>საავტორო უფლება</translation>
    </message>
    <message>
        <source>Map Name e.g. Water Features</source>
        <translation>რუკის სახელი მაგალითად წყლის ობიექტები</translation>
    </message>
    <message>
        <source>Map Title e.g. ACME inc.</source>
        <translation>რუკის სათაური მაგალითად შპს ACME.</translation>
    </message>
    <message>
        <source>Quick Print</source>
        <translation>სწრაფი ბეჭდვა</translation>
    </message>
</context>
<context>
    <name>QuickPrintPlugin</name>
    <message>
        <source>Quick Print</source>
        <translation>სწრაფი ბეჭდვა</translation>
    </message>
    <message>
        <source>Provides a way to quickly produce a map with minimal user input.</source>
        <translation>წარმოქმნის გზას რომ სწრაფად შექმნას რუკა მომხმარებლის მინიმალური შენატანით.</translation>
    </message>
    <message>
        <source>&amp;Quick Print</source>
        <translation>&amp;სწრაფი ბეჭდვა</translation>
    </message>
</context>
<context>
    <name>[pluginname]GuiBase</name>
    <message>
        <source>QGIS Plugin Template</source>
        <translation>QGIS ჩანართის შაბლონი</translation>
    </message>
    <message>
        <source>Plugin Template</source>
        <translation>ჩანართის შაბლონი</translation>
    </message>
</context>
<context>
    <name>dxf2shpConverter</name>
    <message>
        <source>Converts DXF files in Shapefile format</source>
        <translation>გადაყავს DXF ფაილები Shapefile ფორმატში</translation>
    </message>
    <message>
        <source>&amp;Dxf2Shp</source>
        <translation>&amp;Dxf2Shp</translation>
    </message>
</context>
<context>
    <name>dxf2shpConverterGui</name>
    <message>
        <source>Dxf Importer</source>
        <translation>Dxf იმპორტიორი</translation>
    </message>
    <message>
        <source>Input Dxf file</source>
        <translation>შემომავალი Dxf ფაილი</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;Output file&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;გამომავალი ფაილი&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Output file type</source>
        <translation>გამომავალი ფაილის ტიპი</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>პოლიხაზი</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>პოლიგონი</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>წერტილი</translation>
    </message>
    <message>
        <source>Export text labels</source>
        <translation>ტექსტური წარწერების ექსპორტი</translation>
    </message>
    <message>
        <source>Choose a file name to save to</source>
        <translation type="obsolete">ამოირჩიეთ ფაილის სახელი შესანახად</translation>
    </message>
</context>
<context>
    <name>pluginname</name>
    <message>
        <source>[menuitemname]</source>
        <translation>[მენიუს სახელი]</translation>
    </message>
    <message>
        <source>Replace this with a short description of what the plugin does</source>
        <translation>ჩანაცვლება იმის მოკლე აღწერილობით თუ რას აკეთებს ჩანართი</translation>
    </message>
    <message>
        <source>&amp;[menuname]</source>
        <translation>&amp;[მენიუს სახელი]</translation>
    </message>
</context>
</TS>