
const UserInput = ({onChange, userInput}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
            <label>Initial Investment</label>
            <input type="number" required value={userInput.initialInvestment} onChange={(evenet) => onChange('initialInvestment', evenet.target.value )} />
        </p>
        <p>
            <label>Annual Investment</label>
            <input type="number" required value={userInput.annualInvestment} onChange={(evenet) => onChange('annualInvestment', evenet.target.value )} />
        </p>
        </div>
        <div className="input-group">
        <p>
            <label>Expected Return</label>
            <input type="number" required value={userInput.expectedReturn} onChange={(evenet) => onChange('expectedReturn', evenet.target.value )} />
        </p>
        <p>
            <label>Duration</label>
            <input type="number" required value={userInput.duration} onChange={(evenet) => onChange('duration', evenet.target.value )} />
        </p>
      </div>
    </section>
  )
}

export default UserInput
