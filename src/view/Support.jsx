import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from 'react';

const HelpAndSupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-d-flex p-flex-column p-p-4 p-col-6">
      <Fieldset className="p-mb-4 p-grid p-col-6">
        <div className="p-grid p-fluid p-gap-2 r-gap-2 help-form" style={{gap:'1vw'}}>
          <div className="p-col-12 p-md-6">
            <div className="p-field">
              <label htmlFor="name">Name</label>
              <InputText id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="p-col-12 p-md-6">
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="p-col-12">
            <div className="p-field">
              <label htmlFor="message">Message</label>
              <InputTextarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} />
            </div>
          </div>

          <div style={{display:'flex',gap:'1vw'}}>
            <Button type="submit" label="Submit" style={{background:'#282560',width:'8vw'}}/>
            <Button type="button" label="Reset" onClick={handleReset} className="p-button-secondary" style={{width:'6vw'}} />
          </div>
        </div>
      </Fieldset>
    </form>
  );
};

export default HelpAndSupportForm;
