export default function Settings() {
  return (
    <div className="container">
      <div className="card settings-card">

        {/* Header */}
        <div className="settings-header">
          <h3>Account Settings</h3>
        </div>

        {/* Profile */}
        <div className="profile-section">
          <div className="profile-left">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
            />
            <span className="camera-icon">📷</span>
          </div>

          <div>
            <h4 className="name">Marry Doe</h4>
            <p className="email">Marry@gmail.com</p>
          </div>
        </div>

        {/* Description */}
        <p className="desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

        {/* Divider */}
        <div className="divider"></div>

      </div>
    </div>
  );
}