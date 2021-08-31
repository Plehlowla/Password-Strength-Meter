const strengthMeter = document.getElementById('strength-meter')
const passwordInput = document.getElementById('password-input')
const reasonsContainer = document.getElementById('reasons')

passwordInput.addEventListener('input', updateStrengthMeter)
updateStrengthMeter()

function updateStrengthMeter() {
    const weaknesses = calculatePsswordStrength(passwordInput.value)
    
    let strength = 100
    weaknesses.forEach(weakness => {
        if (wekaness == null) return
        strength -= weakness.deduction
    })
    strengthMeter.style.setProperty('--strength', strength)
}

function calculatePsswordStrength(password){
    const weaknesses = []
    weaknesses.push(lengthWeakness(password))
    return weaknesses
}

function lengthWeakness(password) {
    const length = password.length

    if (length <= 5) {
        return{
            message: 'Your password is too short, like youre height',
            deduction: 40
        }
    }

    if (length <=10) {
        return {
            message: "Your password could be longer",
            deduction: 15
        }
    }
}