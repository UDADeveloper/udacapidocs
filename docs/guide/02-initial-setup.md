# Initial setup

To start using the system first you need to register your organization. After successfully signed into the system you'll be asked to enter the name of your organization

![An image](./img/s2_0-RegOrganization.png)

To start using the system you need to register a new project. Click `ADD FORM IN PROJECTS PAGE` button the under the **Active Forms** section or `PROJECTS` menu

![An image](./img/s2-ActiveFormsNone.png)

## Register a Project

**Step 2.2a** Each survey form belongs to a project. Therefore, first, you need to register a new project. In **Projects** page click on the `New Project` button.

![An image](./img/s4-ProjectsNone.png)

Then enter the title of you project in the popup dialog box and click `REGISTER`

![An image](./img/s4-ProjectsAddNew.png)

**Step 2.2b** Using your own ODK Central Server

If you have your own ODK Central server installed you can use it with UDACAPI for this
1.  Click the `Use my own ODK Central Server` checkbox

   ![An image](./img/s4-ProjectsAddNewOwnS.png)
   
2. Type you ODK Central's URL into field `ODK Central's URL` field
3. Type username and password into relevant fields.
::: tip Note

You should enter credentials of the **user who is the administrator** in order to use your own server
:::

## Add a Survey Form

**Step 2.3** Now you can register a survey form. First, click the `NEW FORM` button inside the project block.

![An image](./img/s4-ProjectsAddForm.png)

In the `New Form` dialog box enter the title for the survey form into `Form Title on Device` field. This title will be displayed on Devices. `Instance Name` is automatically generated from the Form title, but you also can manually change it by clicking on the pencil image.  Survey form’s default version is 1, change / increase it when needed. Add some description test about your survey form and click the `Save` button.

![An image](./img/s4-ProjectsAddFormDialog.png)

Now your new form is registered and you are ready to  [upload your XLSForm](./11-upload-xlsform.html).

![An image](./img/s4-ProjectsDraftForm.png)